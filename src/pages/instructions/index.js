import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Instructions</h2>
          <p>Here you will find instructions for our keebs.</p>
        </div>
      </header>
      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <Link to="/1337/instructions">
                <StaticImage
                  className="image"
                  src="../../assets/images/instructions/1337.jpg"
                  alt="1337"
                  placeholder="blurred"
                />
              </Link>
              <h3 className="major">1337 assembly instructions</h3>
            </article>
            <article>
              <Link to="/static/instructions">
                <StaticImage
                  className="image"
                  src="../../assets/images/instructions/static.jpg"
                  alt="Static"
                  placeholder="blurred"
                />{' '}
              </Link>
              <h3 className="major">Static assembly instructions</h3>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
