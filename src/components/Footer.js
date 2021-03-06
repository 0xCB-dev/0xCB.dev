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
            <FontAwesomeIcon icon="envelope" size="1x" />
            <a href="mailto:mail@0xcb.dev"> mail@0xcb.dev</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
            <a href="https://github.com/0xCB-dev/"> 0xCB GitHub</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'discord']} size="1x" />
            <a href="https://discord.gg/WpmFC2NRWV"> Our Discord Community</a>
          </li>
          <li className="icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" />
            <a href="https://www.instagram.com/0xcb.dev/"> Instagram</a>
          </li>
        </ul>
        <ul className="copyright">
          <li>
            <a href="https://conor-burns.com">Conor Burns</a> &copy; 2021
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
