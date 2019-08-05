import React, { Component } from "react";
import GraphTree from "./GraphTree";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme();
console.log("THEME", theme);

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GraphTree />
            </ThemeProvider>
        );
    }
}

export default App;
