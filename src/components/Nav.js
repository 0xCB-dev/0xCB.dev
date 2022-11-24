import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://keeb.supply/">
              Our Store
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.keeb.supply/"
            >
              Documentation
            </a>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="#footer"
            >
              Contact
            </Link>
          </li>
        </ul>
        <a
          className="close"
          onClick={(e) => {
            e.preventDefault();
            onMenuToggle();
          }}
          href="#menu"
        >
          {''}
        </a>
      </div>
    </nav>
  );
}
