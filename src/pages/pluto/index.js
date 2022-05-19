import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>0xCB Pluto</h2>
        </div>
      </header>
      <section className="wrapper style1 alt">
        <div className="inner">
          <StaticImage
            className="image fit"
            src="../../assets/images/pluto/stack.jpg"
            alt="stack"
            placeholder="blurred"
          />
          <div className="content">
            <p>
              With the 0xCB Pluto, we wanted to create a small PCB that can be used by
              a lot of keyboards! We all know the keyboards that use a Pro Micro
              or Elite-C as a drop-in controller. The 0xCB Pluto is our take on
              this idea!
              <br />
              <br />
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
                src="../../assets/images/pluto/front.jpg"
                alt="front"
                placeholder="blurred"
              />
              On the Pluto, we use a true mid-mount USB-C port. That way we have
              designed a controller that has the slimmest footprint we know of.
              Also packed in is full ESD protection, so you don't have to worry
              about any electric shocks and breaking the chip. The Pluto also has 
              all the usable pins of the ATMEGA32U4 exposed! There is one more 
              pin exposed compared to the Elite-C. D+ and D- are also exposed,
              which means that you could even hook up a USB daughterboard to the
              Pluto!
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
                src="../../assets/images/pluto/back.jpg"
                alt="back"
                placeholder="blurred"
              />
              On the back side of the Pluto, you can see all the traces clearly. 
              This is achieved by not using a ground plane and using the
              contrast to the FR4 core. Also on the back is the astrological symbol
              for Pluto, with a mixed-in 0xCB logo!
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
                src="../../assets/images/pluto/panel.jpg"
                alt="panel"
                placeholder="blurred"
              />
              The Pluto PCBs are hand-assembled by us! This way we can ensure
              the best quality and test them before sending them out. The bare
              PCBs are manufactured with an ENIG finish, which gives them a nice
              gold touch! As expected, only lead-free solder is used during
              production.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
