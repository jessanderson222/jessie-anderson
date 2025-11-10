import React, { useState } from 'react';
import { Carousel } from './Carousel';
import { OUT_CAROUSEL } from './data/outFoundationCarousel';
import { ART_CAROUSEL } from './data/artCarousel';

import helloSelfie from './photos/hello-selfie.jpeg';
import NBCSports from './photos/nbc-sports.png';
import panel from './photos/oit-panel.png';
import oitLi from './photos/oit-li.png'
import ergSummit from './photos/ERG-summit.jpg'
import penn from './photos/penn.jpg'
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
          <a href="#about-me" className="menu">About Me</a>
          <a href="#software" className="menu">Software Development</a>
          <a href="#volunteer" className="menu">Volunteer</a>
          <a href="#art" className="menu">Art</a>
        </div>
      </header>
      <div className="main">
        <section className="section-background" id="welcome-page">
          <h1 className="welcome">Welcome.</h1>
        </section>
        <section className="row flex-content" id="about-me">
          <div className="centered-content flex-content">
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
        <section className="row resume-page flex-content" id="software">
          <div className="centered-content flex-content">
            <div className="resume-text">
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
                <img alt="the NBC Sports front from NBCNews.com" src={penn} />
              </div> 
            </div>
          </div>
        </section>
        <section className="row flex-content" id="volunteer">
          <div className="centered-content flex-content">
            <div className="volunteer-container justify-center">
              <h1>Volunteer</h1>
              <div className="project-container">
                <a href="#mayor">
                  <div className="volunteer-exp zohran-for-mayor centered-content flex-content">
                    <h2>Zohran Mamdani for Mayor</h2>
                  </div>
                </a>
                <a href="#out-in-tech">
                  <div className="volunteer-exp out-in-tech centered-content flex-content">
                    <h2>Out in Tech</h2>
                  </div>
                </a>
                <a href="#out-foundation">
                  <div className="volunteer-exp out-foundation centered-content flex-content">
                    <h2>The OUT Foundation</h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="row section-background flex-content" id="mayor">
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
        <section className="row resume-page flex-content" id="out-in-tech">
          <div className="centered-content flex-content">
            <div className="resume-text">
              <h1>Out in Tech</h1>
              <div>
                <p>Out in Tech is an organization focused on uniting and uplifting the LGBTQ community. I fulfilled this mission by creating networking opportunities as well as events aimed at building career skills. </p>
                <p>During the COVID-19 pandemic, I started a new chapter of the organization virtually in Salt Lake City, Utah as an opportunity to build community during a lonely time. I interviewed and assembled a chapter leadership team and built a Slack community from 0 to 60+ members.</p>
                <p>Most recently, I served in chapter leadership in New York City. This included planning and coordinating events for up to 85 people as well as hosting events and panels with up to 100 attendees.</p>
              </div>
              <div className="software-img">
                <img alt="the NBC Sports front from NBCNews.com" src={panel} />
              </div>
            </div>
            <div className="software-imgs">

              <div className="software-img">
                <img alt="the NBC Sports front from NBCNews.com" src={oitLi} />
              </div> 
              <div className="software-img">
                <img alt="professionals seated on large steps in an office discussing ERG experience" src={ergSummit} />
              </div>
            </div>
          </div>
        </section>
        <section className="row" id="out-foundation">
          <h1>The OUT Foundation</h1>
          <div className="centered-content flex-content justify-center">
            <Carousel
              data={OUT_CAROUSEL}
              // inheritClass={"center-carousel"}
            />
          </div>
          <div className="resume-text">
            <div>
              <p>
                The OUT Foundation is focused on helping all LGBTQ alumni and students at Brigham Young University (BYU) reach their full potential. This includes through alumni networking and mentorship, facilitating subsidized therapy, and transfer scholarships for current students who need financial assistance to leave the institution.
              </p>
              <p>
                I worked with the founding team starting in 2018 as a social media manager and then as Outreach Coordinator for all digital communcations and east coast community events.
              </p>
              <p>
                When BYU removed a clause from their honor code regarding "homosexual behavior", <a href="https://www.sltrib.com/news/education/2020/03/04/after-byu-honor-code/">only to reinstate it weeks later</a> after students started to come out,
                I worked with the team to create a viral social media campaign that raised $30,000 for therapy and transfer scholarships for affected students. We also worked with queer alumni and allies to hold protests across the country, including on campus
                and in Lincoln Square.
              </p>
            </div>
          </div>
        </section>
        <section className="row resume-page" id="art">
          <h1>Art and Illustration</h1>
          <div className="resume-content">
            <p>
            I have loved art since I was an elementary school kid drawing in the margins of all my assignments. I mainly love to paint and use watercolors or acrylics.
            </p>
            <p>
              In addition to my own art, I cofounded a queer figure drawing group with my friends. We host a monthly figure drawing session for up to 20 people. More details to come soon.
            </p>
          </div>
          <div className="centered-content flex-content justify-center">
            <div>
              <Carousel
                data={ART_CAROUSEL}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
