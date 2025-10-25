import React from 'react';

const skillItem = [
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/java-icon.svg',
    label: 'Java',
    desc: 'Language'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/python-svgrepo-com.svg',
    label: 'Python',
    desc: 'Language'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/sql-svg.svg',
    label: 'SQL',
    desc: 'Database'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/gitlogo.svg',
    label: 'Github',
    desc: 'Version Control System'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/aws-svgrepo-com.svg',
    label: 'AWS',
    desc: 'Cloud Platform'
  },
  {
    imgSrc: '/Henry Clark - Portfolio Images/images/google_cloud-icon.svg',
    label: 'Google Cloud',
    desc: 'Cloud Platform'
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2">Essential Tools I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <div
              key={key}
              className="group relative p-6 rounded-2xl border border-transparent bg-zinc-900/40 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] overflow-hidden"
            >
              {/* Animated border glow overlay */}
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 group-hover:animate-border-glow pointer-events-none"></span>

              <div className="relative flex flex-col items-center justify-center gap-3">
                <img src={imgSrc} alt={label} className="w-12 h-12 object-contain" />
                <h3 className="text-lg font-semibold text-white">{label}</h3>
                <p className="text-sm text-zinc-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skill;
