import React, {useEffect, useState} from 'react';
import facade from "../apiFacade.js";
import apiFacade from "../apiFacade.js";

function Side1({setErrorMessage}) {

    const [allProjectHours, setAllProjectHours] = useState([])
    const [hourId, setHourId] = useState(0)
    const [removed, setRemoved] = useState(false)

    useEffect(() => {
        facade.fetchData("projectHours/all", data => setAllProjectHours(data), setErrorMessage);
    }, [])

    const hourChange = (e) => {
      setHourId(e.target.value)
        console.log(hourId);
    }

    const removeTrip = async (e) => {
        e.preventDefault();
        let jsonBody = {
            id: hourId
        }

        console.log(jsonBody)
        await apiFacade.deleteData("projectHours/delete/" + hourId, (data) => {
            console.log("ProjectHours with id: " + hourId + "was successfully removed");
        }, setErrorMessage, jsonBody)
        setRemoved(!removed)
    };


    return (
        <div style={{padding: 30}} className='column middle'>
            <label htmlFor="boatSelect">Choose projectHour:</label>
            <select onChange={hourChange}>
                <option value=""></option>
                {allProjectHours.map((hour) => (
                    <option  key={hour.id} value={hour.id}>id:{hour.id} | HoursSpendt:{hour.hoursSpendt} | UserStory:{hour.userStory} | Description:{hour.description}</option>
                ))}
            </select>


            <button className="removeHour" onClick={removeTrip}>Remove ProjectHours</button>

            {removed ? (
                <h5>ProjectHours with id {hourId} was succesfully removed</h5>
            ) : ""}
        </div>
    );
}

export default Side1;