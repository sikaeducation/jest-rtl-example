import { render, screen, fireEvent } from '@testing-library/react';
import FormInput from "./FormInput"

// test('renders a supplied message', () => {
//   render(<FormInput label="Some Input" value="1" />);

//   const input = screen.getByLabelText("Some Input");
//   expect(input).toHaveValue("1");
// });

test('calls the setter function when changed', () => {
  const setterFunction = jest.fn()
  render(<FormInput label="Some Input" setValue={setterFunction} />);
  const input = screen.getByLabelText("Some Input");

  fireEvent.change(input, { target: { value: "2" }})

  expect(setterFunction).toHaveBeenCalledWith("2")
});

test('doesnt allow alpha characters', () => {
  const setterFunction = jest.fn()
  render(<FormInput label="Some Input" setValue={setterFunction} />);
  const input = screen.getByLabelText("Some Input");

  fireEvent.change(input, { target: { value: "a" }})

  expect(setterFunction).not.toHaveBeenCalledWith("a")
});
