import './index.css'
import icons from '../../assets/icons'
import projects from '../../assets/projects'

import ProjectCard from '../ProjectCard'

export default function Main(){

    return(
        <div className='dark:bg-lightDark'>
            <div className="flex flex-col items-center lg:flex-row min-w-full px-4 lg:px-72 py-20 h-[90vh]">
                <div className="lg:w-3/4 lg:order-1 text-center lg:text-left order-2">
                    {/*<h2 className="">Hello <span className=' text-xl'>👋</span> </h2>*/}
                    <h2 className="text-4xl md:text-5xl font-bold whitespace-nowrap mb-4">Hey, <span className='text-violet-600'>I&apos;m Santhosh</span></h2>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold pb-2 mb-4 bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">A FullStack Software Engineer</h2>
                    <p className='text-lg font-medium text-grayFont'>I'm a Full Stack Engineer, passionate about creating dynamic, user-centric web applications. With a robust foundation in both front-end and back-end technologies, I'm equipped to design, build, and deploy seamless digital experiences.
                    </p>
                </div>
                <div className="lg:w-1/4 lg:order-2 order-1">
                    <div className=" w-60 h-60 bg-emerald-400 circle">
                        <img src="src\assets\linkedin-dp.jpg" alt="display-pic" />
                    </div>
                </div>
            </div>
            <div className='px-4 lg:px-72 py-20'>
                <h2 className='text-2xl font-medium underline mb-4'>Tools and Technologies</h2>
                <ul className='flex flex-wrap space-y-6 items-end'>
                    {icons.map((icon) => 
                    <li className=' mr-4 hover:scale-105 flex items-center border dark:text-lightWhite rounded-md shadow-sm px-4 py-2' key={icon['title']}>
                        <img src={icon['imgUrl']} alt={icon['title']} className=' w-8 h-8' />
                        <span className='text-lg ml-4'>{icon['title']}</span>
                    </li>
                    )}
                </ul>
            </div>
            <div className='px-4 lg:px-72 py-20'>
                <h2 className='text-2xl font-medium underline mb-4'>Projects</h2>
                <ul className='spacing-y-4'>
                    {projects.map(project => <ProjectCard key={project.name} info={project}/>)}
                </ul>
            </div>
            <div className='px-4 lg:px-72 py-20'>
                <h2 className='text-2xl font-medium underline mb-4'>Experience</h2>
                <ul>
                    <li>
                        <h3 className='text-2xl font-medium'>Product Engineer at Edgeverve Systems. (1 year 8 Mo)</h3>
                        <p>As a part of the Engineering team I worked on developement of new features, POCs and their implementation.
                            I worked on both Frontend and Backend. Worked on an Adapter to ingest EDI x12 files using smooks framework.
                            Also worked with the migration of UI to Angular.
                        </p>
                    </li>
                    <li>
                        <h3 className='text-2xl font-medium'>Teaching Assistant at NxtWave</h3>
                        <p>As a TA I helped students with doubts in python, javascript and react.</p>
                    </li>
                </ul>
            </div>
            <div className="px-4 lg:px-72 py-5 bg-slate-600 text-lightWhite">
                <p>&copy; 2023 Santhosh. All Rights Reserved.</p>
            </div>
        </div>
    )

}