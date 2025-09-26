import React from 'react'
import ProjectCard from './ProjectCard';



const works = [
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/project-1.jpg',
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://musify-5al0.onrender.com/'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/project-2.jpg',
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: 'https://pixstock-official.vercel.app/'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/project-3.jpg',
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: ''
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/project-4.jpg',
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee-org/wealthome'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/project-5.jpg',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/project-6.jpg',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];




const Work = () => {
  return (
    <section className="section" id='work'>
        <div className="container">

        <h2 className="headline-2 mb-8">
            My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]">
            {works.map(({imgSrc, title, tags, projectLink}, key) => (
                <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
            ))}
        </div>

        </div>
    </section>
  )
}

export default Work
