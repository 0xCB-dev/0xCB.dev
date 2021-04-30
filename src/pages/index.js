import React from 'react';

import Layout from '../components/Layout';

import icon from '../assets/images/header.svg';
import pic1337 from '../assets/images/1337.jpg';
import piccloseup from '../assets/images/pcb-closeup.jpg';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <img className="icons" src={icon} alt="" />
        </div>
        <h2>0xCB - TECH, KEYBOARDS AND MORE</h2>
        <p>
          0xCB makes custom-made Keyboards, that are fully customizable.
          Handmade and precisely engineered keyboards made with the help of
          3D-Printing and assembled in Germany.
        </p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/1337">
            <img className="image" src={pic1337} alt="" />
          </a>
          <div className="content">
            <h2 className="major">1337</h2>
            <p>
              0xCB 1337 is our custom-made Macropad. You can program it with QMK
              and VIA, software that is the golden standard for custom
              Keyboards. You have 4 Layers on the Keyboard that you can cycle
              through. It features a Rotary Encoder from which you can control
              your Sound. On our OLED Screen, you can see the Layers your on and
              the RGB Settings. Our Keyboard also features RGB lighting at the
              Bottom and a white backlight for your Keycaps.
            </p>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper spotlight alt style2">
        <div className="inner">
          <a href="/instructions">
            <img className="image" src={piccloseup} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Instructions</h2>
            <p>
              Here you can find the instructions for our 1337 Macro Keyboard
              that you can use if you bought one of our DIY Options.
            </p>
          </div>
        </div>
      </section>
      <section id="four" className="wrapper style3">
        <div className="inner">
          <h2 className="major">About Us</h2>
          <p>
            We are Conor and Jakob from Aachen, Germany and we like to design
            and manufacture products in the electronics sector. We both are 20
            years young and are currently making our first experience in the
            designing, sourcing, and manufacturing of our 1337 Macro Keyboard.
            In the future, we want to make more products that we already have
            ideas for. If you have any ideas for us don´t hesitate to contact
            us! We currently do not have our own online store as we use Tindie
            for our products.
          </p>
        </div>
      </section>
      <section id="four" className="wrapper style2 alt">
        <div className="inner">
          <h2 className="major">Customer Quotes</h2>
          <h3>&#11088;&#11088;&#11088;&#11088;&#11088; | Phillip </h3>
          <a
            href="https://www.tindie.com/products/0xcb/0xcb-1337-a-customizable-macro-keyboard-with-qmk/#product-reviews"
            rel="noreferrer"
            target="_blank"
          >
            <blockquote>
              Great product! Great creators!
              <br />
              I have been interested in getting a macropad for quite some time
              now, but passed on all the ones that I saw until I came across
              this one. I'm glad I didn't pass it by. The device itself feels
              very solid. The print job for the case is high quality. The
              aluminum encoder feels great and the click is very responsive. The
              diffuser on the bottom looks very nice and the default color
              shifting theme is a nice greeting when you plug the pad in. The
              screen is very crisp and I already love being able to see what
              layer I'm on at a glance. I can't wait to create a custom keymap,
              so that I can integrate it with my daily workflow!
              <br />
              <br />
              In addition to the device being great, shipping to the US was much
              quicker than I anticipated and the creators have been very
              responsive and a pleasure to chat with. They honestly care how
              their customers feel about their product and about the product
              itself. I would definitely purchase another of their products in
              the future!
            </blockquote>
            <p>April 26, 2021</p>
          </a>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
