import React from 'react';

import Layout from '../../components/Layout';

import pic1337 from '../../assets/images/1337.jpg';
import picstatic from '../../assets/images/static-full.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Instructions</h2>
          <p>
            Here you will find instructions for our keebs.
          </p>
        </div>
      </header>
      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <Link to="/1337/instructions">
                <img className="image" src={pic1337} alt="" />
              </Link>
              <h3 className="major">1337 assembly instructions</h3>
            </article>
            <article>
              <Link to="/static/instructions">
                <img className="image" src={picstatic} alt="" />
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
