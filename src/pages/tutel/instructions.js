import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import Zoom from 'react-medium-image-zoom';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>TutelPad instructions</h2>
        </div>
      </header>
      <section id="toc" className="wrapper style1 alt">
        <div className="inner">
          <div className="row">
            <div className="col-6 col-12-medium">
              <h3>Table of Content:</h3>
              <ol>
                <li>
                  <Link to="#parts">Packing List</Link>
                </li>
                <li>
                  <Link to="#info">Important Information</Link>
                </li>
                <li>
                  <Link to="#ass">Assembly</Link>
                </li>
              </ol>
            </div>
            <div className="col-6 col-12-medium">
              <p>
                Here you can find the instructions for assembling the 0xCB TutelPad.
                <br />
                <br />
                The PCB comes presoldered with the SMD LEDs. You just need to solder on the bigger through hole components. This makes it really beginner friendly.
                <br />
                <br />
                However, if you experience any issues during assembly, don't
                hesitate to shoot us an e-mail or come over to our Discord
                server!
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
              These parts should all be included in your TutelPad kit! You are able
              to click on the images to get a closer view of them.
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
                          src="../../assets/images/tutel/instructions/bottom.jpg"
                          alt="bottom"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>
                      bottom pate
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/pcb.jpg"
                          alt="pcb"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>
                      PCB
                      <br />
                      <br />
                      SMD LEDs presoldered
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/top.jpg"
                          alt="top"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>switch plate</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/oled.jpg"
                          alt="oled"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>OLED screen</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/feet.jpg"
                          alt="feet"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>
                      rubber feet
                    </td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/standoffs.jpg"
                          alt="standoffs"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>14mm standoffs</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/screws.jpg"
                          alt="screws"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>M2 brass screws</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/tutel/instructions/button.jpg"
                          alt="button"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>reset button</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="tools" className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Required Supplies</h2>
            <p>You will need these supplies to build your TutelPad!</p>
            <div className="table-wrapper">
              <table className="alt">
                <thead>
                  <tr>
                    <th>Pic</th>
                    <th>Part</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/tutel/instructions/pluto.jpg"
                        alt="pluto"
                        placeholder="blurred"
                      />
                    </td>
                    <td>ProMicro compatible micro controller</td>
                    <td>
                      {' '}
                      You will need to supply your own micro controller. You can use a ProMicro, Elite-C, Nice-Nano or a Pluto for this.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/static/instructions/si-flush-cutters.jpg"
                        alt="flush cutters"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Flush Cutters</td>
                    <td>
                      {' '}
                      You will need these to cut the wires needed for the OLED.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/tutel/instructions/screwdriver.jpg"
                        alt="flush cutters"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Flat Head Screwdriver</td>
                    <td>
                      {' '}
                      You will need a small screw driver for the M2 Screws.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/static/instructions/si-soldering-iron.jpg"
                        alt="soldering iron"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Soldering Iron</td>
                    <td>
                      {' '}
                      We recomment a good soldering iron! Don't expect a
                      challenge like the USB Port on the Static tho, the
                      soldering on the TutelPad is rather simple.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/static/instructions/si-solder.jpg"
                        alt="solder"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Solder</td>
                    <td>
                      Please use high quality solder (flux core or apply flux
                      externally) to make your life easier when soldering this
                      kit!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="wrapper style4">
        <div className="inner">
          <div className="content">
            <h2 className="major">Assembly</h2>
            <p>
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/pcb2.jpg"
                alt="pcb2"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Let's start the assembly with the PCB.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/sockets.jpg"
                alt="sockets"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Start by soldering in the header-pins for the micro controller. You can use IC-hotswap sockets or the solder variant that most likely came with your micro controller.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/text.jpg"
                alt="text"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              On the PCB you will see text, indicating on which side which component is supposed to go.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/pcbsockets.jpg"
                alt="pcbsockets"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Place the header pins inside the through holes on the PCB.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/socketpins.jpg"
                alt="socketpins"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Turn around the PCB. Pay close attention to the straightness of the headers.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/1pinsoldered.jpg"
                alt="1pinsoldered"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              First solder only one pin per header.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/sideview.jpg"
                alt="sideview"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Then check if they are straight and a controller can fit on them. If they are not straight, heat up the one pin and realign them.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/allpinssoldered.jpg"
                alt="sideview"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              You can go ahead and solder the rest if they are straight.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/reset.jpg"
                alt="reset"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Now solder in the reset button. Again, please pay attention on which side of the PCB you have to solder it on.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/switchmillmax.jpg"
                alt="switchmillmax"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Now is also a good time to solder in Mill-Max sockets if you want to.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/oled1soldered.jpg"
                alt="oled1soldered"
                placeholder="blurred"
              />
              <br />
              <br />
              Next solder in the OLED. This goes on the opposite side of the controller. The OLED should sit straight in the cutout in the switch plate afterwards, so solder only one pin at first.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/oledstraight.jpg"
                alt="oledstraight"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Align the OLED before soldering the rest. Heat up the one pin and make the OLED straight.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/oled4soldered.jpg"
                alt="oled4soldered"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Now you can solder in the other 3 pins.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/oledclipped.jpg"
                alt="oledclipped"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Clip off the pins of the OLED on the other side. Otherwise the controller will not fit.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/git.png"
                alt="git"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              You have to flash the controller. You can find the firmware <a href="https://github.com/0xCB-dev/0xCB-TutelPad/releases/tag/v1.0" target="_blank">here</a>.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/VIAL.png"
                alt="VIAL"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              It is good practice to confirm the PCB working after you flashed the controller. So plug it in the computer and see if you can get it to show up in VIAL.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/controller.jpg"
                alt="controller"
                placeholder="blurred"
              />
              <br />
              <br />
              If your controller is working, you can solder it in. When you have the PCB in front of you so that you can read the text on it, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/switchplate.jpg"
                alt="switchplate"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Insert the Switches into the switch plate. You can use the switch plate both ways around either with or without the TUTEL writing.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/plateandpcb.jpg"
                alt="plateandpcb"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              And put the PCB onto the switches.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/switchessoldered.jpg"
                alt="switchessoldered"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              When you are not using Mill-Max sockets you will have to solder in the switches now.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/standoffsscrew.jpg"
                alt="standoffsscrew"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Screw in the 4 standoffs into the switch plate.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/bottomscrew.jpg"
                alt="bottomscrew"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Then place the bottom plate on them and screw them in from the bottom. You can reverse the bottom plate so you can use it with or without the TUTEL writing on there.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/tutel/instructions/bottomfeet.jpg"
                alt="bottomfeet"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Now add the rubber feet.
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/tutel/instructions/keycaps.jpg"
                alt="keycaps"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              The only thing left to do is to add Keycaps to your MacroPad.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2 style={{ 'text-align': 'center' }}>
                And you are done with your TutelPad!
              </h2>
              <br />
              <StaticImage
                className="image fit"
                src="../../assets/images/tutel/finished.jpg"
                alt="finished"
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
