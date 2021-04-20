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
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="https://blog.0xcb.dev"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/instructions"
            >
              Instructions
            </Link>
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
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/privacy"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              onClick={(e) => {
                onMenuToggle();
              }}
              to="/legal"
            >
              Legal Notice
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
