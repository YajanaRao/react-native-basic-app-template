import { atom } from "recoil";

export const userState = atom({
    key: 'userState', // unique ID (with respect to other atoms/selectors)
    default: {
        name: 'Yajana',
        dob: '29-04-1998'
    }, // default value (aka initial value)
});