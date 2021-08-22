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
                        <Link to="#throughhole">Through Hole Components</Link>
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
                  You can use the Table of Content for easy navigation. Just
                  click on the different sections and it will take you there!
                  <br />
                  <br />
                  Also please read the whole assembly instruction once before
                  building and once during the build to make sure you do
                  everything right!
                  <br />
                  <br />
                  If you have any problems during assembly don't hesitate to
                  shoot us an e-mail or just ask over at our discord.
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
                        <th>Reference</th>
                        <th>Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img className="image table" src={picpcb} alt="" />
                        </td>
                        <td>PCB</td>
                        <td></td>
                        <td>1</td>
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
                        <td></td>
                        <td>1</td>
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
                        <td></td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="image table"
                            src={picplaceholder}
                            alt=""
                          />
                        </td>
                        <td>Plexi Cover</td>
                        <td></td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picfeet} alt="" />
                        </td>
                        <td>3D-Printed Feet</td>
                        <td></td>
                        <td>
                          1 Left <br /> 1 Right
                        </td>
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
                        <td></td>
                        <td>6</td>
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
                        <td></td>
                        <td>4</td>
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
                        <td></td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picscrews} alt="" />
                        </td>
                        <td>Screws (M2x5mm)</td>
                        <td></td>
                        <td>16</td>
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
                        <td>OL1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picec11} alt="" />
                        </td>
                        <td>EC11 Rotary Encoder</td>
                        <td>MX12</td>
                        <td>1</td>
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
                        <td></td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picusb} alt="" />
                        </td>
                        <td>USB-C Port</td>
                        <td>J1</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picbutton} alt="" />
                        </td>
                        <td>RESET and BOOT Buttons</td>
                        <td>SW1, SW2</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>
                          <img className="image table" src={picatmega} alt="" />
                        </td>
                        <td>ATMEGA328p Processor</td>
                        <td>U1</td>
                        <td>1</td>
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
                        <td>Y1</td>
                        <td>1</td>
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
                        <td>F1</td>
                        <td>1</td>
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
                        <td>D1...48</td>
                        <td>48</td>
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
                        <td>D49, D50</td>
                        <td>2</td>
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
                        <td>R3, R4</td>
                        <td>2</td>
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
                        <td>R6</td>
                        <td>1</td>
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
                        <td>R1, R2</td>
                        <td>2</td>
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
                        <td>R5</td>
                        <td>1</td>
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
                        <td>C3, C4</td>
                        <td>2</td>
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
                        <td>C1, C2</td>
                        <td>2</td>
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
                        <td></td>
                        <td>1</td>
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
                        <td></td>
                        <td>1</td>
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
                  <br />
                  <br />
                  Here we will go a little into how to solder the PCB. For all
                  the components you will find the names, references and
                  pictures of the component in the{' '}
                  <Link to="#parts">packing list</Link>. You then can head over
                  to the <Link to="#pnp">component placement</Link> section and
                  look at the interactive BOM. We will explain how you work with
                  that there.
                  <br />
                  <br />
                  <br />
                  <br />
                  Please head over to these sections to read a bit about
                  soldering. We go over some basic soldering techniques but also
                  some Static specific stuff!
                  <br />
                  <br />
                  <br />You can find a little
                  explanation on soldering a USB-C port{' '}
                  <Link to="#tools">here</Link>. <br />
                  A little explanation for soldering through hole
                  components <Link to="#throughhole">here</Link>.<br/>
                  And an explanation of how to solder the OLED and EC11{' '}
                  <Link to="#tools">here</Link>.
                </p>
              </div>
            </div>
          </section>
          <section id="throughhole" className="wrapper">
            <div className="inner">
              <div className="content">
                <h2 className="major">Soldering through hole components</h2>
                <p>
                  <span className="image left">
                    <img src={picplaceholder} alt="" />
                  </span>
                  <br />
                  For most through hole components you have to bend the legs
                  first! When soldering the small diodes you can use our diode
                  bender, to get clean bends, but for the rest just look at the
                  distance the holes on the pcb are apart and bend the
                  components accordingly by hand.
                  <br /> This of course doesn't apply to the controller, BOOT
                  and RESET buttons, USB port, OLED and EC11 because those don't
                  have long legs... Those components can just be placed in the
                  right holes and soldered in place.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <span className="image right">
                    <img src={picplaceholder} alt="" />
                  </span>
                  Then you can just go ahead and place the component at the
                  right spot on the PCB.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <span className="image left">
                    <img src={picplaceholder} alt="" />
                  </span>
                  Bend the legs of the component on the other side to hold it in
                  place so you can solder it easily.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <span className="image right">
                    <img src={picplaceholder} alt="" />
                  </span>
                  Now add a bit of solder to each solder joint of the
                  component!
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <span className="image left">
                    <img src={picplaceholder} alt="" />
                  </span>
                  As a last step just clip off those legs and you are done!
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
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
                  you should place them in. This doesn't matter in the end but
                  it makes it easier for soldering. You can always find the name
                  and the reference of the component in the Packing List and see
                  photos of everything (especially useful for the resistors).
                  The reference consists of a letter and a number. Those "codes"
                  are also printed on the PCB so you can just use the references
                  to see, where something has to be placed. When you hover over
                  one element in the interactive BOM it will also show that to
                  you with a red outline on the right PCB. You then just go
                  ahead and place every component and solder it in place.
                  <br />
                  <br />
                  <br /> If you want to see the interactive BOM in full screen
                  just click here:
                  <br />
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
