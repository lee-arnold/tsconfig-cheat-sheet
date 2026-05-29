export interface Theme {
    choice?: 'dark' | 'light';
    // ^ note this does not include undefined
}
const theme: Theme = {};
theme.choice = undefined;
