import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>0xCB 1337</h2>
        </div>
      </header>
      <section className="wrapper style1 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">1337</h2>
            <p>
              0xCB 1337 is our programmable Macro Keyboard! The Keyboard has 9
              programmable buttons that you can program through VIA to whatever
              you desire. The two buttons on the right cycle through the 4
              different layers by default. The encoder is set to controll all
              your media and the OLED displays stuff like the layer you are on.
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
