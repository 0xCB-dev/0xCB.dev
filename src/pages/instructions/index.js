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
        </div>
      </header>
      <div className="wrapper style1 alt">
        <div className="inner">
          <section className="features">
            <article>
              <Link to="/1337/instructions_old">
                <StaticImage
                  className="image"
                  src="../../assets/images/instructions/1337.jpg"
                  alt="1337"
                  placeholder="blurred"
                />
              </Link>
              <h3 className="major">1337</h3>
              <p> Instructions for our little macro pad.</p>
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
              <h3 className="major">Static</h3>
              <p> Instructions for our way bigger 40% keyboard.</p>
            </article>
            <article>
              <Link to="/static/instructions/case">
                <StaticImage
                  className="image"
                  src="../../assets/images/instructions/case.jpg"
                  alt="Static"
                  placeholder="blurred"
                />{' '}
              </Link>
              <h3 className="major">Static Acrylic Case</h3>
              <p> Instructions for our Acrylic Case for the Static.</p>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
