import React, { Component } from "react";
import * as d3 from "d3";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./GraphD3Styles";

// Array of Objects, each Object may have children, and parent properties.
const treeData = [
    {
        name: "Master Node - Level 0",
        parent: null,
        children: [
            {
                name: "Dependency 1 - Level 1",
                parent: "Master Node - Level 0",
                children: [
                    {
                        name: "Dependency 1.A - Level 2",
                        parent: "Dependency 1 - Level 1"
                    }
                ],
                children: [
                    {
                        name: "Dependency 1.B - Level 2",
                        parent: "Dependency 1 - Level 1"
                    }
                ]
            },
            {
                name: "Dependency 2 - Level 1",
                parent: "Master Node - Level 0"
            }
        ]
    }
];

class GraphD3 extends Component {
    state = {};
    componentDidMount() {
        this.generateTree();
    }
    generateTree = () => {
        const height = this.chartElement.clientHeight;
        const width = this.chartElement.clientWidth;
        const tree = d3.tree().size([height, width]);

        const root = treeData[0];
        root.x0 = `calc(100vh / 2)`;
        root.y0 = 0;
        const dataHierarchy = d3.hierarchy(root);
        console.log("hierarchy", dataHierarchy);

        const nodes = tree(dataHierarchy);
        const links = dataHierarchy.links(nodes);
        console.log("links", links);
        console.log("nodes", nodes);
    };
    render() {
        return (
            <div>
                TEST
                <svg
                    ref={el => (this.chartElement = el)}
                    width="calc(100vw - 100px)"
                    height="calc(100vh - 100px)"
                >
                    <g />
                </svg>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(GraphD3);
