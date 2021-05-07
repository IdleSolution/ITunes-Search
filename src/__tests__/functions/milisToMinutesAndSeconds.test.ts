import milisToMinutesAndSeconds from '../../utils/milisToMinutesAndSeconds';


test("converts miliseconds into string in a MM:SS format", () => {
    const miliseconds = 234823;
    const str = milisToMinutesAndSeconds(miliseconds);
    expect(str).toBe("03:54");
})

