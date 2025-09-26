import React from 'react'




const aboutItems = [
  {
    label: 'Project Built',
    number: 3
  },
  {
    label: 'Lines of Code Written',
    number: 1000
  }
];




const About = () => {
  return (
    <section 
    id='about'
    className='section'
    >
        <div className="container">

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl
                md:max-w-[60ch]">
                    Welcome! I&apos;m Kushagra, an aspiring Backend Engineer driven by a passion for developing highly functional and performant applications. I've honed my skills in system design and API development through extensive self-directed projects. I'm eager to apply my knowledge to build the next generation of fast, reliable, and scalable digital backbones.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>

                            </div>
                        )
                    )
                    }


                    <img src="/Henry Clark - Portfolio Images/images/logoipsum-277.svg" 
                    alt="Logo" 
                    width={30} 
                    height={30} 
                    className="ml-auto md:w-[40px] md:h-[40px]" 
                    />


                </div>
            </div>

        </div>
        
    </section>
  )
}

export default About
