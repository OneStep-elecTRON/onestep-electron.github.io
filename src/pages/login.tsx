import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { SubmitHandler, useForm } from "react-hook-form";

import axios from "../../utils/api";
import { setCookie } from "../../utils/cookie";

import "../css/components.css";
import styles from "../css/login.module.css";

interface IFormInput {
  email: string;
  password: string;
}

function Signup() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const { register, errors, handleSubmit } = useForm<IFormInput>({
    mode: "all",
  });

  const history = useHistory();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLoading(true);
    axios
      .post("signin", {
        email: data.email,
        password: data.password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.data) {
          setCookie("token", data.data.token);
          history.replace("/me");
        } else {
          setError(data.message || data[0].msg);
          setLoading(false);
        }
      })
      .catch(({ response }) => {
        setError(response.data.error);
        setLoading(false);
      });
  };

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="main">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className={'text ' + styles.errorMessage}>
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
                })}
                className={"input " + styles.inputBox}
              />
            </div>
            <div>
              <button type="submit" className={"input button " + styles.loginButton}>
                Log In
              </button>
            </div>
            <Link to="/signup" className="text">
              Don't have an account?
            </Link>
          </form>
        )}
      </main>
    </Layout>
  );
}

export default Signup;
