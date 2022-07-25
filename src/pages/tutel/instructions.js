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
                          alt="case"
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
                          alt="encoder"
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
                          alt="millmax"
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
                          alt="ribbon"
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
                          alt="allenkey"
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
                          alt="allenkey"
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
                        src="../../assets/images/placeholder.jpg"
                        alt="flush cutters"
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
                src="../../assets/images/placeholder.jpg"
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
                src="../../assets/images/placeholder.jpg"
                alt="switchmillmax"
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
                src="../../assets/images/placeholder.jpg"
                alt="socketspcb"
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
                src="../../assets/images/placeholder.jpg"
                alt="kapton"
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
                src="../../assets/images/placeholder.jpg"
                alt="socketssolder"
                placeholder="blurred"
              />
              <br />
              <br />
              Turn around the PCB and solder the pins. Pay close attention to the straightness of the headers. First solder only one pin per header and then check if they are straight and a controller can fit on them.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="ribbon2"
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
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="ribbonsolder"
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
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="pcbincase1"
                placeholder="blurred"
              />
              <br />
              <br />
              Next solder in the OLED. This goes on the opposite side of the controller. The OLED should sit straight in the cutout in the switch plate afterwards, so solder only one pin, and align the OLED before soldering the rest.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="ribboncut"
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
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="oledribbon"
                placeholder="blurred"
              />
              <br />
              <br />
              Now you can solder in the controller. When you have the PCB in front of you so that you can read the text on it, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="rotary"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              You have to flash the controller. You can find the firmware here: ........ Instructions for flashing can be found here.
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="rotaryinpcb"
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
                src="../../assets/images/placeholder.jpg"
                alt="rotaryinpcbsolder"
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
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="switchcase"
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
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="pcbincase2"
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
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="oledincase"
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
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="bottom"
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
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="bottomscrew"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              The only thing left to do now is to add the rubber feet.
              <br />
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
