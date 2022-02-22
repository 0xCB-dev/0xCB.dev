import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import ScrollUp from 'react-scroll-up';
import Layout from 'components/Layout';
import Zoom from 'react-medium-image-zoom';
import styles from '../../../utils/imagezoom.module.scss';
import 'react-medium-image-zoom/dist/styles.css';
import picscroller from 'assets/images/up.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Static Acrylic Case assembly instructions</h2>
        </div>
      </header>
      <section id="toc" className="wrapper style1 alt">
        <div className="inner">
          <div className="row">
            <div className="col-6 col-12-medium">
              <p>
                Here you can find the instructions for the 0xCB Static Acrylic
                Case!
                <br />
                <br />
                The process of assembling the case is quite straight forward, so
                this should be a quick one.
                <br />
                <br />
                If you have any problems during assembly don't hesistate to
                shoot us an e-mail or ask over at our discord.
              </p>
              <div className="row">
                <div className="col">
                  <ul className="actions">
                    <li>
                      <a
                        href="mailto:mail@0xcb.dev"
                        rel="noreferrer"
                        target="_blank"
                        className="button primary fit"
                      >
                        Mail@0xcb.dev
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/WpmFC2NRWV"
                        rel="noreferrer"
                        target="_blank"
                        className="button primary fit"
                      >
                        Join us on Discord ;)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="parts" className="wrapper style2">
        <div className="inner">
          <div className="content">
            <h2 className="major">Packing List</h2>
            <p>
              These parts should all be included in you Static Acrylic Case Kit!
              You are able to click on the images to get a closer view of them.
            </p>
            <div className="table-wrapper">
              <table className="alt">
                <thead>
                  <tr>
                    <th>Pic</th>
                    <th>Description</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/1.jpg"
                          alt="1"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Layer 1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/2.jpg"
                          alt="2"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Layer 2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/3.jpg"
                          alt="3"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Layer 3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/4.jpg"
                          alt="4"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Layer 4</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/5.jpg"
                          alt="5"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>
                      Layer 5
                      <br />
                      <br />
                      This layer consists of two small pieces.
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/6.jpg"
                          alt="6"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Layer 6</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../../assets/images/static/instructions-case/7.jpg"
                          alt="7"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Layer 7</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../../assets/images/static/instructions-case/standoff.jpg"
                        alt="standoff"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Big Standoffs (M2x12mm)</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../../assets/images/static/instructions-case/12mm.jpg"
                        alt="12mm"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Screws (M2x12mm)</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../../assets/images/static/instructions-case/8mm.jpg"
                        alt="8mm"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Screws (M2x8mm)</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Important Info</h2>
            <p>
              While Handling Acrylic Sheets, there are a few things to consider.
              Please read through this section carefully!
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/done.jpg"
                alt="done"
                placeholder="blurred"
              />
              <br />
              <br />
              We use Cast Acrylic rather than Extruded in our kits. This means
              the material is less brittle and will be more stable, but there
              are some small parts in our kit so you should be really careful
              while handling all the single layers!
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/plexi-film.jpg"
                alt="plexi-film"
                placeholder="blurred"
              />
              <br />
              <br />
              All Layers come with a protective film on both sides! You need to
              remove that to ensure a nice fit and look afterwards... This is
              probably the most satisfying part of the whole process. ;)
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/cover-screws.jpg"
                alt="cover-screws"
                placeholder="blurred"
              />
              <br />
              <br />
              While tightening the screws please don't overtighten them. Just
              screw them together until you feel a bit of resistance. If you
              overtighten them the acrylic will break! It is not as durable as
              the FR4 together with the standoffs in the base kit.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section id="ass" className="wrapper style4">
        <div className="inner">
          <div className="content">
            <h2 className="major">Assembly</h2>
            <p>
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/pcb-assembly.jpg"
                alt="pcb-assembly"
                placeholder="blurred"
              />
              <br />
              <br />
              First you have to disassemble your Static. Here you can see what
              part you need for the assembly of the case. You only need the PCB
              together with the switches and the plate. It can be soldered since
              this assembly only drops in the case afterwards.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/feet.jpg"
                alt="feet"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Grab yourself the feet, standoffs and screws and the bottom plate.
              The screws and standoffs are the ones you got in your base kit so
              don't open the extra bag from the case kit yet.
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/bottom-feet.jpg"
                alt="bottom-feet"
                placeholder="blurred"
              />
              <br />
              Now place the feet in the bottom plate. Pay attention to the
              orientation of the bottom plate. The round corners go up front and
              you should be able to read the logo from the bottom. You will use
              the same standoff placement as with the normal kit. That is the
              two 8mm standoffs at the front and the two 12mm at the back. The
              orientation matters here tho because of the cutout in the bottom
              plate.
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/layer2.jpg"
                alt="layer2"
                placeholder="blurred"
              />
              <br />
              <br />
              Now add layer two of the case. Please insert the piece as straight
              as possible and push it down equally on all sides. Otherwise you
              will not get it on there and it will jam. If you don't get it on
              there maybe your standoffs are not aligned good.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/usb-standoffs.jpg"
                alt="usb-standoffs"
                placeholder="blurred"
              />
              <br />
              <br />
              Please get yourself the bag with extra components from the case
              kit and grab the two 12mm standoffs. Place them in the two cutouts
              at the back and screw them down with two 5mm screws from the
              bottom.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/layer3.jpg"
                alt="layer3"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Add layer 3 to the stack. Again: Please be careful while putting
              it on!
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/layer4.jpg"
                alt="layer4"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              After that add layer 4.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/pcb-insert.jpg"
                alt="pcb-insert"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Insert the PCB assembly into the case. You cannot drop it in from
              the top you need to lift it at the back, slide it into the front
              and then drop it down.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/layer5.jpg"
                alt="layer5"
                placeholder="blurred"
              />
              <br />
              <br />
              Add layer 5. This layer consists of the two small pieces. These
              are only held in by the two cutouts around the USB port. Until the
              screws are inserted these layers will be unanligned.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/layer6.jpg"
                alt="layer6"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Add layer 6 to the case.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/layer7.jpg"
                alt="layer7"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Add layer 7. If you have the Milky Case you can choose between a
              milky or a translucent cover.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/cover-screws.jpg"
                alt="cover-screws"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Now screw in all the 12mm screws at the top into the acrylic
              cover. Align all the layers while tightening the screws.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/plate-screws.jpg"
                alt="plate-screws"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Get the 8mm screws and put them into the switch plate of the keeb.
              Align the PCB assembly and tighten them fully.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/static/instructions-case/washer.jpg"
                alt="washer"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Screw on the washer for the Encoder now.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/static/instructions-case/knob.jpg"
                alt="knob"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Lastly put on the Encoder Knob and screw it in from the side.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section id="ass" className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">And you are done with your Static Case!</h2>
            <p>
              <StaticImage
                className="image"
                src="../../../assets/images/static/instructions-case/done.jpg"
                alt="done"
                placeholder="blurred"
              />
            </p>
          </div>
        </div>
      </section>
      <div className="inner">
        <div className="content">
          <ScrollUp showUnder={50}>
            <img src={picscroller} alt="" />
          </ScrollUp>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
