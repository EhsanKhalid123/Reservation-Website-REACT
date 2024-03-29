// Import statements for Libraries.
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import formInfor from "./formInfor";
import MessageContext from "./MessageContext";

// Functional Component for the Reservation Form. 
function ReservationForm(props) {

    const EDITING_KEY = "EDITING";

    const getEditInfo = () => {
        // Extracts user input data from local storage.
        const data = localStorage.getItem(EDITING_KEY);

        // Convert data to objects.
        return JSON.parse(data);
    };

    // Varaibles and UseState Hook Decalrations.
    let history = useHistory();

    const [values, setValues] = useState({ name: "", meal: "", date: "", time: "", guests: "", preferences: "", requests: "" });
    const [errors, setErrors] = useState({});
    const [edit, setEdit] = useState(getEditInfo());
    const { setFormInfo } = useContext(formInfor);
    // An Attempt to store use input data in a state variable below.
    const [formInfo, setFormInfo2] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // useContext Hook declared for showing message
    const { message } = useContext(MessageContext);

    // UseEffect Hook Run once initally and everytime the variable errors and isSubmitting changes.
    useEffect(() => {
        // if props editInfo is true this means user click go back to edit button and will get local storage data for editing and pre populate fields for easy editing
        {
            props.editInfo === true &&
            setValues({ name: edit[0]['name'], meal: edit[0]['meal'], date: edit[0]['date'], time: edit[0]['time'], guests: edit[0]['guests'], preferences: edit[0]['preferences'], requests: edit[0]['requests'] })
        }
        // This submit function runs if no errors exist and submitting is true, Navigate to Different Page and sends info to props
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // console.log(values)
            setFormInfo([values]);
            // Setting UserData in to UseState Variable.
            setFormInfo2([values]);
            // console.log(formInfo);
            // Sending userData to Apps page props funciton submission2 and then sending that data to ConfirmationPage to access the formInfo but it doesnt work
            props.submission2(true, formInfo)
            history.push("/ConfirmationTable");
        }
    }, [errors, isSubmitting]);

    // Handesubmit event handler, runs each time form is submitted
    // Calls validation function and sets errors in values element from validate function
    const handleSubmit = (event) => {
        if (event)
            event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    // Handechange event handler, runs each time an input box value changes
    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        console.log(props);
    };

    // Functional Component for Validation Rules
    function validate(values) {
        // Array of Errors
        let errors = {};

        // Validation statements for Input Fields
        if (!values.name) {
            errors.name  = 'Name is required!'
        }

        // Validation statements for Input Fields
        if (!values.meal) {
            errors.meal = 'Please select a meal!';
        }

        // Validation statements for Input Fields
        if (!values.date) {
            errors.date = 'Date is required!';
        } else if (!values.date.match(/^\d{2}-\d{2}-\d{4}$/)) {
            errors.date = 'Date Format Must Match dd-mm-yyyy!';
        }

        // Validation statements for Input Fields
        if (!values.time) {
            errors.time = 'Time is required!';
        } else if (!values.time.match(/^\d{2}:\d{2}$/)) {
            errors.time = '24 Hour Time Format Required eg. 1am = 01:00';
        }

        // Validation statements for Input Fields
        if (!values.guests) {
            errors.guests = 'Guests is required!';
        } else if (values.guests > 10) {
            errors.guests = 'Maximum of 10 Guests Allowed!';
        }

        // Validation statements for Input Fields
        if (!values.preferences) {
            errors.preferences = 'Food Preferences is required!';
        }

        // Validation statements for Input Fields
        if (!values.requests) {
            errors.requests = 'Special Requests is required!';
        } else if (values.requests.length > 600) {
            errors.requests = 'Maximum 600 Characters Allowed!';
        }

        return errors;
    };

    // Returns/Displays HTML elements on the page.
    return (
        <div>
            {/* Header */}
            <div style={{ background: "linear-gradient(to left, Grey , lightGrey)", height: "100px", textAlign: "left", padding: "30px 0 0 20%", fontWeight: "bold", fontSize: "30px" }}>Reservation</div>
            {message !== null && <div className="alert alert-success" style={{ margin: "20px" }} role="alert">{message}</div>}
            <div style={{ margin: "50px 0 0 0" }} >

                {/* Form */}
                <form onSubmit={handleSubmit} noValidate>
                    {/* Input Fields and Images */}

                    <img style={{ width: "35px", marginBottom: "15px" }} src="baseline_person_black_24dp.png" alt="Person Icon" />
                    <input style={{ width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 20px 0 10px" }} type="text" id="name" name="name" placeholder="name" aria-label="name" onChange={handleChange} value={values.name || ''} />
                    <img style={{ width: "35px", marginBottom: "15px" }} src="baseline_check_box_black_24dp.png" alt="Meal Icon" />
                    <select onChange={handleChange} style={{ width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px" }} type="text" id="meal" name="meal" placeholder="meal"><option style={{ color: "grey" }} hidden >{values.meal || 'meal'}</option><option style={{ color: "black" }} value="Breakfast">Breakfast</option><option style={{ color: "black" }} value="Lunch">Lunch</option><option style={{ color: "black" }} value="Dinner">Dinner</option> </select>

                    {/* Error Messages */}
                    <div style={{ margin: "0 20% 20% 30%", position: "absolute" }}>
                        {errors.name && (
                            <input disabled style={{ color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.name} />
                        )}
                    </div>
                    <div >
                        {errors.meal && (
                            <input disabled style={{ position: "absolute", width: "30%", color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.meal} />
                        )}
                    </div>

                    <p style={{ marginTop: "35px" }}></p>

                    {/* Input Fields and Images */}
                    <img style={{ width: "35px", marginBottom: "15px" }} src="round_calendar_today_black_24dp.png" alt="Date Icon" />
                    <input style={{ width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 20px 0 5px" }} type="text" id="date" name="date" placeholder="date" onChange={handleChange} value={values.date || ''} />
                    <img style={{ width: "35px", marginBottom: "15px" }} src="baseline_watch_later_black_24dp.png" alt="Time Icon" />
                    <input style={{ width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px" }} type="text" id="time" name="time" placeholder="time" onChange={handleChange} value={values.time || ''} />

                    {/* Error Messages */}
                    <div style={{ margin: "0 20% 20% 26%", position: "absolute" }}>
                        {errors.date && (
                            <input disabled style={{ width: "155%", color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.date} />
                        )}
                    </div>
                    <div >
                        {errors.time && (
                            <input disabled style={{ position: "absolute", width: "30%", color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.time} />
                        )}
                    </div>

                    <p style={{ marginTop: "35px" }}></p>

                    {/* Input Fields and Images */}
                    <img style={{ width: "35px", marginBottom: "15px" }} src="baseline_people_black_24dp.png" alt="Guest Icon" />
                    <input style={{ width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 20px 0 5px" }} type="number" id="guests" name="guests" placeholder="guests" onChange={handleChange} value={values.guests || ''} />
                    <img style={{ width: "35px", marginBottom: "15px" }} src="baseline_favorite_black_24dp.png" alt="Heart Icon" />
                    <input style={{ width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px" }} type="text" id="foodpreferences" name="preferences" placeholder="Food preferences" onChange={handleChange} value={values.preferences || ''} />

                    {/* Error Messages */}
                    <div style={{ margin: "0 20% 20% 28%", position: "absolute" }}>
                        {errors.guests && (
                            <input disabled style={{ width: "130%", color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.guests} />
                        )}
                    </div>
                    <div >
                        {errors.preferences && (
                            <input disabled style={{ position: "absolute", width: "30%", color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.preferences} />
                        )}
                    </div>

                    <p style={{ marginTop: "35px" }}></p>

                    {/* Input Fields and Images */}
                    <img style={{ width: "35px", marginBottom: "35px" }} src=" baseline_edit_black_24dp.png" alt="Special Request Icon" />
                    <textarea style={{ height: "40px", width: "54%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px" }} type="text" id="specialrequests" name="requests" placeholder="Special Requests" onChange={handleChange} value={values.requests || ''} />

                    {/* Error Messages */}
                    <p></p>
                    {errors.requests && (
                        <input disabled style={{ width: "100%", color: "red", border: "none", background: "none", textAlign: "center", fontSize: "18px" }} value={errors.requests} />
                    )}

                    <p style={{ marginTop: "35px" }}></p>
                    {/* Submit Button */}
                    <hr style={{ borderTop: "2px solid lightgrey" }} />
                    <button title="reserveButton" type="submit" className="button1"><img style={{ marginBottom: "3px", width: "15px" }} src="baseline_send_black_24dp.png" /> RESERVE TABLE</button>

                </form>
            </div>
        </div>
    )
}

// Exports the ReservationForm Functional Component to be used/displayed by other pages.
export default ReservationForm;