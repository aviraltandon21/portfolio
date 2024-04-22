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
        
            
               <Experience title="Software Engineer Specialist" 
              desc="<ul>
  <li>Collaborating with the Grid Engineering Team on the Unbundled
  Transmission Applications (UTA) project.</li>
  <li>Specialized in Angular as a member of the UI Team, utilizing
  configuration files to develop application displays.</li>
  <li>Developed custom components and wrote optimized queries, leading
  to a 30% improvement in application functionality and performance.</li>
  <li>Contributed significantly to the first Alpha Release of the project by
  fixing 50+ bugs and implementing performance enhancements,
  resulting in a 40% reduction in reported issues during testing phase.</li>
</ul>"
              companyname="General Electric(GE) Digital"
              link="https://www.ge.com/digital/" 
              date="Aug 2023 - Present"
              />

              <Experience title="Software Developer Intern" 
              desc="<ul>
  <li>Developed a comprehensive Knowledge Base website utilizing
  GatsbyJS and Strapi, ensuring seamless information dissemination
  and accessibility.</li>
  <li>Implemented critical bug fixes and integrated new, reusable
  components within the GatsbyJS framework, enhancing the
  platform’s functionality and user experience.</li>
  <li>Revamped the whole UI of the website using Material UI</li>
</ul>"
              companyname="NxtBigs Software Labs"
              link="https://nxtbig.com/" 
              date="Aug 2021 - Oct 2021"
              />
            </div>
        </div>
        </section>
        </>
    )
}

export default ExperienceData;
