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
      <section id="toc" className="wrapper style4 alt">
        <div className="inner">
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
                      <Link to="#pnp">Interactive BOM / human PnP</Link>
                    </li>
                    <li>
                      <Link to="#tht">Through Hole Components</Link>
                    </li>
                    <li>
                      <Link to="#usb">USB-C Port</Link>
                    </li>
                    <li>
                      <Link to="#oled">OLED</Link>
                    </li>
                    <li>
                      <Link to="#enc">EC11</Link>
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
                You can use the Table of Content for easy navigation. Just click
                on the different sections and it will take you there!
                <br />
                <br />
                Also please read the whole assembly instruction onces before
                building and onces during the build to make sure you do
                everything right!
                <br />
                <br />
                If you have any problems during assembly don't hesitate to shoot
                us a e-mail or just ask over at our discord.
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
      <section id="parts" className="wrapper style3">
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
                      <img className="image table" src={picrubberfeet} alt="" />
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
                      <img className="image table" src={picrotaryknob} alt="" />
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
                      <img className="image table" src={picsmoldiode} alt="" />
                    </td>
                    <td>
                      Small Diodes
                      <br />
                      <br />
                      1N4148
                      <br />
                      <br />
                      We will include a few extras of those to ensure you have
                      enough!
                    </td>
                    <td>D1...48</td>
                    <td>48</td>
                  </tr>
                  <tr>
                    <td>
                      <img className="image table" src={picbigdiode} alt="" />
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
                      <img className="image table" src={pic1_5kohm} alt="" />
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
                      <img className="image table" src={pic5_1kohm} alt="" />
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
                      <img className="image table" src={picsmolcap} alt="" />
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
                      Use this Diode bender to perfectly bend the diodes to fit
                      in our PCB. You will get the nicest looking bends this
                      way!
                    </td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <img className="image table" src={picallankey} alt="" />
                    </td>
                    <td>
                      Allan Key
                      <br />
                      <br />
                      This allan key fits the M2 Hex Screws that are needed for
                      assembly!
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
      <section id="tools" className="wrapper style2 alt">
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
                      You will need these to clip off the legs of the through
                      hole components.
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
                      Please use high quality solder (flux core or apply flux
                      externally) to make your life easier when soldering this
                      kit!
                    </td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="solder" className="wrapper style1">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering</h2>
            <p>
              <span className="image left">
                <img src={pictopdownic} alt="" />
              </span>
              In this section we will show you how to do the required soldering
              for your new Static, please take the time to read these
              instructions fully at least once before actually starting. If this
              is your first time soldering a keyboard kit, congratulations on
              taking the plunge!
              <br />
              This all may seem overwhelming at first but we promise that if you
              stay calm and work mindfully, you'll be posting your new Static's
              sound test in no time at all!
              <br />
              <br />
              <br />
              <br />
              We wanted this process to be as easy to understand as possible,
              and as such have provided you with a super handy interactive bill
              of materials that also doubles as a 'map' of your PCB. If you
              click through to it
              <Link to="#pnp"> here</Link>, you will see that on the left you
              have a BOM that matches your packing list as well as a model of
              the Static's PCB on the right.
              <br />
              If you examine the list closely each item has a reference column
              value that consists of a two character letter/number code (eg. J1,
              R1, R2, etc.), you can think of these as each component's
              'address' on the map. If you look at your physical PCB right now
              you'll see that these codes are also printed on the board
              directly, this is especially helpful in figuring out what needs to
              go where.
              <br />
              Our interactive BOM goes a step further though, if you simply
              mouse over any component on the list it's intended location is
              highlighted in red on the model for your convenience. Please make
              liberal use of this feature and always double-check before ever
              touching iron to board, having to desolder something because you
              were in a rush is no fun at all!
              <br />
              <br />
              <span className="image right">
                <img src={picatmegatopdown} alt="" />
              </span>
              Please take a few minutes now to familiarize yourself with each
              part and it's location, some of them are quite small. Some of them
              will obviously only fit into their footprint on the PCB in a
              single orientation, while others may have a less obvious specific
              one. If the latter is the case it will be marked on both the
              component and PCB, usually by matching up a line or notch on one
              side of each.
              <br />
              For example please mouse over line item #6 (U1) now, which is your
              ATmega328-P. You will see that there is a notch on the right side
              of both the part itself, it's outline on the BOM, and finally on
              the PCB itself. Be very sure to match this orientation or your
              board will not function properly, or at all!
              <br />
              <br />
              We have provided pictures of each component in your kit in the
              <Link to="#parts"> packing list</Link>, by referencing this in
              combination with our
              <Link to="#pnp"> interactive BOM</Link> we trust that you'll be
              able to figure out where everything goes. If for any reason you're
              unsure of or just want to double-check any part of the build
              process, please come ask in #buildassistance over at our{' '}
              <a
                href="https://discord.gg/WpmFC2NRWV"
                rel="noreferrer"
                target="_blank"
              >
                Discord
              </a>{' '}
              before proceeding.
              <br />
              It's always harder to undo something than it is to wait for an
              answer clarifying it, and we promise to be prompt with our
              replies. We are always happy to answer any questions you may have,
              and we think you'll find our community very helpful as well.
              Please remember that the only stupid question is the one you
              didn't ask!
              <br />
              <br />
              Next we'll be going into some techniques and tips for soldering
              specific components, again please read through these in their
              entirety before starting to solder.
              <br />
              These include:
              <br />- how to solder basic through hole components
              <Link to="#tht"> here</Link>
              <br />- how to solder the USB-C port
              <Link to="#usb"> here</Link>
              <br />- how to solder the OLED screen
              <Link to="#oled"> here</Link>
              <br />- how to solder the EC11 encoder
              <Link to="#enc"> here</Link>
            </p>
          </div>
        </div>
      </section>
      <section id="tht" className="wrapper style2 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering Through Hole Components</h2>
          </div>
        </div>
      </section>
      <section id="usb" className="wrapper style3">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering the USB-C Port</h2>
          </div>
        </div>
      </section>
      <section id="oled" className="wrapper style4 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering the OLED</h2>
          </div>
        </div>
      </section>
      <section id="enc" className="wrapper style5">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering the Encoder (EC11)</h2>
          </div>
        </div>
      </section>
      <section id="pnp" className="wrapper style6 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Interactive BOM / human PnP</h2>
            <p>
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
