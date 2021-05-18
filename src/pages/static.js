import React from 'react';

import Layout from '../components/Layout';

import pichead from '../assets/images/static-r-full.jpg';
import pictop from '../assets/images/static-r-top.jpg';
import picplate from '../assets/images/static-plate.png';
import picside from '../assets/images/static-r-side.jpg';
import piclayout from '../assets/images/static-layout.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>0xCB Static</h2>
        </div>
      </header>
      <section className="wrapper style1">
        <div className="inner">
          <img className="image fit" src={pichead} alt="" />
          <div className="content">
            <p>
              Meet the 0xCB Static. After the launch of our macro pad, we wanted
              to do something bigger. So we made a 40% keyboard with an
              industrial design. This is an interest check to see, what you guys
              think of it.
              <br />
              <br />
              <span>
                <a
                  href="https://forms.gle/eV5sr4wGcRR86Vcq9"
                  rel="noreferrer"
                  target="_blank"
                  className="button primary fit"
                >
                  Feel free to vote here
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper alt style2">
        <div className="inner">
          <div className="content">
            <p>
              <span className="image fit">
                <img src={pictop} alt="" />
              </span>
              The keyboard will be available as a prebuilt and as a DIY kit. The
              kit will come with the plate for the switches, the bottom plate,
              an acrylic sheet to cover the electronics, the PCB, and all its
              electronic components including one OLED screen and a rotary
              encoder. Also included will be the 3D-printed feet and all the
              brass standoffs, screws, and rubber feet. You will need to supply
              your own switches, screw-in stabilizers, and keycaps.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style3">
        <div className="inner">
          <div className="content">
            <p>
              <span className="image fit">
                <img src={picside} alt="" />
              </span>
              The Keyboard sits flush on the table or at a 6° angle if you
              prefer it that way. It has a USB-C port on the back for you to
              connect it to your computer. With the rotary controller, you can
              control your volume and on the OLED screen, there will be info
              about what layer you are on.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper alt style4">
        <div className="inner">
          <div className="content">
            <p>
              <span className="image left">
                <img src={picplate} alt="" />
              </span>
              The plate will be available in aluminum for sure but we will see
              what other materials you want. We were thinking of V2A (stainless
              steel) for the bottom plate, as it is rust-resistant but has a
              nice weight to it at a decent price.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style5">
        <div className="inner">
          <div className="content">
            <p>
              <span className="image right">
                <img src={piclayout} alt="" />
              </span>
              The keyboard fully supports VIA and QMK so you can configure the
              whole keyboard to have multiple Layers, what macros you want and
              what the Rotary Encoder and OLED Screen should do, and many more
              QMK quirks.
              <br />
              You have these five options for the bottom row:
            </p>
            <ul className="actions">
              <li>
                <a
                  href="https://forms.gle/eV5sr4wGcRR86Vcq9"
                  rel="noreferrer"
                  target="_blank"
                  className="button primary fit"
                >
                  Feel free to vote here
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/WpmFC2NRWV"
                  rel="noreferrer"
                  target="_blank"
                  className="button primary fit"
                >
                  Join us on Discord ;)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
