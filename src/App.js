import React, { Component } from "react";
import GraphTree from "./GraphTree";
import BoardChip from "./BoardChip";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme();
console.log("THEME", theme);

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <GraphTree />
                    <BoardChip />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
