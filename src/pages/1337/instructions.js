import React from 'react';

import Layout from '../../components/Layout';

import pic1 from '../../assets/images/1-pcb.jpg';
import pic2 from '../../assets/images/2-standoff.jpg';
import pic3 from '../../assets/images/3-standoff.jpg';
import pic4 from '../../assets/images/4-encoder-switches.jpg';
import pic5 from '../../assets/images/5-direction.jpg';
import pic6 from '../../assets/images/6-bend.jpg';
import pic7 from '../../assets/images/7-setpcb.jpg';
import pic8 from '../../assets/images/8-solder.jpg';
import pic9 from '../../assets/images/9-led.jpg';
import pic10 from '../../assets/images/10-solderled.jpg';
import pic11 from '../../assets/images/11-shortprotec.jpg';
import pic12 from '../../assets/images/12-mcu.jpg';
import pic13 from '../../assets/images/13-oledwire.jpg';
import pic14 from '../../assets/images/14-oledwiresolderpcb.jpg';
import pic15 from '../../assets/images/15-oledwiresolderoled.jpg';
import pic16 from '../../assets/images/16-finished.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>1337 assembly instructions</h2>
          <p>
            These instructions are outdated! They work for Rev 1.0 till Rev 1.3.
            <br />
            <br />
            Here are the instructions for our 1337 Keyboard. If you didn´t buy
            the 3D-printed pieces from us you, can print them before our package
            arrives at your door with the STL Files we´ve sent you so you can
            begin right away with the assembly! Also, please be careful with the
            SMD components when soldering. The components are very small and
            fragile.
          </p>
        </div>
      </header>
      <div className="wrapper">
        <div className="inner">
          <section className="features">
            <article>
              <img className="image" src={pic1} alt="" />
              <h3 className="major">1. The PCB</h3>
              <p>
                1x{' '}
                <span style={{ color: '#ff00f6' }}>
                  n-CH MOSFET for Backlight
                </span>
                ,&nbsp; 10x{' '}
                <span style={{ color: '#003cff' }}>330Ohm Resistor</span>,&nbsp;
                1x <span style={{ color: '#fffc00' }}>10kOhm Resistor</span>
                ,&nbsp; 4x{' '}
                <span style={{ color: '#1eff00' }}>100nF Capacitor</span>,&nbsp;
                4x{' '}
                <span style={{ color: '#ff0000' }}>
                  WS2812B adressable RGB LED
                </span>
                ,&nbsp;
                <span style={{ color: '#00e4ff' }}>
                  In Circuit Serial Programming header
                </span>
                ,&nbsp;
                <span style={{ color: '#8400ff' }}>
                  Backlight pins (+ is square)
                </span>
                ,&nbsp;
                <span style={{ color: '#ff7e00' }}>
                  Oled header (exposes I²C Bus)
                </span>
                ,&nbsp; Here's the{' '}
                <a href="https://github.com/0xCB-dev/0xcb-1337/blob/main/PCB/rev1.1/Schematic_1337.pdf">
                  {' '}
                  Schematic
                </a>
              </p>
            </article>
            <article>
              <img className="image" src={pic2} alt="" />
              <h3 className="major">2. SMD and Standoffs</h3>
              <p>
                Solder in all the SMD components (Be careful they are tiny) and
                place in the standoffs flush to the PCB.
              </p>
            </article>
            <article>
              <img className="image" src={pic3} alt="" />
              <h3 className="major">3. Solder them</h3>
              <p>
                Solder them and make sure that they are completly flat on the
                PCB.
              </p>
            </article>
            <article>
              <img className="image" src={pic4} alt="" />
              <h3 className="major">4. Encoder and Switches</h3>
              <p>
                Click in the switches with the LED hole facing you and place the
                encoder.
              </p>
            </article>
            <article>
              <img className="image" src={pic5} alt="" />
              <h3 className="major">5. Encoder Orientation</h3>
              <p>Make sure the 2 pins face the hole.</p>
            </article>
            <article>
              <img className="image" src={pic6} alt="" />
              <h3 className="major">6. Pin Placement</h3>
              <p>Bend the pins like so to make PCB installing easier.</p>
            </article>
            <article>
              <img className="image" src={pic7} alt="" />
              <h3 className="major">7. Insert PCB</h3>
              <p>Insert the PCB making sure not to bend any pins.</p>
            </article>
            <article>
              <img className="image" src={pic8} alt="" />
              <h3 className="major">8. Solder Encoder and Switches</h3>
              <p>
                Solder in the encoder and switches while pressing them into the
                pcb to make sure they are seatet properly.
              </p>
            </article>
            <article>
              <img className="image" src={pic9} alt="" />
              <h3 className="major">9. Place LEDs</h3>
              <p>
                Insert the LEDs with the longer leg (Anode) facing the square
                pcb pad.
              </p>
            </article>
            <article>
              <img className="image" src={pic10} alt="" />
              <h3 className="major">10. Solder LEDs</h3>
              <p>Solder them in place making sure they are not slipping out.</p>
            </article>
            <article>
              <img className="image" src={pic11} alt="" />
              <h3 className="major">11. Protection</h3>
              <p>
                Do not remove the insulation - It protects the controller and
                you from desoldering it :)
              </p>
            </article>
            <article>
              <img className="image" src={pic12} alt="" />
              <h3 className="major">12. Place MCU</h3>
              <p>
                Insert and solder the MCU (Elite-C/ProMicro) with the flat side
                facing away from the PCB.
              </p>
            </article>
            <article>
              <img className="image" src={pic13} alt="" />
              <h3 className="major">13. OLED wires</h3>
              <p>Strip the ends of the OLED wires.</p>
            </article>
            <article>
              <img className="image" src={pic14} alt="" />
              <h3 className="major">14. Solder to PCB</h3>
              <p>
                Solder them to the PCB (
                <span style={{ color: 'black' }}>GND</span>,&nbsp;
                <span style={{ color: 'red' }}>VCC</span>,&nbsp;
                <span style={{ color: 'yellow' }}>SCL</span>,&nbsp;
                <span style={{ color: 'green' }}>SDA</span>).
              </p>
            </article>
            <article>
              <img className="image" src={pic15} alt="" />
              <h3 className="major">15. Solder to OLED</h3>
              <p>
                Clip the top two corners of the OLED PCB round to make it fit
                nicely into the corners of the 3d print and solder the wires the
                OLED according to the marking on the OLED.
              </p>
            </article>
            <article>
              <img className="image" src={pic16} alt="" />
              <h3 className="major">16. Screw in the Covers</h3>
              <p>
                Screw in the two covers for the OLED and the bottom piece with
                the 8 M2 screws. Please be careful when screwing them in and
                don´t tighten them too much (otherwise they will strip out).
              </p>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
