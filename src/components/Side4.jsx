import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";


function Side4({setErrorMessage}) {

  const [allProjects, setAllProjects] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    facade.fetchData("project/all", data=> setAllProjects(data), setErrorMessage);
}, [])


  return (
    <div style={{padding: 30}} className='column middle'>
    <h2>Project List</h2>

    <br/>

    <table className="table">
        <thead>
        <tr>
            <th scope="col">Project</th>
            <th scope="col">ProjectId</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
    
        </tr>
        </thead>
        <tbody>
        {allProjects.map((project, i) =>(
            <tr key={project.id}>
                <th scope="row" >{i+1}</th>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>

            </tr>
        ))}
        </tbody>
    </table>
</div>
  );
}



export default Side4
