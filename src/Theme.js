import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
    primary: { main: '#2bfff4', contrastText: '#606060' },
    secondary: { main: '#56ff97', contrastText: '#636363' }
};
const themeName = "Cyan / Aqua Screamin' Green Camel";

export default createMuiTheme({ palette, themeName });