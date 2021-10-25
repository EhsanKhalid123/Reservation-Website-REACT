import {render, screen, fireEvent} from "@testing-library/react";
import ConfirmationTable from "./ConfirmationTable";
import formInfor from "./formInfor";

// Global data for tests.
let userInputData;

// Runs once before tests, here global test data is initalised.
beforeAll(() => {
    userInputData = formInfor;
})

// Runs before each test, here the ConfirmationTable Component is rendered and the container is stored.
beforeEach(() => {
    const utils = render(<ConfirmationTable />);
    container = utils.container;
})