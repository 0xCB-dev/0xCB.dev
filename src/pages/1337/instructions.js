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
          <h2>1337 assembly instructions</h2>
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
                Here you can find the instructions for assembling the 0xCB 1337
                macro pad.
                <br />
                <br />
                The PCB comes presoldered, you just need to solder some bigger
                components.
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
              These parts should all be included in your 1337 kit! You are able
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
                          src="../../assets/images/1337/instructions/new/case.jpg"
                          alt="case"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>
                      3D Printed Assembly
                      <br />
                      <br />
                      This inludes all 3D printed parts, M2 screws and rubber
                      feet.
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/1337/instructions/new/pcb.jpg"
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
                      all components presoldered
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/1337/instructions/new/encoder.jpg"
                          alt="encoder"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>rotary encoder with knob</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/1337/instructions/new/oled.jpg"
                          alt="oled"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>OLED Screen</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/1337/instructions/new/millmax.jpg"
                          alt="millmax"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>
                      Mill-Max Sockets
                      <br />
                      <br />
                      enough to build one macro pad
                      <br />
                      we include some extras
                    </td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/1337/instructions/new/ribbon.jpg"
                          alt="ribbon"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>ribbon cable</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}>
                        <StaticImage
                          className="image"
                          src="../../assets/images/1337/instructions/new/allenkey.jpg"
                          alt="allenkey"
                          placeholder="blurred"
                          quality="100"
                        />
                      </Zoom>
                    </td>
                    <td>Allen Keys</td>
                    <td>1</td>
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
            <h2 className="major">Assembly</h2>
            <p>
              <StaticImage
                className="image left"
                src="../../../assets/images/placeholder.jpg"
                alt="done"
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
                src="../../../assets/images/placeholder.jpg"
                alt="plexi-film"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              If you want to solder your 1337 with the Mill-Max sockets then you
              should start with those. You also can solder the switches
              directly. If you want to do that skip the Mill-Max soldering.
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/placeholder.jpg"
                alt="cover-screws"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Get your bag of sockets ready and take them out. Place them all in
              the holes of the PCB from the top. That is the side where no
              components are visible.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/placeholder.jpg"
                alt="plexi-film"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Now you have to secure the sockets so that you can turn around the
              PCB for soldering. We always use kapton tape for that. You can
              also use other tapes, just make sure that they are heat resistant.
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/placeholder.jpg"
                alt="cover-screws"
                placeholder="blurred"
              />
              <br />
              <br />
              Turn around the PCB and solder the sockets. Here it is important
              that the solder doesn't flow into the hole in the top. So add
              solder from the side until you have a decent amount. You don't
              need a lot here, just enough so that it holds itself.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../../assets/images/placeholder.jpg"
                alt="plexi-film"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Get yourself the ribbon cable. Seperate the ends and strip them.
              They should look like this.
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../../assets/images/placeholder.jpg"
                alt="cover-screws"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              Put them into the PCB and solder them in. Solder them from the
              side where you can read the lables for the holes (GND, VCC...).
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
