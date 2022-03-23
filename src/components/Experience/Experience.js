import React from 'react';
import './Experience.css';
import renderHTML from 'react-render-html';

const Experience = ({title,desc,companyname,link,date}) => {
    return (
        <>
        
        <div className='project'>
        <div className='tape'></div>
       <div className="project__basicInfo ">
            <h2 className="project__title">{title}</h2>
            <div className="project__langs">
                <span className="project__lang hover:bg-purple-500"><a href={link}>{companyname}</a></span>
            </div>
            <div className='project__links'>
            <span>{date}</span>
            </div>
        </div>
        
        <div className="project__detail">
            <p className="project__desc">{renderHTML(desc)}</p>
        </div>
        </div>
        </>
    )
}

export default Experience;