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

import picusb4soldered from 'assets/images/static/instructions/si-usb-bottom-4soldered.jpg';
import picusb1soldered from 'assets/images/static/instructions/si-usb-bottom-1soldered.jpg';
import picirontip from 'assets/images/static/instructions/si-irontip.jpg';
import picusbstart from 'assets/images/static/instructions/si-usb-start.jpg';
import picusbcrooked from 'assets/images/static/instructions/si-usb-crooked.jpg';
import picusbpartly from 'assets/images/static/instructions/si-usb-bottom-partlysoldered.jpg';
import picusbbottom from 'assets/images/static/instructions/si-usb-bottom.jpg';
import picusbcloseup from 'assets/images/static/instructions/si-usb-closeup.jpg';
import picusbfully from 'assets/images/static/instructions/si-usb-bottom-fullysoldered.jpg';
import picresistorbend from 'assets/images/static/instructions/si-resistorbend.jpg';
import piclegssoldered from 'assets/images/static/instructions/si-legs-soldered.jpg';
import piclegsclipped from 'assets/images/static/instructions/si-legs-clipped.jpg';
import piclegsbend from 'assets/images/static/instructions/si-legs-bend.jpg';
import piccapinplace from 'assets/images/static/instructions/si-cap-in-place.jpg';

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
                      <Link to="#throughhole">Through Hole Components</Link>
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
                <li>
                  <Link to="#ass">Assembling the Keyboard</Link>
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
                Also please read the whole assembly instruction once before
                building and once during the build to make sure you do
                everything right!
                <br />
                <br />
                If you have any problems during assembly don't hesitate to shoot
                us an e-mail or just ask over at our discord.
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
                    <th>Part</th>
                    <th>Description</th>
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
                    <td>Flush Cutters</td>
                    <td>
                      {' '}
                      You will need these to clip off the legs of the through
                      hole components.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="image table"
                        src={picsolderingiron}
                        alt=""
                      />
                    </td>
                    <td>Soldering Iron</td>
                    <td>
                      {' '}
                      We recomment a good soldering iron especially for
                      soldering the USB port!
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img className="image table" src={picsolder} alt="" />
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
      <section id="tools" className="wrapper style1">
        <div className="inner">
          <div className="content">
            <h2 className="major">Optional Supplies</h2>
            <p>
              These Supplies are not needed to build the Static, but they
              definitely help!
            </p>
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
                      <img
                        className="image table"
                        src={picplaceholder}
                        alt=""
                      />
                    </td>
                    <td>extra flux / flux pen</td>
                    <td>
                      Extra Flux can be helpfull when soldering. Especially for
                      the USB Port! Flux makes the solder flow better into the
                      cavities and generally helpes get a good solder joint.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="image table"
                        src={picplaceholder}
                        alt=""
                      />
                    </td>
                    <td>isopropyl alcohol / PCB cleaner</td>
                    <td>
                      IPA or PCB Cleaner is super cool to make the PCB look good
                      after you are done soldering.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="image table"
                        src={picplaceholder}
                        alt=""
                      />
                    </td>
                    <td>Brass sponge</td>
                    <td>
                      With a brass sponge you can clean the tip of the soldering
                      iron. A brass sponge is a small investement but surely a
                      good one! It makes soldering that much easier when you can
                      work with a clean soldering iron tip!
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="solder" className="wrapper style2 alt">
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
      <section id="throughhole" className="wrapper style3">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering basic through hole components</h2>
            <p>
              <span className="image left">
                <img src={picresistorbend} alt="" />
              </span>
              For most through hole components you have to bend the legs first!
              When soldering the small diodes you can use our diode bender, to
              get clean bends, but for the rest just look at the distance the
              holes on the pcb are apart and bend the components accordingly by
              hand.
              <br /> This of course doesn't apply to all of the parts. Just take
              a good look at each part and see if you can fit it in without
              bending the legs. If so, just put them in there! If not, go ahead
              and bend the legs accordingly.
              <br />
              <br />
              <br />
              <span className="image right">
                <img src={piccapinplace} alt="" />
              </span>
              <br />
              <br />
              <br />
              Then you can just go ahead and place the component at the right
              spot on the PCB.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className="image left">
                <img src={piclegsbend} alt="" />
              </span>
              <br />
              <br />
              Now flip the PCB over. It is important to note that ALL soldering
              will take place on the bottom of the PCB! Now bend the legs of the
              component to hold it in place so you can solder it easily.
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className="image right">
                <img src={piclegssoldered} alt="" />
              </span>
              <br />
              <br />
              Now add a bit of solder to each solder joint of the component! If
              you think you added too little just add a little more. Through
              Hole components are really forgiving with solder. Just make sure
              no two solder joints are touching!
              <br />
              <br />
              <br />
              <br />
              <br />
              <span className="image left">
                <img src={piclegsclipped} alt="" />
              </span>
              <br />
              <br />
              When you are happy with your solder joints, go ahead and clip the
              legs off with your flush cutters.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              You are now done with your first soldered through hole component.
              Great job! You can repeat those steps for all basic components on
              this board like the resistors, capacitors and diodes!
            </p>
          </div>
        </div>
      </section>
      <section id="usb" className="wrapper style4 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering the USB-C Port</h2>
            <span className="image left">
              <img src={picusbstart} alt="" />
            </span>
            <br />
            Soldering the USB Port is always the most challenging part of any
            build! We recommend starting with it, because it is easiest when no
            other component is in the PCB.
            <br />
            <br />
            Start by placing the USB Port in the PCB on the side, that has all
            the printing for the components on it. It should go in super easy.
            If you need to use any kind of force you are doing it wrong! Just
            let it slide in there.
            <br />
            <br />
            <span className="image right">
              <img src={picusbbottom} alt="" />
            </span>
            <br />
            <br />
            Start by flipping the board around and taking a good look at the USB
            Port. Does it sit good in there? Are all pins looking good? You can
            see if the port wiggles a bit. That usually means that it sits good
            in there!
            <br />
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picusb1soldered} alt="" />
            </span>
            <br />
            Now you can add solder to one of the big pins of the USB port.
            Please be patient and really only do one! ;) Just hold the soldering
            iron on the pin for a while and then slowly add solder. If all goes
            well it should flow into the hole around the pin and you should be
            able to see a bit of solder on the other side.
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picusbcrooked} alt="" />
            </span>
            <br />
            <br />
            Now look at the top of the USB port if it sits straight in there. If
            it is not straight (Like on the pic to the right) you can go ahead
            and put the soldering iron on the joint and heat it up again. Now
            grab a pair of tweezers and position the USB port so that it sits
            straight. Don't touch it with your hands! The whole housing will get
            hot!
            <br />
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picusb4soldered} alt="" />
            </span>
            <br />
            <br />
            After that you can go ahead and solder the other three big pins of
            the USB port. Those should go the same as the first one. Just let
            your soldering iron rest on the joint a bit, add solder to it and
            let it flow into the holes around the pins.
            <br />
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picirontip} alt="" />
            </span>
            <br />
            <br />
            If you have extra flux add that to the little pins of the USB port
            now! Also go ahead and add a little bit of solder to your soldering
            iron now. You will use it in the next step.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picusbpartly} alt="" />
            </span>
            <br />
            <br />
            Take your soldering iron and rub it over the little pins. The solder
            should flow nicely into the cavities.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picusbfully} alt="" />
            </span>
            <br />
            <br />
            If you didn't add enough just go over the pins again with a bit of
            new solder. But be careful! Here it is crucial to not add a lot of
            solder! So be careful when soldering.
            <br />
            <br />
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picusbcloseup} alt="" />
            </span>
            <br />
            <br />
            Here is a close up of an USB port. It should look like this. No pin
            is touching another one. If there are pins toughing each other go
            over there again with the soldering iron and kind of wipe the solder
            off of there. Before that it's also great if you have a brass sponge
            to clean your tip of the soldering iron!
            <br />
            <br />
            <br />
            <br />
            And that's it! You soldered your (maybe first) USB Port! Godd job!
            You are now good to go to solder all the other components in there!
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
      <section id="oled" className="wrapper style3">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering the OLED</h2>
            <span className="image left">
              <img src={picplaceholder} alt="" />
            </span>
            Soldering an OLED Screen is not hard in a soldering kind of way, but
            it is challenging to get it to sit straight and look good!
            <br />
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picplaceholder} alt="" />
            </span>
            Start by just placing the OLED in there. It should face away from
            the diodes and to the rotary encoder.
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picplaceholder} alt="" />
            </span>
            Now you can place the diode bender under the OLED. This ensures the
            right distance between the PCB and the OLED.
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picplaceholder} alt="" />
            </span>
            Now flip over the PCB and solder one pin of the OLED. Preferably one
            of the outer ones.
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picplaceholder} alt="" />
            </span>
            You can now look if the OLED sits straight. If it does great job!
            That's awesome. If not you can just bend it a bit in place.
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picplaceholder} alt="" />
            </span>
            If you are satisfied with the result you can go ahead and solder the
            other three pins of the OLED.
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picplaceholder} alt="" />
            </span>
            You now have a great looking OLED in your Static! If you want you
            can peel off the little protective film now! You can also wait till
            you are all done with your Static of course.
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
            <br />
          </div>
        </div>
      </section>
      <section id="enc" className="wrapper style2 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering the Encoder (EC11)</h2>
            <span className="image left">
              <img src={picec11} alt="" />
            </span>
            <br />
            <br />
            <br />
            Soldering an Encoder is just as easy as soldering your switches!
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picplaceholder} alt="" />
            </span>
            <br />
            <br />
            <br />
            The Encoder has two big pins on it. Those are just for holding the
            encoder in there. They also act as ground pins.
            <br />
            <br />
            <br />
            <span className="image left">
              <img src={picplaceholder} alt="" />
            </span>
            <br />
            <br />
            <br />
            The Encoder also has two small pins on one side and three on the
            other. This is great, because it means you cannot put the encoder
            into the PCB the wrong way around! So go ahead and do that now. The
            two big pins should hold it in there good.
            <br />
            <br />
            <br />
            <span className="image right">
              <img src={picplaceholder} alt="" />
            </span>
            <br />
            <br />
            <br />
            Now you can go ahead and just solder all the pins. The two big ones
            take quite a lot of solder so don't be suprised!
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>
      <section id="pnp" className="wrapper style1">
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
      <section id="ass" className="wrapper style2 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Assembling the keyboard</h2>
            <p>
              <span className="image left">
                <img src={pictopdownic} alt="" />
              </span>
              Here we will go over all the steps you need to follow after you
              have soldered the PCB!
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
