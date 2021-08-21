import React from 'react';
import { Link } from 'gatsby';
import ScrollUp from 'react-scroll-up';

import Layout from 'components/Layout';

import pic1_5kohm from 'assets/images/static/instructions/si-1,5kOhm.jpg';
import pic5_1kohm from 'assets/images/static/instructions/si-5,1kOhm.jpg';
import pic10kohm from 'assets/images/static/instructions/si-10kOhm.jpg';
import pic75ohm from 'assets/images/static/instructions/si-75Ohm.jpg';
import picatmegatopdown from 'assets/images/static/instructions/si-atmega-topdown.jpg';
import picatmega from 'assets/images/static/instructions/si-atmega.jpg';
import picbigcap from 'assets/images/static/instructions/si-big-cap.jpg';
import picbigdiode from 'assets/images/static/instructions/si-big-diode.jpg';
import picbigstandoffs from 'assets/images/static/instructions/si-big-standoffs.jpg';
import picbottomplate from 'assets/images/static/instructions/si-bottom-plate.jpg';
import picbutton from 'assets/images/static/instructions/si-button.jpg';
import picclock from 'assets/images/static/instructions/si-clock.jpg';
import picec11 from 'assets/images/static/instructions/si-ec11.jpg';
import picfeet from 'assets/images/static/instructions/si-feet.jpg';
import picfusebend from 'assets/images/static/instructions/si-fuse-bend.jpg';
import picfuse from 'assets/images/static/instructions/si-fuse.jpg';
import picoledrotary from 'assets/images/static/instructions/si-oled-and-rotary.jpg';
import picoled from 'assets/images/static/instructions/si-oled.jpg';
import picpcbatmega from 'assets/images/static/instructions/si-pcb-atmega.jpg';
import picpcbdiodeplacement from 'assets/images/static/instructions/si-pcb-diode-placement.jpg';
import picpcb from 'assets/images/static/instructions/si-pcb.jpg';
import picrotaryknob from 'assets/images/static/instructions/si-rotary knob.jpg';
import picrubberfeet from 'assets/images/static/instructions/si-rubber-feet.jpg';
import picscrews from 'assets/images/static/instructions/si-screws.jpg';
import picsmolstandoffs from 'assets/images/static/instructions/si-small-standoffs.jpg';
import picsmolcap from 'assets/images/static/instructions/si-smol-cap.jpg';
import picsmoldiode from 'assets/images/static/instructions/si-smol-diode.jpg';
import picswitchplate from 'assets/images/static/instructions/si-switch-plate.jpg';
import pictopdownic from 'assets/images/static/instructions/si-topdown-ic.jpg';
import picusb from 'assets/images/static/instructions/si-usb.jpg';
import picallankey from 'assets/images/static/instructions/si-allan-key.jpg';
import picsolder from 'assets/images/static/instructions/si-solder.jpg';
import picsolderingiron from 'assets/images/static/instructions/si-soldering-iron.jpg';
import picbenderender from 'assets/images/static/instructions/si-diode-bender.jpg';
import picflushcutters from 'assets/images/static/instructions/si-flush-cutters.jpg';
import picplaceholder from 'assets/images/placeholder.jpg';
import picscroller from 'assets/images/up.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Static assembly instructions (WIP!!!)</h2>
        </div>
      </header>
      <div className="wrapper">
        <div className="inner">
          <section>
            <div className="row">
              <div className="col-6 col-12-medium">
                <h3>Table of Content:</h3>
                <ol>
                  <li>
                    <Link to="#parts">Packing List</Link>
                  </li>
                  <li>
                    <Link to="#tools">Required Supplies</Link>
                  </li>
                  <li>
                    <Link to="#solder">Soldering</Link>
                    <ul>
                      <li>
                        <Link to="#pnp">Component Placement</Link>
                      </li>
                      <li>
                        <Link to="#parts">Through Hole Components</Link>
                      </li>
                      <li>
                        <Link to="#tools">USB-C Port</Link>
                      </li>
                      <li>
                        <Link to="#solder">OLED and EC11</Link>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <div className="col-6 col-12-medium">
                <p>
                  Here you can find the instructions for the 0xCB Static!
                  <br />
                  <br />
                  You can use the Table of Content on the right for easy
                  navigation.
                  <br />
                  <br />
                  Also please read the whole assembly instruction onces before
                  building and onces during the build to make sure you do
                  everything right!
                  <br />
                  <br />
                  If you have any problems during assembly don't hesitate to
                  shoot us a e-mail or just ask over at our discord.
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
          </section>
          <section id="parts" className="wrapper">
            <div className="inner">
              <div className="content">
                <h2 className="major">Packing List</h2>
                <p>These parts should all be included in you Static Kit!</p>
                <div className="table-wrapper">
                  <table className="alt">
                    <thead>
                      <tr>
                        <th>Pic</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Reference</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img className="image table" src={picpcb} alt="" />
                        </td>
                        <td>PCB</td>
                        <td>1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picswitchplate}
                            alt=""
                          />
                        </td>
                        <td>Switch Plate</td>
                        <td>1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picbottomplate}
                            alt=""
                          />
                        </td>
                        <td>Bottom PLate</td>
                        <td>1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picplaceholder}
                            alt=""
                          />
                        </td>
                        <td>
                          Plexi Cover
                          <br />
                          PLACEHOLDER PIC
                        </td>
                        <td>1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picfeet} alt="" />
                        </td>
                        <td>3D-Printed Feet</td>
                        <td>
                          1 Left <br /> 1 Right
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picrubberfeet}
                            alt=""
                          />
                        </td>
                        <td>Rubber Feet</td>
                        <td>6</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picsmolstandoffs}
                            alt=""
                          />
                        </td>
                        <td>Small Standoffs (M2x8mm)</td>
                        <td>4</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picbigstandoffs}
                            alt=""
                          />
                        </td>
                        <td>Big Standoffs (M2x14mm)</td>
                        <td>4</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picscrews} alt="" />
                        </td>
                        <td>Screws (M2x5mm)</td>
                        <td>16</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picoled} alt="" />
                        </td>
                        <td>
                          OLED Screen
                          <br />
                          <br />
                          The OLED Screen is sealed in an antistatic bag upon
                          arrival. This ensures, that they are fully functioning
                          when you get them!{' '}
                        </td>
                        <td>1</td>
                        <td>OL1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picec11} alt="" />
                        </td>
                        <td>EC11 Rotary Encoder</td>
                        <td>1</td>
                        <td>MX12</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picrotaryknob}
                            alt=""
                          />
                        </td>
                        <td>Aluminium Rotary Encoder Knob</td>
                        <td>1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picusb} alt="" />
                        </td>
                        <td>USB-C Port</td>
                        <td>1</td>
                        <td>J1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picbutton} alt="" />
                        </td>
                        <td>RESET and BOOT Buttons</td>
                        <td>2</td>
                        <td>SW1, SW2</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picatmega} alt="" />
                        </td>
                        <td>ATMEGA328p Processor</td>
                        <td>1</td>
                        <td>U1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picclock} alt="" />
                        </td>
                        <td>
                          Clock
                          <br />
                          <br />
                          16MHz
                        </td>
                        <td>1</td>
                        <td>Y1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picfuse} alt="" />
                        </td>
                        <td>
                          Fuse
                          <br />
                          <br />
                          500mA
                        </td>
                        <td>1</td>
                        <td>F1</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picsmoldiode}
                            alt=""
                          />
                        </td>
                        <td>
                          Small Diodes
                          <br />
                          <br />
                          1N4148
                          <br />
                          <br />
                          We will include a few extras of those to ensure you
                          have enough!
                        </td>
                        <td>48</td>
                        <td>D1...48</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picbigdiode}
                            alt=""
                          />
                        </td>
                        <td>
                          Large Diodes
                          <br />
                          <br />
                          1N4729
                        </td>
                        <td>2</td>
                        <td>D49, D50</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={pic75ohm} alt="" />
                        </td>
                        <td>
                          Resistor
                          <br />
                          <br />
                          75Ohm
                        </td>
                        <td>2</td>
                        <td>R3, R4</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={pic1_5kohm}
                            alt=""
                          />
                        </td>
                        <td>
                          Resistor
                          <br />
                          <br />
                          1.5kOhm
                        </td>
                        <td>1</td>
                        <td>R6</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={pic5_1kohm}
                            alt=""
                          />
                        </td>
                        <td>
                          Resistor
                          <br />
                          <br />
                          5.1kOhm
                        </td>
                        <td>2</td>
                        <td>R1, R2</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={pic10kohm} alt="" />
                        </td>
                        <td>
                          Resistor
                          <br />
                          <br />
                          10kOhm
                        </td>
                        <td>1</td>
                        <td>R5</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picsmolcap}
                            alt=""
                          />
                        </td>
                        <td>
                          Capacitor
                          <br />
                          <br />
                          20pF
                        </td>
                        <td>2</td>
                        <td>C3, C4</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picbigcap} alt="" />
                        </td>
                        <td>
                          Capacitor
                          <br />
                          <br />
                          0.1uF
                        </td>
                        <td>2</td>
                        <td>C1, C2</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picbenderender}
                            alt=""
                          />
                        </td>
                        <td>
                          Diode Bender
                          <br />
                          <br />
                          Use this Diode bender to perfectly bend the diodes to
                          fit in our PCB. You will get the nicest looking bends
                          this way!
                        </td>
                        <td>1</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picallankey}
                            alt=""
                          />
                        </td>
                        <td>
                          Allan Key
                          <br />
                          <br />
                          This allan key fits the M2 Hex Screws that are needed
                          for assembly!
                        </td>
                        <td>1</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section id="tools" className="wrapper">
            <div className="inner">
              <div className="content">
                <h2 className="major">Required Supplies</h2>
                <p>You will need these supplies to build your own Static!</p>
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
                          <img
                            className="image table"
                            src={picflushcutters}
                            alt=""
                          />
                        </td>
                        <td>
                          Flush Cutters
                          <br />
                          <br />
                          You will need these to clip off the legs of the
                          through hole components.
                        </td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picsolderingiron}
                            alt=""
                          />
                        </td>
                        <td>
                          Soldering Iron
                          <br />
                          <br />
                          We recomment a good soldering iron especially for
                          soldering the USB port!
                        </td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picsolder} alt="" />
                        </td>
                        <td>
                          Solder
                          <br />
                          <br />
                          Please use high quality solder (flux core or apply
                          flux externally) to make your life easier when
                          soldering this kit!
                        </td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section id="solder" className="wrapper">
            <div className="inner">
              <div className="content">
                <h2 className="major">Soldering</h2>
                <p>
                  <span className="image left">
                    <img src={pictopdownic} alt="" />
                  </span>
                  Here we will go a little into how to solder the PCB. For all
                  the components you will find the names, references and
                  pictures of the component in the table of contents. You then
                  can head over to the{' '}
                  <Link to="#pnp">component placement</Link> section and look at
                  the interactive BOM. We will explain how you work with that
                  there.
                  <br />
                  <br />
                  For all of you that haven't soldered before:
                  <br />
                  You can find a little explanation to soldering though hole
                  components <Link to="#tools">here</Link>. <br />A little
                  explanation on soldering a USB-C port{' '}
                  <Link to="#tools">here</Link>. <br />
                  And a explanation how to solder the OLED and EC11{' '}
                  <Link to="#tools">here</Link>.
                </p>
              </div>
            </div>
          </section>
          <section id="pnp" className="wrapper">
            <div className="inner">
              <div className="content">
                <h2 className="major">Component placement</h2>
                <p>
                  Here you have an interactive map to place components. This
                  shows you which component has to be placed where. You go from
                  top to bottom to get a good point of reference for the order
                  you should place them in. This doesn't matter in the end in
                  which order you place the components, but it makes it easier
                  for soldering. You can always find the name and the
                  referenceof the component in the Packing List and see photos
                  of everything (especially usefull for the resistors). You can
                  also find those names in the Value Row. When you hover over
                  one element it will show that to you with a red outline on the
                  right PCB. You can also use the References (C3 for example)
                  and find that name printed on the PCB also. You then just go
                  ahead and place every component and solder it in place.
                  <br />
                  <br /> If you want to see the interactive BOM in full screen
                  just click here:
                  <br />
                  <a
                    href="https://files.0xcb.dev/0xCB/static/humanpnp.html"
                    rel="external noreferrer"
                    target="_blank"
                    className="button primary fit"
                  >
                    Open in new Tab
                  </a>
                </p>
                <iframe
                  src="https://files.0xcb.dev/0xCB/static/humanpnp.html"
                  title="humanpnp"
                  style={{ width: '100%', height: '400px' }}
                ></iframe>
              </div>
            </div>
          </section>
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
  </Layout>
);

export default IndexPage;
