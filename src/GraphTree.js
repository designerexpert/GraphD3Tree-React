// https://github.com/jpb12/react-tree-graph
// https://reactjsexample.com/a-react-library-for-generating-a-tree-graph-from-data-using-d3/
// https://jpb12.github.io/tree-viewer/
import React, { Component } from "react";
import _ from "lodash";
import Tree from "react-tree-graph";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./GraphD3Styles";

// Objects may have children
let defaultTreeData = {
    name: "Master Node - Level 0",
    status: "waiting",
    children: [
        {
            name: "Dependency 1 - Level 1",
            status: "waiting",
            children: [
                {
                    name: "Dependency 1.A - Level 2",
                    status: "finished"
                },
                {
                    name: "Dependency 1.B - Level 2",
                    status: "waiting",
                    children: [
                        {
                            name: "Dependency 1.B.a - Level 3",
                            status: "in progress"
                        },
                        {
                            name: "Dependency 1.B.c - Level 3",
                            status: "in progress"
                        },
                        {
                            name: "Dependency 1.B.d - Level 3",
                            status: "finished"
                        }
                    ]
                }
            ]
        },
        {
            name: "Dependency 2 - Level 1",
            status: "waiting",
            children: [
                {
                    name: "Dependency 2.A - Level 2",
                    status: "in progress"
                },
                {
                    name: "Dependency 2.B - Level 2",
                    status: "finished"
                }
            ]
        }
    ]
};

class GraphTree extends Component {
    state = {
        height: 100,
        width: 100,
        treeData: defaultTreeData,
        selectedNode: "Master Node - Level 0"
    };

    componentDidMount() {
        this.updateDimensions();
        this.updateTree();
        window.addEventListener("resize", this.updateDimensions);
        // SIMULATE A LIVE STATUS BOARD....Updating Status for Each Node on a Timer...
        setTimeout(() => {
            this.updateNodeStatus("Dependency 1.B.a - Level 3", "finished");
        }, 5000);
        setTimeout(() => {
            this.updateNodeStatus("Dependency 1.B.c - Level 3", "finished");
        }, 11000);
        setTimeout(() => {
            this.updateNodeStatus("Dependency 1.B - Level 2", "in progress");
        }, 13000);
        setTimeout(() => {
            this.updateNodeStatus("Dependency 1.B - Level 2", "finished");
        }, 18000);
        setTimeout(() => {
            this.updateNodeStatus("Dependency 1 - Level 1", "in progress");
        }, 24000);
        setTimeout(() => {
            this.updateNodeStatus("Dependency 1 - Level 1", "finished");
        }, 29000);
        // SIMULATE A LIVE STATUS BOARD....Updating Status for Each Node on a Timer...
    }

    updateNodeStatus = (name, status) => {
        console.log("Updating Node Status", name, status);
        const treeData = _.cloneDeep(defaultTreeData);
        const foundNode =
            treeData.name === name
                ? treeData
                : this.findInTree(name, treeData.children);
        console.log("Updating Node Status Found Node", foundNode);
        if (foundNode) {
            foundNode.status = status;
        }
        defaultTreeData = treeData;
        this.updateTree(treeData);
    };

    findInTree = (name, items) => {
        let found;
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === name) {
                return items[i];
            } else if (Array.isArray(items[i].children)) {
                found = this.findInTree(name, items[i].children);
                if (found) {
                    return found;
                }
            }
        }
    };

    updateTree = (treeData = this.state.treeData) => {
        const { classes } = this.props;
        const tree = _.cloneDeep(treeData);
        switch (tree.status) {
            case "finished":
                tree.circleProps = {
                    className: classes.finishedNode,
                    onClick: this.chartClickHandler
                };
                tree.pathProps = {
                    className: classes.finishedPath
                };
                break;
            case "in progress":
                tree.circleProps = {
                    className: classes.inProgressNode,
                    onClick: this.chartClickHandler
                };
                tree.pathProps = {
                    className: classes.inProgressPath
                };
                break;
            case "waiting":
                tree.circleProps = {
                    className: classes.waitingNode,
                    onClick: this.chartClickHandler
                };
                tree.pathProps = {
                    className: classes.waitingPath
                };
                break;
        }
        console.log("THE TREE", tree);
        const recursiveUpdate = items => {
            for (let i = 0; i < items.length; i++) {
                switch (items[i].status) {
                    case "finished":
                        items[i].circleProps = {
                            className: classes.finishedNode,
                            onClick: this.chartClickHandler
                        };
                        items[i].pathProps = {
                            className: classes.finishedPath
                        };
                        break;
                    case "in progress":
                        items[i].circleProps = {
                            className: classes.inProgressNode,
                            onClick: this.chartClickHandler
                        };
                        items[i].pathProps = {
                            className: classes.inProgressPath
                        };
                        break;
                    case "waiting":
                        items[i].circleProps = {
                            className: classes.waitingNode,
                            onClick: this.chartClickHandler
                        };
                        items[i].pathProps = {
                            className: classes.waitingPath
                        };
                        break;
                }
                if (items[i].children && Array.isArray(items[i].children)) {
                    recursiveUpdate(items[i].children);
                }
            }
        };
        if (tree.children && Array.isArray(tree.children)) {
            recursiveUpdate(tree.children);
        }
        console.log("UPDATED TREE", tree);
        this.setState({ treeData: tree });
    };

    updateDimensions = () => {
        const height = this.chart.clientHeight;
        const width = this.chart.clientWidth;
        this.setState({ height, width });
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    chartClickHandler = (e, node) => {
        e.stopPropagation();
        console.log("CHART CLICK HANDLER NODE", node);
        if (node) {
            const treeData = this.findInTree(node, [this.state.treeData]);
            this.updateTree(treeData);
            this.setState({ selectedNode: node });
        }
    };

    svgClickHandler = e => {
        console.log("SVG CLICK HANDLER");
        this.updateTree(defaultTreeData);
        this.setState({
            selectedNode: "Master Node - Level 0"
        });
    };

    getChildren = node => {
        return node.children;
    };

    render() {
        console.log("STATE", this.state);
        console.log("PROPS", this.props);
        const { classes } = this.props;
        return (
            <div className={classes.root} ref={el => (this.chart = el)}>
                <Tree
                    data={this.state.treeData}
                    height={this.state.height}
                    width={this.state.width}
                    key={`${this.state.width}_${this.state.height}_chart`}
                    margins={{ bottom: 50, left: 50, right: 250, top: 50 }}
                    animated={true}
                    nodeRadius={12}
                    keyProp="name"
                    textProps={{ className: classes.chartLabels }}
                    pathProps={{ className: classes.chartPaths }}
                    svgProps={{ onClick: this.svgClickHandler }}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(GraphTree);
