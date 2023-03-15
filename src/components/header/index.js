import React from "react";
import "./header.css";
import { BsCreditCard } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expenso
          <i>
            <BsCreditCard />
          </i>
        </div>
        <div className="header-button">
          <a
            href="https://github.com/shriram24P"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original"></i>Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
