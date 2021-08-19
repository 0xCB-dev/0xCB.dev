import React from 'react';

import Layout from '../../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Static assembly instructions (WIP!!!)</h2>
          <p>
            Here you can find the instructions for the 0xCB Static!
            <br />
            If you have any problems during assembly don't hesitate to shoot us
            a e-mail or just ask over at our discord.
          </p>
          <div>
            <a
              href="https://files.0xcb.dev/0xCB/static/humanpnp.html"
              rel="external noreferrer"
              target="_blank"
            >
              Open in new Tab
            </a>
            <iframe
              src="https://files.0xcb.dev/0xCB/static/humanpnp.html"
              title="humanpnp"
              style={{ width: '100%', height: '400px' }}
            ></iframe>
          </div>
        </div>
      </header>
    </section>
  </Layout>
);

export default IndexPage;
