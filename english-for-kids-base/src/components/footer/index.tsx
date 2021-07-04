import React from 'react';
import './footer.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer_github">
        <a
          className="footer_github__link"
          href="https://github.com/krikun1983"
          title="github"
          target="_blank"
          rel="noreferrer"
        >
          <img src="github.svg" alt="" />
          <p>krikun1983 2021</p>
        </a>
      </div>
      <div className="footer_rss">
        <a href="https://rs.school/js/" title="rss school" target="_blank" rel="noreferrer">
          <img src="rss.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
