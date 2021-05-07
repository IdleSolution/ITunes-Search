import { render, screen, fireEvent } from '../../utils/testing'

import Albumspage from '../../components/Page/Albumspage';
import { albums } from "../../utils/dataTest/albums";

test("displays a modal with songs after clicking on the card", async () => {

    render(<Albumspage />, { initialState:  {
        albums: {
            searched: true,
            albums: albums,
            searchString: "test"
        }
    }})

    const card = screen.getByText("This Is Not a Test!");
    await fireEvent.click(card);
    expect(screen.getByText("Missy Elliott")).not.toBe(null);

})
