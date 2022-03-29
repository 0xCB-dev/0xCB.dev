import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>!!!WIP!!! 0xCB 1337 !!!WIP!!!</h2>
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
              The 1337 comes standard with 4 layers. You can
              navigate between these layers with the right-most keys on the
              macropad. The HOME layer has some useful navigation keys and media
              keys by default. You can also change your volume with the encoder
              on this layer. The MISC layer is empty by default. You can fill
              this layer up with macros for your most used shortcuts, or maybe
              for keys that you’re missing on your keyboard. The 1337 is
              compatible with Vial, so you can even change the encoder all to
              your liking!
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
              The RGB layer is used to change the underglow
              lighting and the backlighting under the keys. You can change the
              effects, saturation and hue of the lighting with the key, and
              change the brightness with the encoder!
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
