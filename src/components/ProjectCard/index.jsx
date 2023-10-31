import {AiOutlineEye} from 'react-icons/ai'
import {BsCodeSlash} from 'react-icons/bs'

export default function ProjectCard(props){
    const {name, description, technologies, websiteUrl, githubRepoUrl} = props.info;
    return(
        <li className="py-3 mb-2 bg-white border px-2 hover:shadow-none shadow-md rounded-md">
            <div className=" flex justify-between">
                <a className="text-xl font-medium text-purple-700" href={websiteUrl} target="new">{name}</a>
                <div className=" flex space-x-2 items-center">
                    <a href={websiteUrl} className=' text-xl' target='new'><AiOutlineEye /></a>
                    <a href={githubRepoUrl?githubRepoUrl:'#'} className=' text-xl' target='new'><BsCodeSlash /></a>
                </div>
            </div>
            <p>{description}</p>
            <div className="mt-4 flex flex-wrap">
                {technologies.map((item) => <span className="px-3 py-1 my-1 whitespace-nowrap bg-slate-200 mr-1 text-xs rounded-full" key={item}>{item}</span>)}
            </div>
        </li>
    )
}