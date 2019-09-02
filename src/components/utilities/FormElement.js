import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing(1),
		flexDirection: 'column',
	},
	submit: {
		marginTop: 'auto',
		marginBottom: 'auto',
	}
}));

export default function FormElement (props) {
	const classes = useStyles();
	const [form,setForm] = React.useState();
	//	console.log("fields",fields);
	//fields.map(v => console.log(v));
	function f() {
		console.log(props.data);
//		console.log(form);
	}



	function makeElemFromType(type) {
		console.log(type);
		switch (type) {
			case 1 :
				return <Select>test</Select>;
			case 2 :
				return <Checkbox />;
			case 3 :
				return <TextField type="number"/>;
			case 4 :
				return <TextField/>;
		}
	}

	function buildField () {
		return(props.data.map(elem => {
			return (<div>
				<InputLabel>{elem.question}</InputLabel>
				{makeElemFromType(elem.type)}
			</div>)}));
	}

	return<>
		{buildField()}
		<Button variant="contained" className={classes.submit} onClick={f}>Log data</Button>
	</>
}