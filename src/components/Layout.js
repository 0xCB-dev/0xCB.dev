import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

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
          <title>0xCB - Keyboards and more</title>
          <meta name="title" content="0xCB - Tech, Keyboards and more" />
          <meta name="description" content="TBD" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://0xcb.dev/" />
          <meta property="og:title" content="0xCB - Tech, Keyboards and more" />
          <meta property="og:description" content="TBD" />
          <meta property="og:image" content="https://0xcb.dev/og.jpg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://0xcb.dev/" />
          <meta
            property="twitter:title"
            content="0xCB - Tech, Keyboards and more"
          />
          <meta property="twitter:description" content="TBD" />
          <meta property="twitter:image" content="https://0xcb.dev/og.jpg" />

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
