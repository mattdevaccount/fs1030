import React, {Fragment} from 'react';
import '../styles/App.scss';
import '../styles/aboutStyle.scss';
import Footer from './Footer'

// the MVP of how I want the about page, looking to add hover effects on the timelines, clickable portions that can link to previous projects I worked on, etc.

function About() {
  return (
    <Fragment>
      <h3>My Full Stack Journey</h3>
        <div className='timeline'>
          <div className='timeline-body'>
            <div className='timeline-item'>
              <p className='time'>2015</p>
                <div className='content'>
                  <h3 className='title'>The Seed was Planted!</h3>
                    <p>Reconnected with some childhood friends who became developers, who told me that they thought I'd enjoy it. Didn't think too much of it, but kept in touch with those friends who would be pivotal later on</p>
                </div>
            </div>    
            <div className='timeline-item'>
              <p className='time'>2016</p>
                <div className='content'>
                  <h3 className='title'>Taking Charge, Deciding to Pivot</h3>
                    <p>Started to realize I was not passionate about the work I was doing, and wanted to do something about it. I reached out to those friends who encouraged me to give development a shot. Advised to try to self study for a bit to see if it was for me</p>
                </div>
            </div>    
          <div className='timeline-item'>
            <p className='time'>2017</p>
                <div className='content'>
                  <h3 className='title'>Self Doubt, Finding Motivation</h3>
                    <p>The weath of knowledge that was available out there was intimidating, trying to find out what I wanted to study was daunting in and of itself, tried to see what fields within development spoke to me most</p>
                </div>    
                </div>
            <div className='timeline-item'>
              <p className='time'>2018</p>
                <div className='content'>
                  <h3 className='title'>Started Self Studying</h3>
                    <p>After exploring the world of development, tried to learn a few languages, namely C# and HTML, but found the lack of direction and depth of knowledge intimidating. Fields of interest began to become clearer; which included web and video game development</p>
                </div>
            </div>     
            <div className='timeline-item'>
              <p className='time'>2019</p>
                <div className='content'>
                  <h3 className='title'>Making the Choice</h3>
                    <p>After a year of what felt like slow progress, spoke to some friends and family who encouraged me to pursue a certification to find that direction I was seeking through bootcamps, decided to start looking into bootcamp options to try and pivot my career</p>
                </div>
            </div>     
            <div className='timeline-item'>
              <p className='time'>2020</p>
                <div className='content'>
                  <h3 className='title'>Taking the Leap</h3>
                    <p>Committed to and began classes at York University part time while simulatenously working full time to complete my Full Stack Certification. Realizing that I've found something I'm actually passionate about and am excited to pursue :)</p>
              </div>
            </div>
          </div>
        </div>
    <Footer />
    </Fragment>
  );
}

export default About;
