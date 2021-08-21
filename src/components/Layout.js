import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faStore,
  faEnvelope,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faStore, faEnvelope, faStar, faStarHalf);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>0xCB - Tech, Keyboards and more</title>
          <meta name="title" content="0xCB - Tech, Keyboards and more" />
          <meta
            name="description"
            content="0xCB makes custom-made Keyboards, that are fully customizable. Handmade and precisely engineered keyboards made with the help of 3D-Printing and assembled in Germany."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://0xcb.dev/" />
          <meta property="og:title" content="0xCB - Tech, Keyboards and more" />
          <meta
            property="og:description"
            content="0xCB makes custom-made Keyboards, that are fully customizable. Handmade and precisely engineered keyboards made with the help of 3D-Printing and assembled in Germany."
          />
          <meta property="og:image" content="https://0xcb.dev/og.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://0xcb.dev/" />
          <meta
            property="twitter:title"
            content="0xCB - Tech, Keyboards and more"
          />
          <meta
            property="twitter:description"
            content="0xCB makes custom-made Keyboards, that are fully customizable. Handmade and precisely engineered keyboards made with the help of 3D-Printing and assembled in Germany."
          />
          <meta property="twitter:image" content="https://0xcb.dev/og.jpg" />

          <meta name="robots" content="noodp,noydir" />
          <html lang="en" />
        </Helmet>
        <div className={isPreloaded ? ' main-body  is-preload' : ' main-body'}>
          <div id="page-wrapper">
            <SideBar fullMenu={fullMenu} />
            {children}
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
