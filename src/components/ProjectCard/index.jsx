export default function ProjectCard(props){
    const {name, description, technologies, websiteUrl} = props.info;
    return(
        <li className="py-3 mb-2 bg-white border px-2 hover:shadow-md rounded-md">
            <a className="text-xl font-medium" href={websiteUrl} target="new">{name}</a>
            <p>{description}</p>
            <div className="my-4">
                {technologies.map((item) => <span className="px-3 py-1 bg-slate-200 mr-1 text-sm rounded-full" key={item}>{item}</span>)}
            </div>
        </li>
    )
}