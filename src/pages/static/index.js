import React from 'react';

import Layout from 'components/Layout';

import pichead from 'assets/images/static/index/static-full.jpg';
import pictop from 'assets/images/static/index/static-top.jpg';
import picplate from 'assets/images/static/index/static-plate.jpg';
import picside from 'assets/images/static/index/static-side.jpg';
import piclayout from 'assets/images/static/index/static-layout.jpg';
import picbg from 'assets/images/bg.jpg';

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
          <img className="image fit" src={picbg} alt="" />
          <div className="content">
            <p>
              Here it is! The 0xCB Static. Feel free to scroll through here and
              learn a bit about its features and look at a few nice pics of it!{' '}
              <br />
              <br />
              <br />
              As always head over to our Discord to always get the latest news
              and just to hang out with us:
              <br />
              <br />
              <span>
                <a
                  href="https://discord.gg/WpmFC2NRWV"
                  rel="noreferrer"
                  target="_blank"
                  className="button primary fit"
                >
                  Join us on Discord ;)
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
              The keyboard will be available as a DIY kit. The kit will come
              with the plate for the switches, the bottom plate, an acrylic
              sheet to cover the electronics, the PCB, and all its electronic
              components including one OLED screen and a rotary encoder. Also
              included will be the 3D-printed feet and all the brass standoffs,
              screws, and rubber feet. As an added bonus you will get a
              3D-Printed diode bender so you can bend your diodes easy and
              exact. You will need to supply your own switches, screw-in
              stabilizers, and keycaps.
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
              about what layer you are on and if Caps or Numlock is on. We also
              added a second Layer to the OLED that you can switch to which
              shows BongoCat which is animated when you begin typing.
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
              <span className="image fit">
                <img src={picplate} alt="" />
              </span>
              The base kits for the Static will feature black or white FR4
              plates. However you can get a stainless steel and aluminium extra
              to replace them with a higher quality feeling metal.
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style5">
        <div className="inner">
          <div className="content">
            <p>
              The keyboard fully supports VIA and QMK so you can configure the
              whole keyboard to have multiple Layers, what macros you want and
              what the Rotary Encoder and OLED Screen should do, and many more
              QMK quirks.
              <br />
              You have these five options for the bottom row:
              <span className="image fit">
                <img src={piclayout} alt="" />
              </span>
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
