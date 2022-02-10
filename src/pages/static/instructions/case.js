import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import ScrollUp from 'react-scroll-up';
import Layout from 'components/Layout';
import picscroller from 'assets/images/up.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Static Acrylic Case assembly instructions WIP!!!</h2>
        </div>
      </header>
      <section id="toc" className="wrapper style1 alt">
        <div className="inner">
          <div className="row">
            <div className="col-6 col-12-medium">
              <p>
                Here you can find the instructions for the 0xCB Static Acrylic
                Case! This is still Work in Progress!
                <br />
                <br />
                The process of assembling the case is quite straight forward, so
                this should be a quick one.
                <br />
                <br />
                If you have any problems during assembly don't hesistate to
                shoot us an e-mail or ask over at our discord.
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
              These parts should all be included in you Static Acrylic Case Kit!
            </p>
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
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="1"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="pcb"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 2</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="pcb"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="pcb"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 4</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="pcb"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 5</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="pcb"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 6</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/placeholder.jpg"
                        alt="pcb"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Layer 7</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/static/instructions/si-big-standoffs.jpg"
                        alt="big standoffs"
                        placeholder="blurred"
                      />
                    </td>
                    <td>Big Standoffs (M2x12mm)</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>
                      <StaticImage
                        className="image"
                        src="../../assets/images/static/instructions/si-screws.jpg"
                        alt="screws"
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
                        src="../../assets/images/static/instructions/si-screws.jpg"
                        alt="screws"
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
              While Handling Acrylic Sheets, there are a few things to consider.
              Please read through this section carefully!
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="ic"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              We use Cast Acrylic rather than Extruded in our kits. This means
              the material is less brittle and will be more stable, but there are
              some small parts in our kit so you should be really careful while
              handling the all single layers!
              <br />
              <br />
              <br />
              <br />
              <br />
              <StaticImage
                className="image right"
                src="../../assets/images/placeholder.jpg"
                alt="atmega"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              <br />
              All Layers come with a protective film on both sides! You
              need to remove that to ensure a nice fit and look afterwards...
              This is probably the most satisfying part of the whole process. ;)
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/placeholder.jpg"
                alt="ic"
                placeholder="blurred"
              />
              <br />
              <br />
              <br />
              While tightening the screws please don't overtighten them. Just screw them together until you feel a bit of resistance. If you overtighten them the acrylic will break! It is not as durable as the FR4 together with the standoffs in the base kit.
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
                src="../../assets/images/static/instructions/si-resistorbend.jpg"
                alt="resistorbend"
                placeholder="blurred"
              />
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
              <StaticImage
                className="image right"
                src="../../assets/images/static/instructions/si-cap-in-place.jpg"
                alt="cap placement"
                placeholder="blurred"
              />
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
              <StaticImage
                className="image left"
                src="../../assets/images/static/instructions/si-legs-bend.jpg"
                alt="leg bending"
                placeholder="blurred"
              />
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
              <StaticImage
                className="image right"
                src="../../assets/images/static/instructions/si-legs-soldered.jpg"
                alt="solder legs"
                placeholder="blurred"
              />
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
              <StaticImage
                className="image left"
                src="../../assets/images/static/instructions/si-legs-clipped.jpg"
                alt="clip legs"
                placeholder="blurred"
              />
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
