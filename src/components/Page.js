import React from 'react';
import './Page.css';

const Page = () => {
  return (
    <>
      <nav className="navigation container">
        <div className="nav-brand">
          <a href="/">adarshbalika</a>
        </div>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <a className="link link-active" href="/">home</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="/projects">projects</a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="/blogs">blogs</a>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <img
          src="https://adarshbalika.netlify.app/images/hero.svg"
          height="600px"
          width="600px"
          
          alt="React Logo"
        />
        <h1 className="hero-heading">
          adarsh balika the <span className="heading-inverted">web developer</span>
        </h1>
      </header>

      <section className="section ow">
        <div className="container container-center">
          <h1>technologies</h1>
          <p>
            I'm familiar with HTML5, CSS3, Git, JavaScript, NodeJS, ReactJS, and Web Hosting
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container-center">
          <h1>projects</h1>
          <p>
            I like to showcase my work and thus, you can see my projects hosted online
          </p>
          <a className="link link-primary" href="/projects">See Projects</a>
        </div>
      </section>

      <section className="section ow">
        <div className="container container-center">
          <h1>blogs</h1>
          <p>
            I am also working on some technical and non-technical blogs. I like to document my journey of learning.
          </p>
          <a className="link link-secondary" href="/blogs">Read Blogs</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-header">social media presence</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline"></li>
          <li className="list-item-inline"></li>
          <li className="list-item-inline">
            <a className="link" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              linkedin
            </a>
            <a className="link" href="https://github.com/tusharkale1504">Github</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Page;
