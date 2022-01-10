import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Zoom from 'react-medium-image-zoom';
import styles from '../../utils/imagezoom.module.scss';
import 'react-medium-image-zoom/dist/styles.css';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>PCB Work</h2>
          <p>
            Scroll through some of our commisions we did for some awesome
            people! If you want to work together don't hesitate to message us
            over discord or email.
          </p>
        </div>
      </header>
      <section className="wrapper style1 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">SynthLabs 065</h2>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/065.png"
                alt="065"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
            <p>Hotswap PCB - RGB - ANSI layout</p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/065-pcb.png"
                alt="065 PCB"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
          </div>
        </div>
      </section>
      <section className="wrapper style2">
        <div className="inner">
          <div className="content">
            <h2 className="major">SynthLabs 060</h2>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/060.png"
                alt="060"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
            <p>
              Soldered PCB - no RGB - ANSI and ISO layout - multiple bottom rows
              - seperate daughterboard
            </p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/060-sd.png"
                alt="060 soldered"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
            <p>
              Hotswap PCB - per key RGB - ANSI layout - seperate daughterboard
            </p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/060-hs.png"
                alt="060 hotswap"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
          </div>
        </div>
      </section>
      <section className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Kindakeyboards Conone 80</h2>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/c80.jpg"
                alt="Conone 80"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
            <p>
              Soldered PCB - no RGB - ANSI and ISO layout - multiple bottom rows
              - seperate daughterboard
            </p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/c80-pcb.png"
                alt="C80 PCB"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
          </div>
        </div>
      </section>
      <section className="wrapper style4">
        <div className="inner">
          <div className="content">
            <h2 className="major">Touch Types Therian40</h2>
            <p>The Therian 40 is a great premium 40% Keyboard.</p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/t40.jpeg"
                alt="Therian40"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
            <p>ortho layout - soldered PCB - multiple bottom row options</p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/t40-ortho.png"
                alt="T40 PCB"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
            <p>staggered layout - soldered PCB - multiple bottom row options</p>
            <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
              <StaticImage
                className="image"
                src="../../assets/images/pcbwork/t40-staggered.png"
                alt="T40 PCB"
                placeholder="blurred"
                quality="100"
              />
            </Zoom>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
