import { render, screen, fireEvent } from '../../utils/testing'

import { songs } from "../../utils/dataTest/songs";
import AlbumModal from '../../components/Modal/AlbumModal/AlbumModal';

test("displays error when there was an error while loading songs", async () => {
    const setOpenModal = jest.fn((x: boolean) => 'test');
    render(<AlbumModal setOpenModal={setOpenModal} />, { initialState:  {
        errors: {
            error: "Something went wrong"
        }
    }})

    expect(screen.getByText("Something went wrong")).not.toBe(null);

})

test("displays all albums info", () => {
    const setOpenModal = jest.fn((x: boolean) => 'test');

    render(<AlbumModal setOpenModal={setOpenModal} />, { initialState:  {
        songs: {
            songs: songs
        }
    }})
    expect(screen.getByText("Coldplay")).not.toBe(null);
    expect(screen.getByText("Alternative")).not.toBe(null);
    expect(screen.getByText("USA")).not.toBe(null);
})


test("displays a list of songs", () => {
    const setOpenModal = jest.fn((x: boolean) => 'test');

    render(<AlbumModal setOpenModal={setOpenModal} />, { initialState:  {
        songs: {
            songs: songs
        }
    }})

    expect(screen.getByText("1. Politik")).not.toBe(null);
})