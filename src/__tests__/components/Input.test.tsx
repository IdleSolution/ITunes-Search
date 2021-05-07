import { render, screen, fireEvent } from '../../utils/testing'

import App from "../../App";
import Form from '../../components/Form/Form';

test("always loads on homepage", () => {
    render(<App />)
    expect(screen.getByPlaceholderText("Type album's or author's name")).not.toBe(null);
})

test("has correct value", () => {
    const form = render(<Form />);
    const input = form.getByRole('input') as HTMLInputElement;
    fireEvent.change(input, { target: {value: 'coldplay'} });
    expect(input.value).toBe('coldplay');
})
