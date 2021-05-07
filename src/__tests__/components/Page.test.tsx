import { render, screen, fireEvent } from '../../utils/testing'

import Page from '../../components/Page/Page';

test("displays homepage after initial load", () => {
    render(<Page />);
    expect(screen.getByPlaceholderText("Type album's or author's name")).not.toBe(null);
})

test("displays loading page after search", () => {
    render(<Page />, { initialState:  {
        loading: {
            loading: true
        },
        albums: {
            searched: false
        }
    }})
    expect(screen.queryByPlaceholderText("Type album's or author's name")).toBe(null);
    expect(screen.getByText("Loading...")).not.toBe(null);
    
})

test("displays albums page after loading", () => {
    render(<Page />, { initialState:  {
        albums: {
            searched: true,
            albums: []
        }
    }})
    expect(screen.getByRole("albumspage")).not.toBe(null);
})


test("displays errors page when there was an error while searching albums", () => {
    render(<Page />, { initialState:  {
        albums: {
            searched: false,
            albums: [],
        },
        errors: {
            error: "Something went wrong"
        }
    }})
    expect(screen.getByText("Something went wrong")).not.toBe(null);
})