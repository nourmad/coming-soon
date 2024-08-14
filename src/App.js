import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconDiscord } from './assets/icons/discord.svg';
import logo from './assets/icons/whizi.png'; // Import the logo image
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">
              <img src={logo} alt="LOGO" className="logo-image" />
            </a>
          </div>
          <div className="social">
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://discord.com/" title="Discord" target="_blank" rel="noopener noreferrer">
              <IconDiscord className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Coming soon.</p>
          </div>
          <a href="mailto:whizihelp@gmail.com">
            <div className="cta">Email us</div>
          </a>
        </div>
        <div className="footer">
          <span></span>
        </div>
      </div>
    );
  }
}
export default App;