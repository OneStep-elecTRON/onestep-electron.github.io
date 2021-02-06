import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { SubmitHandler, useForm } from "react-hook-form";

import axios from "../../utils/api";
import { setCookie } from "../../utils/cookie";

import styles from "../css/login.module.css";

// Global Store
import { GlobalContext } from "../../store/GlobalStateProvider";

interface IFormInput {
  email: string;
  password: string;
}

const LoginPanel = () => {
  const [userData, setUserData] = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, errors, handleSubmit } = useForm<IFormInput>({
    mode: "all",
  });
  const history = useHistory();

  useEffect(() => {
    if (userData) {
      // Route to account
      history.replace("/me");
    }
  }, [userData]);

  const onSubmit: SubmitHandler<IFormInput> = (payload) => {
    setLoading(true);
    axios
      .post("signin", payload)
      .then(({ data }) => {
        if (data.data) {
          // Set token.
          setCookie("token", data.data.token);
          // Get userData.
          axios
            .get("/", {
              headers: {
                authorization: `Bearer ${data.data.token}`,
              },
            })
            .then(({ data }) => {
              setUserData({ ...data.data });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setError(data.message || data[0].msg);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Request error
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.main}>
          <h1 className={styles.header}>Pick up right where you left off.</h1>
          <form className={styles.form}>
            <div className={"text " + styles.errorMessage}>
              {(errors.email && errors.email.message) ||
                (errors.password && errors.password.message)}
            </div>
            <div>
              <div className="text">Email</div>
              <input
                name="email"
                type="email"
                ref={register({
                  required: { value: true, message: "Email required." },
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid email address.",
                  },
                })}
                className={styles.input}
              />
            </div>
            <div>
              <div className="text">Password</div>
              <input
                name="password"
                type="password"
                ref={register({
                  required: { value: true, message: "Password required." },
                })}
                className={styles.input}
              />
            </div>
            <div>
              <div onClick={handleSubmit(onSubmit)} className={styles.login}>
                Log In
              </div>
            </div>
            <Link to="/signup" className="text">
              Don't have an account?
            </Link>
          </form>
        </div>
      )}
    </main>
  );
};

function Login() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <LoginPanel />
    </Layout>
  );
}

export default Login;
