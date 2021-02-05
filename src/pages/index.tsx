import React, { useContext } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

// Global Store
import { GlobalContext } from "../../store/GlobalStateProvider";

const features = [
  {
    title: "Easy Track",
    imageUrl: "img/one-tier-pyramid.png",
    description: <>Decision Tree, K-Means, Random Forest, SVM, KNN.</>,
    baseUrl: "docs/EasyTrack/",
  },
  {
    title: "Intermediate Track",
    imageUrl: "img/two-tier-pyramid.png",
    description: <>Coming soon.</>,
    baseUrl: "docs/IntermediateTrack/",
  },
  {
    title: "Advanced Track",
    imageUrl: "img/three-tier-pyramid.png",
    description: <>Coming soon.</>,
    baseUrl: "docs/AdvancedTrack/",
  },
];

function Feature({ imageUrl, title, description, baseUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        {imgUrl && (
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        )}
        <h3>{title}</h3>
        <div className={styles.featureDescription}>
          <p>{description}</p>
        </div>
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
            styles.getStarted
          )}
          to={useBaseUrl(baseUrl)}
        >
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

const GetStartedButton = () => {
  const [userData] = useContext(GlobalContext);
  return (
    <div className={styles.buttons}>
      <Link
        className={clsx(
          "button button--outline button--secondary button--lg",
          styles.login
        )}
        to={useBaseUrl(userData ? "docs/learning-tracks" : "login")}
      >
        {userData ? "Keep Learning" : "Log In"}
      </Link>
    </div>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.logo}
            src="img/logo-allblack-full.png"
            alt="One Step Logo"
          />
          {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <GetStartedButton />
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <h1 className={styles.featuresTitle}>MACHINE LEARNING TRACKS</h1>
              </div>
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={styles.crashCourse}>
          <div className="container">
            <div className="row">
              <h1 className={styles.crashCourseTitle}>PYTHON CRASH COURSE</h1>
            </div>
            <div className="row">
              <div className={clsx("col col--6")}>
                <div className="text--center">
                  <img
                    className={styles.crashCourseImage}
                    src={"img/python-logo.png"}
                    alt="python logo"
                  />
                </div>
              </div>
              <div className={clsx("col col--6")}>
                <div className="text--center">
                  <p className={styles.crashCourseDescription}>
                    Descripiton of crash course comes here.
                  </p>
                  <Link
                    className={clsx(
                      "button button--outline button--secondary button--lg",
                      styles.crashCourseButton
                    )}
                    to={useBaseUrl("docs/python-crash-course")}
                  >
                    COMING SOON
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
