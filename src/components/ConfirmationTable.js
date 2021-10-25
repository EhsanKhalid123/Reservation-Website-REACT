// Import statements for Libraries.
import react, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import formInfor from "./formInfor";
import MessageContext from "./MessageContext";

// Functional Component for the Reservation Form. 
function ConfirmationTable(props) {

    let history = useHistory();
    // Varaibles and UseState Hook Decalrations and useContext Hook Declarations
    // Note to Self FormInfor2 Variable is an attempt to pass form details through props using useState which doesn't work so
    // I used useContect which is the formInfo variable, because that worked.
    const [formInfo2, setFormInfo] = useState([]); // Can Directly add Original Props to use State like this useState([props]) Neither Works
    const { formInfo } = useContext(formInfor);
    const { setMessage } = useContext(MessageContext);

    const BOOKING_KEY = "Booking";

    // UseEffect Function to load the Form Details
    // This function here is so props for formInfo2 are updated and stored in the useState Variable properly.
    useEffect(() => {
        async function loadInfo() {
            await setFormInfo([props])
        }
        loadInfo();
    }, [props]);

    // Handesubmit event handler, runs each time form is submitted
    // Saves the User Input Details in the local storage.
    const handleSubmit = (event) => {
        event.preventDefault();

        localStorage.setItem(BOOKING_KEY, JSON.stringify(formInfo));
        setMessage(
            <>
                <strong>{formInfo.name}</strong> Your Reservation Has Been Confirmed &amp; Stored in Local Storage!
            </>);

        { history.push("/") }

    };

    // Returns/Displays HTML elements on the page.
    return (
        <div>

            <div style={{ background: "linear-gradient(to left, Grey , lightGrey)", height: "100px", textAlign: "left", padding: "30px 0 0 20%", fontWeight: "bold", fontSize: "30px" }}>Reservation</div>

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

                {/* Conditional Statement if User Details Exist then Show this otherwise that */}
                {formInfo === null ?
                    <tbody>
                        {history.push("/")}
                        <tr>
                            {/* Displays the Information */}
                            <td scope="row">No Information</td>
                            <td scope="row">No Information</td>
                            <td scope="row">No Information</td>
                            <td scope="row">No Information</td>
                            <td scope="row">No Information</td>
                            <td scope="row">No Information</td>
                            <td scope="row">No Information</td>
                        </tr>
                    </tbody>
                    :
                    // Map Function Used to Iterate through the array
                    formInfo.map((info) =>
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

            {/* Conditional Statement if User Details Exist then Show this otherwise that */}
            <p>&nbsp;</p>
            {formInfo === null ?
                <div>
                    {history.push("/")}
                    <button className="button2">Go Back to Edit</button>
                </div>
                :
                <div>
                    <p style={{ color: "green", fontWeight: "bold", fontSize: "20px" }}>Do you want to confirm your Reservation:</p>
                    <button className="button2">Go Back to Edit</button>
                    <button className="button3" onClick={handleSubmit}><img style={{ marginBottom: "3px", width: "15px" }} src="baseline_send_black_24dp.png" /> Confirm</button>
                </div>
            }
        </div>

    )
}

// Exports the ConfirmataionTable Functional Component to be used/displayed by other pages.
export default ConfirmationTable;