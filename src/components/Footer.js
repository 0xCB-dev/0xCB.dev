import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faStore, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab, faStore, faEnvelope);
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contact</h2>
        <form
          action="mailto:mail@0xcb.dev"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="icon">
            <FontAwesomeIcon icon={faStore} size="1x" />
            <a href="https://www.tindie.com/stores/0xcb/"> Tindie Store</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
            <a href="https://github.com/0xCB-dev/"> 0xCB</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={faEnvelope} size="1x" />
            <a href="mailto:mail@0xcb.dev"> mail@0xcb.dev</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" />
            <a href="https://www.instagram.com/kriener.photography/">
              {' '}
              @kriener.photography
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            <a href="https://conor-burns.com">Conor Burns</a>
          </li>
          <li>&copy; 2021</li>
        </ul>
      </div>
    </section>
  );
}
