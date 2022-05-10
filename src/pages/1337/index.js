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
          <StaticImage
            className="image fit"
            src="../../assets/images/1337/index/new/basic.jpg"
            alt="cover"
            placeholder="blurred"
          />
          <div className="content">
            <p>
              The 0xCB 1337 is our programmable macropad! It features eight
              switches, a clickable rotary encoder, RGB backlighting and
              underglow lighting and an OLED display that displays information
              about the layers. All these features are packed into a nice 3D
              printed case with a frosted bottom plate for RGB light diffusion,
              with the case being available in either black or white.
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
                src="../../assets/images/1337/index/new/oled.jpg"
                alt="topdown"
                placeholder="blurred"
              />
              The 1337 comes standard with 4 layers. You can navigate between
              these layers with the right-most keys on the macropad. The HOME
              layer has some useful navigation keys and media keys by default.
              You can also change your volume with the encoder on this layer.
              The MISC layer is empty by default. You can fill this layer up
              with macros for your most used shortcuts, or maybe for keys that
              you’re missing on your keyboard. The 1337 is compatible with Vial,
              so you can even change the encoder all to your liking!
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
                src="../../assets/images/1337/index/new/rgb.jpg"
                alt="side"
                placeholder="blurred"
              />
              The RGB layer is used to change the underglow lighting and the
              backlighting under the keys. You can change the effects,
              saturation and hue of the lighting with the key, and change the
              brightness with the encoder!
              <br />
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
