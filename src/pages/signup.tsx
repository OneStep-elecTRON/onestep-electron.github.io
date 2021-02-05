import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { SubmitHandler, useForm } from "react-hook-form";

import axios from "../../utils/api";
import { setCookie } from "../../utils/cookie";

import "../css/components.css";
import styles from "../css/signup.module.css";
import { GlobalContext } from "../../store/GlobalStateProvider";

interface IFormInput {
  email: string;
  username: string;
  password: string;
}

const SingupPanel = () => {
  const [userData, setUserData] = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, errors, handleSubmit } = useForm<IFormInput>({
    mode: "all",
  });
  const history = useHistory();

  useEffect(() => {
    if (userData) {
      history.replace("/me");
    }
  }, [userData]);

  const onSubmit: SubmitHandler<IFormInput> = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post("signup", payload);
      const { data } = response;
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
    } catch (error) {
      // Request error
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className={styles.headerMessage}>Register now for free.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className={"text " + styles.errorMessage}>
              {(errors.email && errors.email.message) ||
                (errors.password && errors.password.message)}
            </div>
            <div>
              <div className="text">Username</div>
              <input
                name="username"
                ref={register}
                className={"input " + styles.inputBox}
              />
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
                className={"input " + styles.inputBox}
              />
            </div>
            <div>
              <div className="text">Password</div>
              <input
                name="password"
                type="password"
                ref={register({
                  required: { value: true, message: "Password required." },
                  minLength: {
                    value: 5,
                    message: "Password should be at least 5 characters long.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Password should be at least 5 characters long.",
                  },
                })}
                className={"input " + styles.inputBox}
              />
            </div>
            <div>
              <button
                type="submit"
                className={"input button " + styles.signupButton}
              >
                Sign Up
              </button>
            </div>
            <Link to="/login" className="text">
              Already have an account?
            </Link>
          </form>
        </>
      )}
    </main>
  );
};

function Signup() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <SingupPanel />
    </Layout>
  );
}

export default Signup;
