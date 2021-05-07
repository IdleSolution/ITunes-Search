import { render, screen, fireEvent } from '../../utils/testing'

import Albumspage from '../../components/Page/Albumspage';
import { albums } from "../../utils/dataTest/albums";

test("displays an error message when no albums were found", () => {
    render(<Albumspage />, { initialState:  {
        albums: {
            searched: true,
            albums: [],
            searchString: "test"
            }
    }})
    expect(screen.getByText("No results found for test")).not.toBe(null);
})

test("displays a heading with a given search string", () => {
    render(<Albumspage />, { initialState:  {
        albums: {
            searched: true,
            albums: albums,
            searchString: "test"
        }
    }})
    expect(screen.getByText('Search results for "test"')).not.toBe(null);
})


test("displays a name of each artist", () => {
    render(<Albumspage />, { initialState:  {
        albums: {
            searched: true,
            albums: albums,
            searchString: "test"
        }
    }})
    expect(screen.getByText("TobyMac")).not.toBe(null);
    expect(screen.getByText("Missy Elliott")).not.toBe(null);
})

test("displays a name of each album", () => {
    render(<Albumspage />, { initialState:  {
        albums: {
            searched: true,
            albums: albums,
            searchString: "test"
        }
    }})
    expect(screen.getByText("This Is Not a Test (Deluxe Edition)")).not.toBe(null);
    expect(screen.getByText("This Is Not a Test!")).not.toBe(null);
})

