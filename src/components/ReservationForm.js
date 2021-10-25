// Import statements for Libraries.
import react from 'react';

// Functional Component for the Reservation Form. 
function ReservationForm() {

    // Returns/Displays HTML elements on the page.
    return (
        <div>
            <div style={{ background: "linear-gradient(to left, Grey , DarkGrey)", height: "100px", textAlign: "left", padding: "30px 0 0 20%", fontWeight: "bold", fontSize: "30px" }}>Reservation</div>
        
            <div style={{margin: "50px 0 0 0"}} >
                <form>
                    <img style={{width: "35px", marginBottom: "15px"}} src="baseline_person_black_24dp.png" alt="Person Icon" />
                    <input style={{width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 20px 0 10px"}} type="text" id="name" name="name" placeholder="name" />
                    <img style={{width: "35px", marginBottom: "15px"}} src="baseline_check_box_black_24dp.png" alt="Meal Icon" />
                    <select style={{width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px" }} type="text" id="meal" name="meal" placeholder="meal"><option style={{color: "grey"}} hidden >meal</option><option style={{color: "black"}} value="au">Breakfast</option><option style={{color: "black"}} value="au">Lunch</option><option style={{color: "black"}} value="au">Dinner</option> </select>
                    
                    <p style={{marginTop: "35px"}}></p>

                    <img style={{width: "35px", marginBottom: "15px"}} src="round_calendar_today_black_24dp.png" alt="Date Icon" />
                    <input style={{width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 20px 0 5px"}} type="text" id="date" name="date" placeholder="date" />
                    <img style={{width: "35px", marginBottom: "15px"}} src="baseline_watch_later_black_24dp.png" alt="Time Icon" />
                    <input style={{width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px"}} type="text" id="time" name="time" placeholder="time" />
                
                    <p style={{marginTop: "35px"}}></p>

                    <img style={{width: "35px", marginBottom: "15px"}} src="baseline_people_black_24dp.png" alt="Guest Icon" />
                    <input style={{width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 20px 0 5px"}} type="text" id="guests" name="guests" placeholder="guests" />
                    <img style={{width: "35px", marginBottom: "15px"}} src="baseline_favorite_black_24dp.png" alt="Heart Icon" />
                    <input style={{width: "25%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px"}} type="text" id="foodpreferences" name="foodpreferences" placeholder="Food preferences" />
                    
                    <p></p>

                    <img style={{width: "35px", marginBottom: "35px"}} src=" baseline_edit_black_24dp.png" alt="Special Request Icon" />
                    <textarea style={{height: "40px", width: "54%", border: "none", borderBottom: "2px solid grey", margin: "20px 0 0 5px"}} type="text" id="specialrequests" name="specialrequests" placeholder="Special Requests" />

                    <p></p>
                    <hr style={{borderTop: "2px solid lightgrey"}} />
                    <button style={{float: "right", marginRight: "22%", fontWeight: "640", background: "linear-gradient(to left, Grey , DarkGrey)", border: "none", borderRadius: "50px", padding: "10px 20px", fontSize: "12px"}}><img style={{marginBottom: "3px", width: "15px"}} src="baseline_send_black_24dp.png" /> RESERVE TABLE</button>
                   
                </form>
            </div>

        </div>
    )
}

// Exports the ReservationForm Functional Component to be used/displayed by other pages.
export default ReservationForm;