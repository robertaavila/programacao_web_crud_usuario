import { makeStyles } from '../node_modules/@material-ui/core/styles';

const useStyles = makeStyles({
    w_100: {
        width: "100%"
    },
    mt_100: {
        marginTop: "100px"
    },
    mb_25: {
        marginBottom: "25px"
    },
    flex_center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    main_title: {
        color: "#3f51b5",
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontWeight: 700
    }
});

export default useStyles;