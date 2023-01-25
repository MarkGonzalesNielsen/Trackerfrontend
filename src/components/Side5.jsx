import React, {useState} from 'react';
import apiFacade from "../apiFacade.js";

function Side5({setErrorMessage}) {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [createProject, setCreateProject] = useState(false)

    

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handeDescription = (e) => {
        setDescription(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        let jsonBody =
            {
                name: name,
                description: description
                
            }
        console.log(jsonBody)
        //await apiFacade.postData("admin/createtrip", (data) => {
        await apiFacade.postData("project/createproject", (data) => {
            console.log("Project with the name: " + data.name + " was successfully created");
        }, setErrorMessage, jsonBody)
        setCreateProject(!createProject)
    }

    return (
        <div style={{padding: 30}} className="column middle" style2={{paddingLeft: 40}}>
            <div style={{paddingTop: 10}}>
                <h2>Create Project</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="inputLogin" required type="text" placeholder="Description" name="description"
                       onChange={handleName}/>
                <br/>
                <input className="inputLogin" required type="text" placeholder="Date" name="date"
                       onChange={handeDescription}/>
                
                <br/><br/>
                <button onClick={handleSubmit} type="submit">Create Project</button>
            </form>
            <div>
                {createProject ? (
                    <h5>Project with the name {name} was successfully created</h5>
                ) : ""}
            </div>
        </div>
    );
}

export default Side5