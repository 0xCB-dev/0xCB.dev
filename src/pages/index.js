import React from 'react';
import Layout from 'components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'assets/images/index/header.svg';
import pic1337 from 'assets/images/index/1337.jpg';
import picstatic from 'assets/images/index/static-cover.jpg';
import piccloseup from 'assets/images/index/pcb-closeup.jpg';
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

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/1337">
            <img className="image" src={pic1337} alt="" />
          </a>
          <div className="content">
            <h2 className="major">1337</h2>
            <p>
              In 2020, the 0xCB 1337 was our first foray into the custom
              mechanical keyboard scene. It is a feature rich macropad, fully
              programmable with QMK and VIA both of which are considered the
              gold standard for keyboard firmware! In addition to 4 seperate
              function layers, it features a rotary encoder for volume control,
              RGB underglow and white per-key lighting, not to mention a very
              snazzy OLED that displays information like your current layer/RGB
              settings/etc.!
            </p>
          </div>
        </div>
      </section>
      <section id="two" className="wrapper spotlight alt style2">
        <div className="inner">
          <a href="/static">
            <img className="image" src={picstatic} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Static</h2>
            <p>
              After we saw how well recieved our 1337 macropads were, we quickly
              realized that we wanted to try something even bigger and better.
              We put our heads together and made a list of every feature we
              would want in our own dream 40% keeb, and after many hours in the
              lab we're extra proud of what we've come up with. We're very
              excited to introduce you to our newest addition to the OxCB
              family, the Static!
            </p>
          </div>
        </div>
      </section>
      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/instructions">
            <img className="image" src={piccloseup} alt="" />
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
      <section id="four" className="wrapper alt style4">
        <div className="inner">
          <h2 className="major">About Us</h2>
          <p>
            We are Conor and Jakob from Aachen, Germany and we like to design
            and manufacture products in the electronics sector. We both are 20
            years young and made our first experience in the designing,
            sourcing, and manufacturing of our 1337 Macro Keyboard. Currently we
            are working on designing and manufacturing our first Keyboard! The
            0xCB Static! If you have any ideas for us don´t hesitate to contact
            us! We currently do not have our own online store as we use Tindie
            for our products.
          </p>
        </div>
      </section>
      <section id="four" className="wrapper style2">
        <div className="inner">
          <h2 className="major">Customer Quotes</h2>
          <Slider {...settings}>
            <div className="content">
              <h3>
                <span
                  role="img"
                  aria-label="5 Stars"
                  style={{ color: '#FDCC0D' }}
                >
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                </span>{' '}
                | Phillip
              </h3>
              <a
                href="https://www.tindie.com/products/0xcb/0xcb-1337-a-customizable-macro-keyboard-with-qmk/#product-reviews"
                rel="noreferrer"
                target="_blank"
              >
                <blockquote>
                  <b>Great product! Great creators!</b>
                  <br />
                  I have been interested in getting a macropad for quite some
                  time now, but passed on all the ones that I saw until I came
                  across this one. I'm glad I didn't pass it by. The device
                  itself feels very solid. The print job for the case is high
                  quality. The aluminum encoder feels great and the click is
                  very responsive. The diffuser on the bottom looks very nice
                  and the default color shifting theme is a nice greeting when
                  you plug the pad in. The screen is very crisp and I already
                  love being able to see what layer I'm on at a glance. I can't
                  wait to create a custom keymap, so that I can integrate it
                  with my daily workflow!
                  <br />
                  <br />
                  In addition to the device being great, shipping to the US was
                  much quicker than I anticipated and the creators have been
                  very responsive and a pleasure to chat with. They honestly
                  care how their customers feel about their product and about
                  the product itself. I would definitely purchase another of
                  their products in the future!
                </blockquote>
                <p>April 26, 2021</p>
              </a>
            </div>
            <div className="content">
              <h3>
                <span
                  role="img"
                  aria-label="4.5 Stars"
                  style={{ color: '#FDCC0D' }}
                >
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star" size="1x" />
                  <FontAwesomeIcon icon="star-half" size="1x" />
                </span>{' '}
                | Todd
              </h3>
              <a
                href="https://www.tindie.com/products/0xcb/0xcb-1337-a-customizable-macro-keyboard-with-qmk/#product-reviews"
                rel="noreferrer"
                target="_blank"
              >
                <blockquote>
                  <b>Well Architected, Solid Piece of Technology</b>
                  <br />
                  Out of the box, this unit impressed us very much. Understated
                  on our busy manufacturing operations console, the macropad
                  screen provides the right amount of context to the tasks at
                  hand, and the case is well built and capable of the stresses
                  of a lot of use and 24 x7 shift operations. While it is our
                  belief that QMK was put on this Earth as a torture device,
                  fortunately this unit supports QMK's nicer little sister, VIA,
                  and makes programming and reconfiguration a snap. We are in
                  the market to replace a large number of macropad type devices
                  in our global manufacturing environment and were on the verge
                  of building our own, this unit is making us rethink that
                  strategy. Kudos to the two innovators who are behind this
                  project.
                  <br />
                  <br />
                  Of note, we don't hold the innovators at fault for the speed
                  of the slowest level of global shipping; we would encourage
                  them to offer faster options at the buyer's expense; from
                  Germany to the US, it was a little more than three weeks.
                </blockquote>
                <p>May 2, 2021</p>
              </a>
            </div>
          </Slider>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
