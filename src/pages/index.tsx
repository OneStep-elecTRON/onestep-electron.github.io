import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from '../css/index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A community-led, open-sourced, e-learning platform for Machine Learning and Data Science, developed with ❤️ at elecTRON.">
      <main className={styles.header}>
        <div className={styles.header_content}>
          <h1 className={styles.header_title}>Kick start your Journey with One Step</h1>
          <p className={styles.header_desc}>We help you get started with Machine Learning and Data Science in the best way possible.</p>
        </div>
        <div className={styles.header_img_wrapper}>
          <img className={styles.header_img} src="img/landingpage-illustration01.svg" />
        </div>
        {/* <div className={styles.curve}></div> */}
      </main>
    </Layout>
  );
}
