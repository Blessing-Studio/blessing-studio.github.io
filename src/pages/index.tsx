import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.headDiv)}>
          <svg viewBox="-35 -25 100 100" className={styles.backgroundAnimatePrimary} xmlns="http://www.w3.org/2000/svg">
            <path className={styles.svgPathPrimary} d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
          </svg>
          <svg viewBox="-35 -25 100 100" className={styles.backgroundAnimateSecondary} xmlns="http://www.w3.org/2000/svg">
            <path className={styles.svgPathSecondary} d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"/>
          </svg>
          <img className={styles.heroLogo} src="img/BlessingStudio.png" alt="Blessing Studio Icon"/>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/Blessing-Studio">
              查看我们的GitHub页面
            </Link>
          </div>
        </div>
      </header>
  );
}

function HomepageSupport() {
  const {siteConfig} = useDocusaurusContext();
  return (
      <header className={clsx('hero hero--secondary', styles.supportHero)}>
        <div className={clsx('container', styles.supportDiv)}>
          <h1 style={{ fontSize: '100px'}}>🤔</h1>
          <Heading as="h1" className="hero__title">
            需要寻求帮助？
          </Heading>
          <p className="hero__subtitle">
            我们有一些群聊，群聊里面的人非常《和谐友爱》，
            <br/>
            也许群聊里面有人可以帮助你解决问题，需要帮助的话进去问问？awa
            <br/>
            当然，闲聊灌水也可以，甚至⚡发 电⚡😈
            <br/><br/>
            <h1 className={styles.joinColor}>甚至，成为我们的一员！</h1>
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/About/JoinUs">
              查看详情
            </Link>
            <Link
              className={clsx('button button--secondary button--lg', styles.button)}
              to="https://github.com/Blessing-Studio">
              算了还是GitHub issues和Discussions吧😨
            </Link>
          </div>
        </div>
      </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Blessing.Docs.Demo测试站点！🥳`}
      description="快速帮助使用Blessing Studio的各种项目awa">
      <HomepageHeader />
      <main>
        <div className={styles.mainDiv}>
          <h1>查看我们的文档</h1>
          <HomepageFeatures />
          <HomepageSupport />
        </div>
      </main>
    </Layout>
  );
}
