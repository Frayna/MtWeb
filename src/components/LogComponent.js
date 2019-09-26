import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import RegisterComponent from "./RegisterComponent";
import LoginComponent from "./LoginComponent";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(theme => ({
	root: {
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	formContainer: {
		width: '50rem',
		justifyContent: 'space-evenly',
		display: 'flex',
		flexDirection: 'row',
	},
	form: {
		width : '50%',
	}
}));

export default function LogComponent (props) {
	const classes = useStyles();

	return(
		<div className={classes.root}>
			<Card className={classes.formContainer}>
				<div className={classes.form}>
					<LoginComponent/>
				</div>
				<div className={classes.form}>
					<RegisterComponent/>
				</div>
			</Card>
		</div>
	)
}