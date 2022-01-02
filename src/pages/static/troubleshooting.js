import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Troubleshooting</h2>
          <p>
            Here we will go over some troubleshooting steps you can take if your
            keyboard is not working or has some other stuff wrong. We will use
            our Static Keyboard as an example, but you can use this guide for
            pretty much any through hole kit that is out there.
          </p>
        </div>
      </header>
      <section id="ftf" className="wrapper style4">
        <div className="inner">
          <div className="content">
            <h2 className="major">First things first</h2>
            <p>
              Is your keyboard getting recognized by your computer?
              <br />
              <br />
              <StaticImage
                className="image left"
                src="../../assets/images/static/troubleshooting/device_manager.jpg"
                alt="device_manager"
                placeholder="blurred"
              />
              <br />
              If you are on Windows you are looking for the Device Manager. You
              should see one of those HID Keyboard Devices in there. If there is
              one more after plugging in your keeb you are good. Give Windows
              some time. It may take a few seconds for it to get recognized.
              <br />
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="wrapper style3 alt">
        <div className="inner">
          <p>
            <StaticImage
              className="image right"
              src="../../assets/images/static/troubleshooting/lsusb.png"
              alt="lsusb"
              placeholder="blurred"
            />
            If you are on Linux run <code>lsusb</code> in your terminal and
            check if the device appears there, if not you can try{' '}
            <code>sudo dmesg -w</code> this can also display errors like "unable
            to enumerate USB device" (maybe something wrong with the usb port),
            or "reset low-speed USB device" (try a different port on yout PC,
            preferably USB2.0 - or an old USB hub as the issue is propably your
            usb chipset)
            <br />
            <StaticImage
              className="image right"
              src="../../assets/images/static/troubleshooting/dmesg.png"
              alt="dmesg"
              placeholder="blurred"
            />
          </p>
        </div>
      </section>
      <section className="wrapper style2">
        <div className="inner">
          <p>
            <StaticImage
              className="image right"
              src="../../assets/images/static/troubleshooting/device_manager.jpg"
              alt="device_manager"
              placeholder="blurred"
            />
            <br />
            If you are on Mac (WIP)
          </p>
        </div>
      </section>
      <section className="wrapper style1 alt">
        <div className="inner">
          <p>
            If your keyboard shows in any of those operating systems, please
            skip right to <Link to="#via"> here</Link>. <br />
            <br />
            If it still doesn't get recognized something with your soldering is
            wrong or you have flashed a faulty fimware (In case of the Static
            the ICs come preflashed and tested). So get your board in{' '}
            <a
              href="https://github.com/qmk/qmk_toolbox"
              rel="noreferrer"
              target="_blank"
            >
              {' '}
              QMK Toolbox
            </a>{' '}
            now and see if it gets recognized there. Just continue reading from{' '}
            <Link to="#qmk"> here</Link>.
          </p>
        </div>
      </section>
      <section id="qmk" className="wrapper style2">
        <div className="inner">
          <h2 className="major">QMK Toolbox</h2>
          <p>
            Here we will go over the flashing process in QMK Toolbox.
            <br />
            <br />
            First select your .hex file and the controller you are using.
            <StaticImage
              className="image fit"
              src="../../assets/images/static/troubleshooting/qmk_file.jpg"
              alt="qmk_file"
              placeholder="blurred"
              layout="fixed"
            />
            <br />
            Then get your keyboard into bootloader mode. For the Static you will
            need to hold the boot button while plugging it in.
            <br />
            It should look something like this. The important part is the yellow
            line.
            <StaticImage
              className="image fit"
              src="../../assets/images/static/troubleshooting/qmk_beforeflash.jpg"
              alt="qmk_beforeflash"
              placeholder="blurred"
              layout="fixed"
            />
            If that doesn't show, something is wrong with your soldering. Go{' '}
            <Link to="#sld">here</Link>
            . <br />
            <br />
            If you have that line you can proceed to press the flash button at
            the top. After flashing it should look something like this.
            <br />
            <StaticImage
              className="image fit"
              src="../../assets/images/static/troubleshooting/qmk_afterflash.jpg"
              alt="qmk_afterflash"
              placeholder="blurred"
              layout="fixed"
            />
            If you have gotten this far the next thing is to try connecting it
            in{' '}
            <a href="https://caniusevia.com/" rel="noreferrer" target="_blank">
              {' '}
              VIA
            </a>
            . Click <Link to="#via">here</Link> to get to that step.
          </p>
        </div>
      </section>
      <section id="sld" className="wrapper style1 alt">
        <div className="inner">
          <div className="content">
            <h2 className="major">Soldering</h2>
            <p>
              If your keyboard doesn't show up anywhere there is probably
              something wrong with your soldering. At this point you should have
              a multimeter ready. This will make your life way easier.
              <br />
              <br />
              The first thing you should check are your solder joints. Do they
              all look fine? Here you can see a graphic of how your joints
              should look. If some don't look perfect don't hesitate to touch
              them up again with some solder.
              <br />
              <br />
              <StaticImage
                className="image"
                src="../../assets/images/static/troubleshooting/solderjoints.png"
                alt="solderjoints"
                placeholder="blurred"
                layout="fixed"
              />
              <br />
              After you have touched up your joints you can basically start the
              Guide from the <Link to="#wrapper">top</Link>.
              <br />
              <br />
              If your keyboard still doen't work you should have a good look at
              the USB port. This is how a good USB port looks. Not too much
              solder and every pad is on it's own and not connecting with
              another one.
              <StaticImage
                className="image fit"
                src="../../assets/images/static/troubleshooting/USB_soldered.jpg"
                alt="USB_soldered"
                placeholder="blurred"
              />
              <br />
              If your port doesn't look like that you should reflow it with some
              flux. If you want to make sure your port works you can measure it
              through with a multimeter. Here is all the stuff you have to
              check. If one of those values is not in that range something is
              wrong and you need to reflow the port.
              <StaticImage
                className="image fit"
                src="../../assets/images/static/troubleshooting/USB_multi.jpg"
                alt="USB_multi"
                placeholder="blurred"
              />
              <br />
              If all those Values seem right then your board should get
              recognized by your computer. If it does please continue flashing
              the firmware <Link to="#qmk">here</Link> or jumping straight into
              VIA <Link to="#via">here</Link>.
            </p>
          </div>
        </div>
      </section>
      <section id="via" className="wrapper style2">
        <div className="inner">
          <div className="content">
            <h2 className="major">VIA</h2>
            <p>
              VIA is a software a lot of custom keyboards use. You can program
              your keyboard on there. Please feel free to download it from{' '}
              <a
                href="https://caniusevia.com/"
                rel="noreferrer"
                target="_blank"
              >
                {' '}
                here
              </a>
              .<br /> <br />
              When you open VIA your keyboard should just pop up in there. If it
              doesn't maybe check the <Link to="#qmk">software</Link> and{' '}
              <Link to="#sld">soldering</Link> side of things again.
              <StaticImage
                className="image fit"
                src="../../assets/images/static/troubleshooting/via.jpg"
                alt="via"
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
