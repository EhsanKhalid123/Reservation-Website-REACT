// Import statements to import components and CSS.
import '../App.css';
import ReservationForm from './ReservationForm';

// Functional App Component, Main Component Used to Display.
function App() {

  // Returns HTML Elements to display on Page and Imported pages/components.
  return (
    <div className="App">

    {/* Displays the Reservation Form on the page by being imported */}
    <ReservationForm/>

    </div>
  );
}

// Exports the App Function.
export default App;
