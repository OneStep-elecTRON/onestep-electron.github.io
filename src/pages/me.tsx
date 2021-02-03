import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import axios from "../../utils/api";
import { getCookie, eraseCookie } from "../../utils/cookie";

import styles from "../css/me.module.css";

interface UserData {
  id: string;
  username: string;
  email: string;
  track: {
    basic: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
    intermediate: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
    advanced: {
      progress: number;
      quizScore: number;
      totalQuizAnswered: number;
    };
  };
}

function Me() {
  const [token, setToken] = useState<string>(null);
  const [userData, setUserData] = useState<UserData>(null);

  const history = useHistory();

  // Runs at very start!
  useEffect(() => {
    const token = getCookie("token");
    setToken(token ? token : "");
  });

  // Runs when token updates!
  useEffect(() => {
    if (token == "") {
      history.replace("/signup");
    } else {
      const userStoredData = JSON.parse(localStorage.getItem("userData"));
      if (userStoredData) {
        setUserData(userStoredData);
      } else {
        axios
          .get("/", {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setUserData({ ...data.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [token]);

  // Runs when userData updates!
  useEffect(() => {
    const userStoredData = JSON.parse(localStorage.getItem("userData"));
    if (userData && !userStoredData) {
      // Set if userData and local storage dont have data!
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);

  const handleLogout = () => {
    eraseCookie("token"); // erases cookie
    setToken(""); // this routes to signup
  };

  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
        <main className={styles.main}>
        {token && userData && (
          <>
            <div>
              <h1>Welcome back, <span className={styles.username}>{userData.username}!</span></h1>
              <h4>Your Email ID: {userData.email}</h4>
              <div>
                <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
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
          </>
        )}
      </main>
    </Layout>
  );
}

export default Me;
