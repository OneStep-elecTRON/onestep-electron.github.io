import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { eraseCookie } from "../../utils/cookie";

import styles from "../css/me.module.css";

// Global Store
import { GlobalContext } from "../../store/GlobalStateProvider";

function Me() {
  const context = useDocusaurusContext();

  const [userData, setUserData] = useContext(GlobalContext);
  const history = useHistory();

  // If userData not found, route to login.
  useEffect(() => {
    if (!userData) {
      history.replace("/login");
    }
  }, [userData]);

  const handleLogout = () => {
    eraseCookie("token"); // Erases cookie.
    setUserData(null);
  };

  const { siteConfig = {} } = context;

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.main}>
        {userData && (
          <div>
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
                        Quizzes Solved: {userData.track.basic.quizScore | 0}/
                        {userData.track.basic.totalQuizAnswered | 0}
                      </div>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.title}>Intermediate</div>
                    <div>
                      <div>
                        Progress: {userData.track.intermediate.progress}
                      </div>
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
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Me;
