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
      <section id="tools" className="wrapper style3 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Required Supplies</h2>
            <p>You will need these supplies to build your 1337!</p>
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
                      soldering on the 1337 is rather simple.
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
              <StaticImage
                className="image right"
                src="../../../assets/images/placeholder.jpg"
                alt="plexi-film"
                placeholder="blurred"
              />
              <br />
              <br />
              Put the PCB into the case and place a few switches in there. We
              will temporarily place the PCB in there to cut the ribbon cable to
              the right lengh. You will have to take off the bottom plate and
              OLED covers for this.
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
              Straighten out the cable and cut it roughly at the edge of the
              case. If you have never isolated cables before you should try it
              out first and leave the cable a little bit longer. That shouldn't
              be a problem. You can just squeeze the rest in the case later.
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
              Now take out the PCB again and solder in the OLED. be aware of the
              orientation here! If you turn it the wrong way around the OLED
              will not work and also will not fit into the case.
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
              Onto the encoder! You will have to push the big pins of the
              encoder together so that you can push it into the PCB later. Also
              take off the Knob and washer now and put them aside. The Knob can
              be taken off by taking out the little screw from the side with the
              big allen key.
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
              Place the encoder on the PCB. Orientation matters here again. The
              encoder goes on the side where the switches will also go.
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
              Solder in the encoder from the back. Be careful here so that you
              don't touch other small components!
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
              Put all switches into the case.
              <br />
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
              Push the PCB onto the switches. If you have Mill-Maxed your 1337
              this will require a bit of force and accuracy. If you have not
              Mill-Maxed your 1337 solder in your switches now.
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
              Put the OLED through the bottom of the case and place it ontop of
              the ledge.
              <br />
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
              Put on the bottom plate. The plate is not symetrical! The bottom
              plate has two cutouts those go in the back to the USB port and
              OLED wires.
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
              Now check that your bottom plate sits tight. You can take a look
              at the back of the OLED cutout. You should see the PCB sitting
              flush on the bottom plate.
              <br />
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
              Also check around the edges that the bottom plate is flush with
              the top case in general.
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
              Screw in the bottom plate now. Don't tighten the screws too much.
              You are only screwing right into plastic and the screws don't need
              to hold much anyway.
              <br />
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
              Place the two OLED covers on there and screw them together.
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
              You need to put a bit of force on the back for the screw to grab
              the back piece. But again don't tighten the screws to much. Now
              you have a screen sitting under there that can crack.
              <br />
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
              Screw in the washer for the Encoder.
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
              Put on the knob and tighten the screw from the side again.
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h2 style={{ 'text-align': 'center' }}>
                And you are done with your 1337!
              </h2>
              <br />
              <StaticImage
                className="image fit"
                src="../../assets/images/static/instructions/si-finished.jpg"
                alt="done"
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
