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
          <h2>Static acrylic case assembly instructions</h2>
        </div>
      </header>
      <section id="toc" className="wrapper style1 alt">
        <div className="inner">
          <div className="row">
            <div className="col-6 col-12-medium">
              <p>
                Here you can find the instructions for assembling the 0xCB Static 
                acrylic case!
                <br />
                <br />
                Assembling the case is very easy and straight forward!
                <br />
                However, if you experience any issues during assembly, don't 
                hesitate to shoot us an e-mail or come over to our Discord server!
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
              These parts should all be included in your acrylic case Kit!
              You are able to click on the images to get a closer view of them.
            </p>
            <div className="table-wrapper">
              <table className="alt">
                <thead>
                  <tr>
                    <th>Image</th>
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
                    <td>Layer 1 (bottom layer)</td>
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
                    <td>Layer 7 (top window)</td>
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
                    <td>Big standoffs (M2x12mm)</td>
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
              While handling the acrylic pieces, there are a few things to consider.
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
              For the Static case, we use cast acrylic sheets rather than extruded sheets. This means
              the material is less brittle by nature, but as there are still small parts in the kit
              you should be careful not to bend the layers too much!
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
              All the layers come with protective film on both sides! You need to
              remove this film to ensure a nice fit (and cleaner look afterwards...) 
              This is probably the most satisfying part of the whole process!
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
              While tightening the screws during the assembly process, be sure to 
              not overtighten them. Just screw them together until you feel a bit 
              of resistance. If you overtighten them, the acrylic will break! It is 
              not as durable as for instance the FR4 together with the standoffs
              included in the base kit.
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
              Firstly, if you have already assembled your Static, you will have to take it 
              apart again! The case was designed with the board partially assembled in mind, 
              which means that you just need to take off the acrylic window and the feet. 
              The main part that you can leave assembled is the PCB with the switches and 
              switch plate. This part will just drop into the case when you're assembling it.
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
              Grab yourself the feet, standoffs, screws and the first case layer (the 
              bottom plate). The screws and standoffs are the ones you got in your 
              base kit so don't open the extra bag from the case kit yet.
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
              Now place the feet underneath the bottom plate. Pay attention to the
              orientation of the bottom plate. The outward corners should be closest 
              to you, and you should be able to read the logo from the bottom. You 
              will use the same standoff placement as with the normal kit; the four 
              8mm standoffs should be closest to you and the two 12mm should go near 
              the top of the board. If you swap them by accident, you won't be able 
              to completely assemble the case!
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
              Now add the second layer of the case. Please insert the piece as straight
              as possible and push it down equally on all sides, otherwise the friction
              from the plates will be too much and the plate will catch.
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
              Please get yourself the bag with the extra case kit components and grab the
              two 12mm standoffs. Place them in the two cutouts at the back (near the USB port) 
              and screw them down with two 5mm screws from the bottom.
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
              Add the third layer to the stack. Again: Please be careful while putting it on!
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
              Add the fourth acrylic layer. Don't panic: the 8mm standoffs are supposed to be 
              covered by this layer!
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
              Insert the assembled PCB package into the case. You cannot drop it in from
              the top though; you need to lift it a little at the back, slide it into the front
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
              screws are inserted these layers will be unaligned.
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
              Add layer 6 to the case. Make sure it's oriented correctly, with the encoder
              going through the cutout.
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
              Add layer 7. If you have the milky frosted case, you can choose between a
              frosted milky or a translucent cover.
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
              Now you should screw in all the 12mm screws at the top of the case. Align 
              all the top layerslayers while tightening the screws.
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
              Be sure to align the PCB assembly and tighten them fully.
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
              Screw on the washer for the encoder.
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
              Finally, put on the knob for the encoder and screw it in from the side.
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
            <h2 className="major">And now you are done with your Static acrylic case!</h2>
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
