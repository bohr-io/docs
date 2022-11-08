import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrate your Github',
    Image: require('@site/static/img/github_frame.png').default,
    description: (
      <>
        And deploy the projects you already have or create new ones with our templates.
      </>
    ),
  },
  {
    title: 'Join our community',
    Image: require('@site/static/img/discord_frame.png').default,
    description: (
      <>
        Something went wrong and you have no idea why? Join our <a href="https://discord.com/invite/p3hhfGg2Uy" target="_blank">discord</a> server and ask for help.
      </>
    ),
  },
  {
    title: 'Develop with stability and security',
    Image: require('@site/static/img/services_frame.png').default,
    description: (
      <>
        We use services from AWS and Cloudflare which are robust and secure. Don't trust your code to just anyone.
      </>
    ),
  },
];

function Feature({Image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
