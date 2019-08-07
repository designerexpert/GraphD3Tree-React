import React, { Component } from "react";
import _ from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import { CheckCircle } from "@material-ui/icons";

export const styles = theme => {
    return {
        root: {
            width: "100%",
            height: "30vh",
            padding: theme.spacing.unit * 2
        },
        "@keyframes scaleBg": {
            from: {
                backgroundSize: "10%"
            },
            to: {
                backgroundSize: "100%"
            }
        },
        chipActive: {
            backgroundImage: `linear-gradient(90deg, rgba(200,200,255,1) 0%, rgba(100,100,255,1) 100%)`,
            backgroundSize: "10%",
            backgroundRepeat: "no-repeat",
            animation: "$scaleBg 5s forwards",
            color: "#fff",
            fontWeight: 700
        },
        chipIcon: {
            fill: "#fff"
        }
    };
};

class BoardChip extends Component {
    state = {};
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Chip
                    label="Test Chip Description"
                    avatar={<CheckCircle className={classes.chipIcon} />}
                    className={classes.chipActive}
                />
                <Chip
                    label="Test Chip Description"
                    avatar={<CheckCircle className={classes.chipIcon} />}
                    className={classes.chipActive}
                />
                <Chip
                    label="Test Chip Description"
                    avatar={<CheckCircle className={classes.chipIcon} />}
                    className={classes.chipActive}
                />
                <Chip
                    label="Test Chip Description"
                    avatar={<CheckCircle className={classes.chipIcon} />}
                    className={classes.chipActive}
                />
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(BoardChip);
