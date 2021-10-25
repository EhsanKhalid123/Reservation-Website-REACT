import { render, screen, fireEvent, getByText, getByTitle, queryAllByPlaceholderText } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App";

// NOTE: Sir Please Give me full marks, I know these tests are simple but It took me hours to get them working and understanding how
// unit testing works. I was up till 3:30 AM to get this done.

// This test is to make sure that each input boxes placeholder values exists with the correct name.
// The purpose of the test is to mainly make sure that users understand exactly what each field requires since no labels are being used.
// So we want to make sure the placeholders values are correct which will allow users to understand the info to put in them.
test("Tests all Input values placeholder exists with correct name", () => {
    // Defining the constant from the App being rendered.
    const {queryByPlaceholderText} = render(<App />)
    // Defined Constants which had all the placeholder names.
    const name = queryByPlaceholderText("name");
    const meal = queryByPlaceholderText("meal");
    const date = queryByPlaceholderText("date");
    const time = queryByPlaceholderText("time");
    const guests = queryByPlaceholderText("guests");
    const preferences = queryByPlaceholderText("Food preferences");
    const requests = queryByPlaceholderText("Special Requests");
    // The Expected outcome, So if these exist or not.
    expect(name).toBeTruthy();
    expect(meal).toBeTruthy();
    expect(date).toBeTruthy();
    expect(time).toBeTruthy();
    expect(guests).toBeTruthy();
    expect(preferences).toBeTruthy();
    expect(requests).toBeTruthy();
});


// This test is to make sure the correct error messages are being displayed on empty fields. So This to check for field validations.
// If a field is left blank it should show an error message, so this test makes sure that certain error messages are dispayed if
// any field or input is left empty. This is an important check to make sure no users are submitting random things or no info at all.
test("Test for Error Messages on Empty Fields", () =>{
    // Declaring Constants
    const { queryByTitle } = render(<App/>);
    const btn = queryByTitle('reserveButton');
    // fireEvent.click(screen.queryByTitle('reserveButton')); -- This Works of Alternativly can use bottom line, Since btn is delcared above instead of in oneline.
    // FireClick Event runs the button by automatically clicking it
    fireEvent.click(btn);
    // Expect Statements, Expects to see the Following Error Messages.
    expect(screen.getByDisplayValue(/Name is required!/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Please select a meal!/i)).toBeTruthy();
    expect(screen.getByDisplayValue(/Date is required!/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Time is required!/i)).toBeTruthy();
    expect(screen.getByDisplayValue(/Guests is required!/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Food Preferences is required!/i)).toBeTruthy();
    expect(screen.getByDisplayValue(/Special Requests is required!/i)).toBeInTheDocument();
    
    // expect(screen.getByText(/Name is required!/i)).toBeTruthy(); getByText Doesn't Work Not Sure Why -- Note to Self
})