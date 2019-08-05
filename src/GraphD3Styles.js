export const styles = theme => {
    return {
        root: {
            width: "100%",
            height: "100vh"
        },
        chart: {
            width: `calc(100% - ${theme.spacing.unit * 2}px)`,
            height: `calc(100% - ${theme.spacing.unit * 2}px)`,
            padding: theme.spacing.unit,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid black",
            borderRadius: "4px",
            backgroundColor: theme.palette.grey[400]
        },
        chartPaths: {
            fill: "none",
            stroke: theme.palette.primary.dark
        },
        "@keyframes beatingPath": {
            from: { strokeWidth: "1px" },
            to: { strokeWidth: "4px" }
        },
        finishedPath: {
            fill: "none",
            stroke: "green"
        },
        inProgressPath: {
            fill: "none",
            stroke: "orange",
            animation: "$beatingPath",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationDuration: "0.4s"
        },
        waitingPath: {
            fill: "none",
            stroke: "red"
        },
        chartNodes: {
            fill: theme.palette.primary.light,
            stroke: theme.palette.primary.dark,
            transition: "all 0.2s ease-in",
            "&:hover": {
                fill: theme.palette.primary.main,
                cursor: "pointer",
                transition: "all 0.2s ease-in",
                transform: `scale(2)`
            }
        },
        chartLabels: {
            fill: "white",
            fontSize: "16px",
            fontWeight: 700,
            background: theme.palette.primary.dark,
            textShadow: `-1px -1px 3px ${
                theme.palette.primary.dark
            },1px -1px 3px ${theme.palette.primary.dark},-1px 1px 3px ${
                theme.palette.primary.dark
            },1px 1px 3px ${theme.palette.primary.dark}`
        },
        finishedNode: {
            fill: "green",
            stroke: theme.palette.primary.dark,
            transition: "all 0.2s ease-in",
            "&:hover": {
                cursor: "pointer",
                transition: "all 0.2s ease-in",
                transform: `scale(2)`
            }
        },
        "@keyframes beatingAnimation": {
            from: { fill: "orange", transform: `scale(1)` },
            to: { fill: "pink", transform: `scale(1.3)` }
        },
        inProgressNode: {
            animation: "$beatingAnimation",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationDuration: "0.4s",
            fill: "orange",
            stroke: theme.palette.primary.dark,
            transition: "all 0.2s ease-in",
            "&:hover": {
                cursor: "pointer",
                transition: "all 0.2s ease-in",
                transform: `scale(2)`
            }
        },
        waitingNode: {
            fill: "red",
            stroke: theme.palette.primary.dark,
            transition: "all 0.2s ease-in",
            "&:hover": {
                cursor: "pointer",
                transition: "all 0.2s ease-in",
                transform: `scale(2)`
            }
        }
    };
};
