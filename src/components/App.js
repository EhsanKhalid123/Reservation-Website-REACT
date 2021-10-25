// Import statements to import components and CSS.
import '../App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReservationForm from './ReservationForm';
import ConfirmationTable from './ConfirmationTable';
import formInfor from "./formInfor";

// Functional App Component, Main Component Used to Display.
function App() {
  const [submission, setSubmission] = useState(false);
  const [formInfo, setFormInfo] = useState(null);
  // Below Variable is for attempting to pass useState Variables through Props but doesn't work So used useContext above for it to work
  const [formInfo2, setFormInfo2] = useState(null);

  const submission2 = async (value, formInfo2) => {
    await setSubmission(value)
    await setFormInfo2([formInfo2])
  }

  // Returns HTML Elements to display on Page and Imported pages/components.
  return (
    <div className="App">

      {/* Use Context being used so thats why below statement is required  */}
      <formInfor.Provider value={{ formInfo, setFormInfo }}>
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

      </formInfor.Provider>
    </div>
  );
}

// Exports the App Function.
export default App;
