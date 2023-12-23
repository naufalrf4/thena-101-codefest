import { Canister, query, text, update } from 'azle';

let name: {
    [key: string]: string;
} = {};

export default Canister({
    setNameTemp: query([text, text], text, (key, value) => {
        name[key] = value;
        return name[key];
    }),

    getName: query([text, text], text, (key) => {
        return name[key];
    }),

    setName: update([text, text], text, (key, value) => {
        name[key] = value;
        return name[key];
    }),
});