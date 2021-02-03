import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import axios from "../../utils/api";
import { getCookie, eraseCookie } from "../../utils/cookie";

import styles from "../css/me.module.css";

// Global Store
import { GlobalContext } from "../../store/GlobalStateProvider";

const UserStats = () => {
  const [userData, setUserData] = useContext(GlobalContext);
  const history = useHistory();

  // At start
  useEffect(() => {
    console.log("From me:" + userData);
    const token = getCookie("token");
    if (!token) {
      history.replace("/login");
    } else {
      // Do we need to fetch data?
      // axios
      //   .get("/", {
      //     headers: {
      //       Authorization: `bearer ${token}`,
      //     },
      //   })
      //   .then(({ data }) => {
      //     setUserData({ ...data.data });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    }
  });

  const handleLogout = () => {
    eraseCookie("token"); // Erases cookie.
    setUserData(null);
  };

  if (!userData) return null;

  return (
    <main className={styles.main}>
      <div>
        <h1>
          Welcome back,{" "}
          <span className={styles.username}>{userData.username}!</span>
        </h1>
        <h4>Your Email ID: {userData.email}</h4>
        <div>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1>Here's how you're doing.</h1>
          <div className={styles.section}>
            <div className={styles.card}>
              <div className={styles.title}>Basic</div>
              <div>
                <div>Progress: {userData.track.basic.progress}</div>
                <div>
                  Quizzes Solved: {userData.track.basic.quizScore}/
                  {userData.track.basic.totalQuizAnswered}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>Intermediate</div>
              <div>
                <div>Progress: {userData.track.intermediate.progress}</div>
                <div>
                  Quizzes Solved: {userData.track.intermediate.quizScore}/
                  {userData.track.intermediate.totalQuizAnswered}
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>Advanced</div>
              <div>
                <div>Progress: {userData.track.advanced.progress}</div>
                <div>
                  Quizzes Solved: {userData.track.advanced.quizScore}/
                  {userData.track.advanced.totalQuizAnswered}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

function Me() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <UserStats />
    </Layout>
  );
}

export default Me;
