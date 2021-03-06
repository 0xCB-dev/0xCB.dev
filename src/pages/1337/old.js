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
      <section className="wrapper spotlight style1">
        <div className="inner">
          <StaticImage
            className="image"
            src="../../assets/images/1337/index/head.jpg"
            alt="cover"
            placeholder="blurred"
          />
          <div className="content">
            <h2 className="major">1337</h2>
            <p>
              0xCB 1337 is our programmable Macro Keyboard! The Keyboard has 9
              programmable buttons that you can program through VIA to whatever
              you desire. The two buttons on the right cycle through the 4
              different layers by default. The HOME and MISC Layer are for your
              general Macros. The BACKLIGHT layer is there to customize your
              white keycap lights. And the RGB layer is there to programm the
              RGB underglow. So you can program all of the lights on the
              keyboard and you don´t have to use VIA! But if you don't want to
              program the lights through your keyboard you can of course put
              other Macros on there. If you want to customize it even further
              you can use QMK keymaps to add even more functionality.
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style4 alt">
        <div className="inner">
          <h3 className="major">
            Here you can see renders of our different variants. They are of
            course all based on the same design, but some have OLEDs and rotary
            encoders and some don´t. ;)
          </h3>
          <section className="features">
            <article>
              <StaticImage
                className="image"
                src="../../assets/images/1337/index/encoled.jpg"
                alt="encoled"
                placeholder="blurred"
              />
              <p>The most common variant with all options.</p>
            </article>
            <article>
              <StaticImage
                className="image"
                src="../../assets/images/1337/index/swoled.jpg"
                alt="swoled"
                placeholder="blurred"
              />
              <p>Like the common variant just without the rotary encoder.</p>
            </article>
            <article>
              <StaticImage
                className="image"
                src="../../assets/images/1337/index/enc.jpg"
                alt="enc"
                placeholder="blurred"
              />
              <p>Very clean build without the OLED but with the encoder.</p>
            </article>
            <article>
              <StaticImage
                className="image"
                src="../../assets/images/1337/index/sw.jpg"
                alt="sw"
                placeholder="blurred"
              />
              <p>The most simple keyboard with just 9 switches.</p>
            </article>
          </section>
        </div>
      </section>
      <section className="wrapper spotlight style2">
        <div className="inner">
          <StaticImage
            className="image"
            src="../../assets/images/1337/index/only.jpg"
            alt="only"
            placeholder="blurred"
          />
          <div className="content">
            <h2 className="major">DIY</h2>
            <p>
              You do all the tinkering with this option - feel free to use the
              instructions available <a href="/instructions">here</a> though :D
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper spotlight style3 alt">
        <div className="inner">
          <StaticImage
            className="image"
            src="../../assets/images/1337/index/pcb-closeup.jpg"
            alt="pcb"
            placeholder="blurred"
          />
          <div className="content">
            <h2 className="major">Presoldered DIY</h2>
            <p>
              Same as above, but we will solder the SMD components for you
              (depending on the options you choose) because we know soldering
              surface mount components is a bit fiddley ;) <br /> Further
              assembly instructions are available{' '}
              <a href="/instructions">here</a>.
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper spotlight style4">
        <div className="inner">
          <StaticImage
            className="image"
            src="../../assets/images/1337/index/white.jpg"
            alt="white"
            placeholder="blurred"
          />
          <div className="content">
            <h2 className="major">Fully Assembled</h2>
            <p>
              With our fully assembled version, you don´t have to do anything!
              You can just decide, which options of our keyboard you want and we
              will custom build it for you! When the keyboard gets to your
              doorstep you just have to plug it in and it works!
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style2 alt">
        <div className="inner">
          <h2 className="major">Colors</h2>
          <p>
            We have a few different options for the color of the case. All of
            our filaments are PLA and the black is matte, so after printing, it
            will not be glossy anymore.
          </p>
          <StaticImage
            className="image fit"
            src="../../assets/images/1337/index/color.jpg"
            alt="colors"
            placeholder="blurred"
          />
        </div>
      </section>
    </section>
    <section className="wrapper spotlight style5 ">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/mcu.jpg"
          alt="mcu"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">Our Microcontrollers</h2>
          <p>
            We have two different versions for the microcontrollers. You can get
            a Pro Micro clone with a micro USB from us or you can go for the
            Elite-C (rev4). The Elite-C has USB-C and is generally more stable
            and powerful. We will flash the microcontrollers bootloader with an
            ISP flasher to QMK-DFU - this bootloader is far more stable and is
            unbrickable in contrast to Catarina (The standard ProMicro
            bootloader). This also makes updating or flashing other keymaps down
            the road for the users [you ;) ] easier.
          </p>
        </div>
      </div>
    </section>
    <section className="wrapper spotlight style6 alt">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/kk.jpg"
          alt="kk"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">Keycaps</h2>
          <p>
            We offer simple MX Keycaps in Black, White, Yellow and Blue. They
            are nothing special, but they get the job done and they feel really
            nice.
          </p>
        </div>
      </div>
    </section>
    <section className="wrapper spotlight style5">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/sws.jpg"
          alt="sws"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">Switches</h2>
          <p>
            The switches are always an important part of any keyboard. We will
            add and remove different varieties of switches in the future. When
            you want to get a special switch with your keyboard just let us know
            and we´ll see, what we can do! The PCB is not hot-swappable [at the
            moment ;)] so when you don't buy the switches from us, you will need
            to solder them to the PCB yourself!
            <br />
            To see all the switches we offer at the moment please go to our
            Tindie page.
          </p>
        </div>
      </div>
    </section>
    <section className="wrapper spotlight style4 alt">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/screen.jpg"
          alt="oled"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">OLED Screen</h2>
          <p>
            When you get the version of the keyboard with an OLED screen it will
            show you things like CAPS-lock, NUM-lock, Scroll-lock, and the layer
            you are currently on. The OLED Screen sleeps after a few minutes to
            prevent Screen burn-in. When you are on the RGB Layer it will also
            show you the RGB Settings you are currently using.
          </p>
        </div>
      </div>
    </section>
    <section className="wrapper spotlight style3">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/enck.jpg"
          alt="enck"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">Rotary Knob</h2>
          <p>
            With our rotary encoder, you can control things like the music
            volume or just map it yourself in the QMK keymap to whatever you
            like! We also offer a version with a more premium black aluminium
            knob on the rotary encoder which is a bit bigger and feels more
            sturdy.
          </p>
        </div>
      </div>
    </section>
    <section className="wrapper spotlight style2 alt">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/rgb.jpg"
          alt="rgb"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">RGB Underglow</h2>
          <p>
            We of course had to offer a version with RGB Lights. You will have a
            nice RGB ring around the bottom of the keyboard because we have a
            transparent piece of plastic as our bottom piece.
          </p>
        </div>
      </div>
    </section>
    <section className="wrapper spotlight style1">
      <div className="inner">
        <StaticImage
          className="image"
          src="../../assets/images/1337/index/bl.jpg"
          alt="bl"
          placeholder="blurred"
        />
        <div className="content">
          <h2 className="major">Keycap Lights</h2>
          <p>
            You can also light up your keycaps from the back. These lights are
            just white though but they are dimmable through the rotary encoder
            and you can give them a breathing effect!
          </p>
        </div>
      </div>
    </section>
    <section id="four" className="wrapper style1 alt">
      <div className="inner">
        <h2 className="major">More :)</h2>
        <ul className="actions">
          <li>
            <a
              href="https://www.tindie.com/products/0xcb/0xcb-1337-a-customizable-macro-keyboard-with-qmk"
              rel="noreferrer"
              target="_blank"
              className="button primary fit"
            >
              Buy it on Tindie
            </a>
          </li>
          <li>
            <a
              href="https://github.com/0xcb-dev/0xcb-1337"
              rel="noreferrer"
              target="_blank"
              className="button primary fit"
            >
              Star it on Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
