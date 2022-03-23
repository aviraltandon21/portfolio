import React from 'react';
import Experience from './components/Experience/Experience';
function ExperienceData() {
    return (
        <>
        <section className='my-28  px-5' id='experience'>
        <div className='experiences'>
        <header className='text-2xl font-bold pt-10'>
            <h2>Experience</h2>
        </header>
           
            <div className="experiences__experienceCont">

              <Experience title="Software Developer Intern" 
              desc="<ul>
  <li>Developed Knowledge Base website using GatsbyJS and Strapi</li>
  <li>Designed whole schema for website in Strapi</li>
  <li>Fixed bugs and added new reusable components</li>
  <li>Revamped the whole UI of the website using Material UI</li>
</ul>"
              companyname="NxtBigs Software Labs"
              link="https://nxtbig.com/" 
              date="Aug 2021 - Oct 2021"
              />

              <Experience title="Web Developer Intern"
              desc="<ul>
  <li>Developed Home Page and fully functional course page</li>
  <li>Integrated data from various back-end services and databases</li>
  <li>Ensured cross-platform optimization for mobile phones</li>
</ul>"
              companyname="Goseeko" 
              link="https://www.goseeko.com/"
              date="June 2021 - July 2021"
              />

              <Experience title="Frontend Developer Intern"
              desc="<ul>
  <li>Co-ordinated with front end team in development</li>
  <li>Revamped user friendly web pages in React JS</li>
  <li>Built reusable code and libraries for future use</li>
</ul>"
              companyname="MissonEd" 
              link="https://missioned-forum.web.app/welcome"
              date="July 2020 - Aug 2020"
              />
            </div>
        </div>
        </section>
        </>
    )
}

export default ExperienceData;