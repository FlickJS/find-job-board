


export default function ShowJobs({ elements }: object[]){
    return (
        <>
        {elements.map((element: any) => {
            return (
                <div>
                    <h2>{element.title}</h2>
                    <h3>{element.company}</h3>
                    <h3>{element.location}</h3>
                    <p>{element.description}</p>
                    <h3>{element.salary}</h3>
                    <h3>{element.type}</h3>
                    <h3>{element.technologies}</h3>
                </div>
            )
        })}
        </>
    )
}