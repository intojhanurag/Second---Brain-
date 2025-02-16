import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <Link to="/about" className="footer-link">About</Link>
      <Link to="/terms" className="footer-link">Terms</Link>
      <Link to="/privacy" className="footer-link">Privacy</Link>
    </footer>
  );
}