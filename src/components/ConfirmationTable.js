// Import statements for Libraries.
import react, { useState, useEffect, useContext } from 'react';
import formInfor from "./formInfor";

// Functional Component for the Reservation Form. 
function ConfirmationTable(props) {

    // Varaibles and UseState Hook Decalrations and useContext Hook Declarations
    // Note to Self FormInfor2 Variable is an attempt to pass form details through props using useState which doesn't work so
    // I used useContect which is the formInfo variable, because that worked.
    const [formInfo2, setFormInfo] = useState([]); // Can Directly add Original Props to use State like this useState([props]) Neither Works
    const { formInfo } = useContext(formInfor);

    // UseEffect Function to load the Form Details
    // This function here is so props for formInfo2 are updated and stored in the useState Variable properly.
    useEffect(() => {
        async function loadInfo() {
            await setFormInfo([props])
        }
        loadInfo();
    }, [props]);

    // Returns/Displays HTML elements on the page.
    return (
        <div>

            <p>&nbsp;</p>
            <h3>Confirmation Page</h3>
            <p>&nbsp;</p>
            {console.log(props)}
            {/* Table Showing Entered User Details */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Meal</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Guests</th>
                        <th scope="col">Food Preferences</th>
                        <th scope="col">Special Requests</th>
                    </tr>
                </thead>
                {/* Map Function Used to Iterate through the array */}
                {formInfo.map((info) =>
                    <tbody>
                        <tr>
                            {/* Displays the Information */}
                            <td scope="row">{info.name}</td>
                            <td scope="row">{info.meal}</td>
                            <td scope="row">{info.date}</td>
                            <td scope="row">{info.time}</td>
                            <td scope="row">{info.guests}</td>
                            <td scope="row">{info.preferences}</td>
                            <td scope="row">{info.requests}</td>
                        </tr>
                    </tbody>
                )}
            </table>

            <p style={{}}>Do you want to confirm your Reservation:</p>
        </div>

    )
}

// Exports the ConfirmataionTable Functional Component to be used/displayed by other pages.
export default ConfirmationTable;