import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>0xCB Static</h2>
        </div>
      </header>
      <section className="wrapper style1 alt">
        <div className="inner">
          <StaticImage
            className="image fit"
            src="../../assets/images/static/index/cover.jpg"
            alt="cover"
            placeholder="blurred"
          />
          <div className="content">
            <p>
              And here it is in all it's glory, the 0xCB Static! <br />
              We encourage you to take a scroll and learn all about it's
              features, or just spend a couple minutes soaking in it's raw
              industrial beauty.
              <br />
              <br />
              Always feel free to come say hi on our Discord server. Whether
              it's to get the latest news on our products, get some help with
              your build, show off your fancy new Static, or just say hi and
              come hang out for a bit, we'd love to see you!
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
      <section className="wrapper style2">
        <div className="inner">
          <div className="content">
            <p>
              <StaticImage
                className="image fit"
                src="../../assets/images/static/index/topdown.jpg"
                alt="topdown"
                placeholder="blurred"
              />
              Our new Static keyboard is selling as a DIY build kit, and we're
              especially excited to announce that it is available through our
              friend David over at
              <a
                href="https://candykeys.com/product/0xcb-static-keyboard-kit"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                CandyKeys
              </a>
              ! Each kit includes a Static PCB, switch and bottom plate, EC11
              rotary encoder and knob, 0.91" OLED screen, acrylic
              OLED/electronics cover, all of the required through-hole
              components and mounting hardware, plus a pair of 3D printed feet.
              We've even gone so far as to design and 3D print a perfectly sized
              diode bender to put in each kit, so you'll end up with not only
              the easiest but the cleanest build you thought possible! All you
              need to supply are your own switches, screw-in stabilizers, and
              keycaps.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <p>
              <StaticImage
                className="image fit"
                src="../../assets/images/static/index/static-side.jpg"
                alt="side"
                placeholder="blurred"
              />
              The Static has two available orientations, a 6° angle via our 3D
              printed feet or flat against your desk if that's more your
              flavour. For both future-proofing and convenience sake we've gone
              with a left-mounted USB-C port, we think this is ideal for the
              majority of people. Using our stock firmware the rotary encoder
              will function as volume control, but this is totally programmable
              within QMK/VIA itself so you may find it useful for things like
              page scrolling or video/audio seeking. By taking a glance at your
              OLED screen, you'll quickly be able to tell not only what layer
              you're on but information like whether caps/num lock is enabled.
              Not only that, but we've added a hidden animated second layer to
              your OLED that features everyone's favourite percussion-loving
              feline, BongoCat. He'll show up to play the song of his people on
              his drum whenever you begin typing, and will beat it faster and
              faster as your own wpm increase!
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style4">
        <div className="inner">
          <div className="content">
            <p>
              <StaticImage
                className="image fit"
                src="../../assets/images/static/index/metal.jpg"
                alt="metal"
                placeholder="blurred"
              />
              All of our base kits will come with your choice of either black or
              white FR4 switch and bottom plates, for that nice flexy feel and
              thocky sound profile so many of you have come to know and love. If
              you prefer a firmer typing experience or a more premium look,
              we'll also have a seperate upgrade available consisting of an
              additional lasercut stainless steel bottom and aluminum switch
              plate. We think this combination in particular captures the
              industrial vibe we were after and we're very proud of it, we hope
              you love it as much as we do!
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <p>
              As we've previously mentioned, the Static keyboard natively
              supports both QMK and VIA. This makes it incredibly easy to
              configure your keyboard to your exact needs; from how many layers
              you have and what each does, to specific workflow macros, to the
              rotary encoder/OLED screen behaviour! The possibilities are truly
              endless and we've really only scratched the surface here, you're
              just gonna have to get your hands on one to see what we mean!
              <br />
              Please see our layout and supported bottom row options below:
              <StaticImage
                className="image fit"
                src="../../assets/images/static/index/static-layout.jpg"
                alt="layout"
                placeholder="blurred"
              />
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
