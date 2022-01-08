import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>PCB Work</h2>
        </div>
      </header>
      <section className="wrapper style1 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">WIP!</h2>
            <p>
              WIP!
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
