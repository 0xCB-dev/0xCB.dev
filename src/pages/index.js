import React from 'react';
import Layout from 'components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'assets/images/index/header.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true,
};

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

    <section id="one" className="wrapper spotlight style1 alt">
      <div className="inner">
        <a href="/static">
          <StaticImage
            className="image fit"
            src="../assets/images/index/static-cover.jpg"
            alt="static"
            placeholder="blurred"
          />
        </a>
        <div className="content">
          <h2 className="major">Static</h2>
          <p>
            After we saw how well recieved our 1337 macropads were, we quickly
            realized that we wanted to try something even bigger and better. We
            put our heads together and made a list of every feature we would
            want in our own dream 40% keeb, and after many hours in the lab
            we're extra proud of what we've come up with. We're very excited to
            introduce you to our newest addition to the OxCB family, the Static!
          </p>
        </div>
      </div>
    </section>
    <section id="wrapper">
      <section id="two" className="wrapper spotlight style2">
        <div className="inner">
          <a href="/1337">
            <StaticImage
              className="image fit"
              src="../assets/images/index/1337.jpg"
              alt="1337"
              placeholder="blurred"
            />
          </a>
          <div className="content">
            <h2 className="major">1337</h2>
            <p>
              In 2020, the 0xCB 1337 was our first foray into the custom
              mechanical keyboard scene. Now in 2022 we are doing an all
              improved version! The 1337 is a feature rich macropad, fully
              programmable with QMK and VIAL both of which are considered the
              gold standard for keyboard firmware! It features a rotary encoder,
              RGB underglow and per-key RGB lighting, not to mention a very
              snazzy OLED that displays information like your current layer/num
              & caps indicator/etc.!
            </p>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper spotlight style3 alt">
        <div className="inner">
          <a href="/pluto">
            <StaticImage
              className="image fit"
              src="../assets/images/index/pluto.jpg"
              alt="pluto"
              placeholder="blurred"
            />
          </a>
          <div className="content">
            <h2 className="major">Pluto</h2>
            <p>
              With the Pluto we wanted to create a small PCB that can be used by
              a lot of keyboards! We all know the keyboards that use a ProMicro
              or Elite-C as a controller drop in. The 0xCB Pluto is our take on
              that idea. It is fully compatible with the Elite-C but has even
              more pins exposed!
            </p>
          </div>
        </div>
      </section>
      <section id="three" className="wrapper spotlight style4">
        <div className="inner">
          <a href="/instructions">
            <StaticImage
              className="image fit"
              src="../assets/images/index/instructions.jpg"
              alt="pcb"
              placeholder="blurred"
            />
          </a>
          <div className="content">
            <h2 className="major">Instructions</h2>
            <p>
              This is where you'll find our detailed build guides for both the
              1337 macropad and Static 40% keyboard. Please click through for
              more!
            </p>
          </div>
        </div>
      </section>
      <section id="three" className="wrapper spotlight style3 alt">
        <div className="inner">
          <a href="/pcbwork">
            <StaticImage
              className="image fit"
              src="../assets/images/index/pcb.png"
              alt="pcb"
              placeholder="blurred"
            />
          </a>
          <div className="content">
            <h2 className="major">PCB Work</h2>
            <p>
              Recently we started accepting commissions for PCBs. Feel free to
              click through our portfolio!
            </p>
          </div>
        </div>
      </section>
      <section id="four" className="wrapper style2">
        <div className="inner">
          <h2 className="major">About Us</h2>
          <p>
            We are Conor and Jakob from Aachen, Germany and we like to design
            and manufacture products in the electronics sector. We both are 20
            years young and made our first experience in the designing,
            sourcing, and manufacturing of our 1337 Macro Keyboard. Currently we
            are working on manufacturing the second round of our first Keyboard!
            The 0xCB Static! If you have any ideas for us don´t hesitate to
            contact us!
          </p>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
