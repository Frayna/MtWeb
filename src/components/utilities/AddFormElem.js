import React from "react";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";

const BootstrapInput = withStyles(theme => ({
	root: {
		'label + &': {
			marginTop: theme.spacing(3),
		},
	},
	input: {
		borderRadius: 4,
		position: 'relative',
		backgroundColor: theme.palette.background.paper,
		border: '1px solid #ced4da',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		'&:focus': {
			borderRadius: 4,
			borderColor: '#80bdff',
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
		},
	},
}))(InputBase);

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

export default function AddFormElem(props) {
	const classes = useStyles();
	const [type, setType] = React.useState(0);
	const [question, setQuestion] = React.useState('');

	function handleQuestionChange (e) {
		setQuestion(e.target.value);
	};

	function handleTypeChange(e) {
		setType(e.target.value);
	};

	function handleSubmit() {
		if(type && question) {
			props.onSubmit({type : type, question : question});
			setType(0);
			setQuestion('');
		}
	};


	return (
		<>
			<form className={classes.root} autoComplete="off">
				<FormControl className={classes.margin}>
					<TextField
						label="Question"
						value={question}
						onChange={handleQuestionChange}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</FormControl>
				<FormControl className={classes.margin}>
					<InputLabel>Type</InputLabel>
					<Select
						value={type}
						onChange={handleTypeChange}
						input={<BootstrapInput name="type"/>}
					>
						<MenuItem value={1}>Selection Unique</MenuItem>
						<MenuItem value={2}>Selection Multiple</MenuItem>
						<MenuItem value={3}>Nombre</MenuItem>
						<MenuItem value={4}>Texte</MenuItem>
					</Select>
				</FormControl>
				<FormControl className={classes.margin}>
					<Button variant="contained" className={classes.submit} onClick={handleSubmit}>Ajouter</Button>
				</FormControl>
			</form>


		</>
	)
}