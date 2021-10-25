// Import statements to import components and CSS.
import '../App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReservationForm from './ReservationForm';
import ConfirmationTable from './ConfirmationTable';
import formInfor from "./formInfor";
import MessageContext from "./MessageContext";

// Functional App Component, Main Component Used to Display.
function App() {
  const [submission, setSubmission] = useState(false);
  const [message, setMessage] = useState(null);
  const [formInfo, setFormInfo] = useState(null);
  // Below Variable is for attempting to pass useState Variables through Props but doesn't work So used useContext above for it to work
  const [formInfo2, setFormInfo2] = useState(null);

  const submission2 = async (value, formInfo2) => {
    await setSubmission(value)
    await setFormInfo2([formInfo2])
  }

  // Set message to null automatically after a period of time.
  useEffect(() => {
    if (message === null)
      return;

    // Time limit for message to display
    const id = setTimeout(() => setMessage(null), 7000);

    // When message changes clear the queued timeout function.
    return () => clearTimeout(id);
  }, [message]);

  // Returns HTML Elements to display on Page and Imported pages/components.
  return (
    <div className="App">

      {/* Use Context being used so thats why below statement is required  */}
      <formInfor.Provider value={{ formInfo, setFormInfo }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          {/* Displays the Reservation Form on the page by being imported */}
          <Router>
            <Switch>
              {/* {submission === true && */}
              <Route path="/ConfirmationTable">
                <ConfirmationTable {...formInfo} {...formInfo2} />
              </Route>
              {/* } */}
              <Route path="/">
                <ReservationForm submission2={submission2} />
              </Route>
            </Switch>
          </Router>
        </MessageContext.Provider>
      </formInfor.Provider>
    </div>
  );
}

// Exports the App Function.
export default App;
