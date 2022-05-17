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
              With the Pluto we wanted to create a small PCB that can be used by
              a lot of keyboards! We all know the keyboards that use a ProMicro
              or Elite-C as a controller drop in. The 0xCB Pluto is our take on
              that idea.
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
              On the Pluto we use a true mid mount USB-C port. That way we have
              achieved a controller that has the slimmest footprint we know of.
              We also packed in a full ESD protection so you don't have to worry
              about any electric shocks hitting that AtMega. We also exposed all
              of the pins we could. We are exposing one more pin than on an
              Elite-C. D+ and D- are also exposed which means you can easily
              hook up a daughterboard to the Pluto.
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
              On the back side of the Pluto you can see all the traces running
              along. This is achieved by not using a GroundPlane and using the
              contrast to the FR4 core. We also used the space in the middle to
              display the sign for Pluto with our logo mixed in to it.
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
              The PCBs of the Plutos are all hand assembled by us! This way we
              can asure the highest quality! We also test every single one
              before sending them out. The PCBs are manufactured with a ENIG
              finish, which gives them the nice golden touches. In production we
              only use lead free solder so you are not getting in contact with
              harmful substances.
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
