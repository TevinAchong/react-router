import { useLoaderData, useParams } from "react-router-dom"


export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();
    return (
    <div className="career-details">
        <h2>{career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>{career.description}</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
    // Fetch any data that is used inside the component
    const res = await fetch(`http://localhost:4000/careers/${params.id}`);
    return res.json();
}
  