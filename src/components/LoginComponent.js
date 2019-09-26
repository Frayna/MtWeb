import React from "react";
import clsx from 'clsx';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
	form: {
		display : 'flex',
		flexDirection : 'column',
		alignItems: 'center',
	},
	label:{
		width : '80%'
	},
	submit:{
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	}
}));

export default function LoginComponent (props) {
	const [form,setForm] = React.useState({mail : "", pass : "", showPassword : false});
	const classes = useStyles();
	function onSubmit() {

	}

	const handleChange = prop => event => {
		setForm({ ...form, [prop]: event.target.value });
	};
	const handleClickShowPassword = () => {
		setForm({ ...form, showPassword: !form.showPassword });
	};

	return<div>
		<form className={classes.form} onSubmit={onSubmit}>
			<label className={classes.submit}>Connection</label>
			<FormControl className={classes.label}>
				<InputLabel>Mail</InputLabel>
				<Input type="text" onChange={handleChange('mail')} value={form.mail}/>
			</FormControl>
			<FormControl className={classes.label}>
				<InputLabel>Password</InputLabel>
				<Input
					type={form.showPassword ? 'text' : 'password'}
					value={form.pass}
					onChange={handleChange('pass')}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
							>
								{form.showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<FormControl className={classes.submit}>
				<input type="submit" value="Log in" className="btn btn-primary"/>
			</FormControl>
		</form>
	</div>
}