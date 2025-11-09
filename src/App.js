import React, { useState } from 'react';
import helloSelfie from './photos/hello-selfie.jpeg';
import NBCSports from './photos/nbc-sports.png';
import './App.css';

export const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onButtonClick = () => {
    console.log('called')
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="name">Jessie Anderson</h2>
        <div>
          <button className="menu">About Me</button>
          <button className="menu">Software Development</button>
          <button className="menu">Volunteer</button>
          <button className="menu">Art</button>
        </div>
      </header>
      <div className="main">
        <section className="section-background" id="welcome-page">
          <h1 className="welcome">Welcome.</h1>
        </section>
        <section className="row" id="about-me">
          <div className="centered-content">
            <div className="img-container">
              <img alt="a picture of me in Bryant Park" src={helloSelfie} />
            </div>
            <div id="about-text">
              <h1 className="about-intro">I'm Jessie.</h1>
              <p>
                I have spent my career solving puzzles.
              </p>
              <p>
                Whether that’s how to fix a frontend bug, fundraise for a nonprofit, mix the perfect color palette, or an actual puzzle (I’m partial to Connections).
              </p>
              <p>
                Here's some of my best work.
              </p>
              <div className="button-container">
                <button>Software Development</button>
                <button>Volunteer</button>
                <button>Art and Illustration</button>
              </div>
            </div>
          </div>
        </section>
        <section className="row" id="software">
          <div className="centered-content">
            <div className="software-text">
              <h1>Software Development</h1>
              <div>
                <p>I am a full-stack engineer with six years of experience. I work in React, TypeScript, Java, Spring, Python, and Rails.</p>
                <p>Currently, I build stuff at NBCUniversal with the News Group. I spent two years on the article and video team working on live and 
                  pre-recorded video experience, live news coverage, and converting code to modern frameworks. Now, I work on Shop Today and Select.
                </p>
                <p>
                  I've worked anywhere from a 100-person startup to a multinational consulting firm servicing multiple clients.
                </p>
                <p>
                  Outside of my current position, I've worked on projects ranging from building out a new product offering to updating existing data quality.
                </p>
                <p>
                  I have completed the Flatiron School bootcamp and am currently pursuing a Masters of Computer and Information Technology from the University of Pennsylvania
                  as a part-time student.
                </p>
                <p>
                  For a full resume, check out my <a href="https://www.linkedin.com/in/jessie-anderson/">LinkedIn</a>.
                </p>
              </div>
            </div>
            <div className="software-imgs">
              <div className="software-img">
                <img alt="the NBC Sports front from NBCNews.com" src={NBCSports} />
              </div>
              <div className="software-img">
                <img alt="the NBC Sports front from NBCNews.com" src={NBCSports} />
              </div>
              <div className="software-img">
                <img alt="the NBC Sports front from NBCNews.com" src={NBCSports} />
              </div> 
            </div>
          </div>
        </section>
        <section className="row" id="volunteer">
          <div className="centered-content">
            <div className="volunteer-container">
              <h1>Volunteer</h1>
              <div className="project-container">
                <div className="volunteer-exp zohran-for-mayor centered-content">
                  <h2>Zohran Mamdani for Mayor</h2>
                </div>
                <div className="volunteer-exp out-in-tech centered-content">
                  <h2>Out in Tech</h2>
                </div>
                <div className="volunteer-exp out-foundation centered-content">
                  <h2>The OUT Foundation</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="row section-background" id="mayor">
          <div className="text-box">
            <div>
              <h1>Zohran Mamdani for Mayor</h1>
              <p>Knocking my first door in April, I started to lead volunteer door canvasses in May leading up to the NYC mayoral primary in November.</p>
              <p>I continued to lead four canvasses per month for up to 100 volunteers in a field operation of over 100,000 people through the general election.
                This included volunteer coordination, material prep, training new volunteers, and interfacing with potential voters.
              </p>
              <p>This volunteer experience was completed on my own time and was in no way connected to my current employment.</p>
            </div>
          </div>
        </section>
        <section className="row" id="out-in-tech">
          <div className="centered-content">
            <h1>Out in Tech</h1>
          </div>
        </section>
        <section className="row" id="volunteer">
          <div className="centered-content">
            <div>
              <h1>Art and Illustration</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
