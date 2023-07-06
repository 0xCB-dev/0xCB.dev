import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contact</h2>
        <form
          action="https://mailto:mail@0xcb.dev"
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
            <FontAwesomeIcon icon="store" size="1x" />
            <a target="_blank" rel="noreferrer" href="https://keeb.supply/">
              {' '}
              Our Store
            </a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/0xCB-dev/"
            >
              {' '}
              GitHub
            </a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'discord']} size="1x" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/WpmFC2NRWV"
            >
              {' '}
              Our Discord Community
            </a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'mastodon']} size="1x" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mastodon.0xcb.dev/@0xcb"
            >
              {' '}
              Mastodon
            </a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/keeb.supply_0xcb/"
            >
              {' '}
              Instagram
            </a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon="envelope" size="1x" />
            <a href="mailto:mail@0xcb.dev"> mail@0xcb.dev</a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            <a target="_blank" rel="noreferrer" href="https://conor-burns.com">
              Conor Burns
            </a>{' '}
            &copy; 2023
          </li>
          <li>
            <Link to="/legal/legal">Legal Notice</Link>
          </li>
          <li>
            <Link to="/legal/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/legal/tos">ToS</Link>
          </li>
          <li>
            <Link to="/legal/aup">AUP</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
