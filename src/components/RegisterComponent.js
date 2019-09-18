import axios from 'axios';
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from "@material-ui/core/IconButton";
var config = require("../config.json");


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


export default function RegisterComponent (props) {
	const [form,setForm] = React.useState({
											  pseudo: "",
											  mail: "",
											  confirmmail: "",
											  passwd: "",
											  confirmpasswd: "",
											  showPassword:false,
										  });
	const classes = useStyles();

	function onSubmit(e) {
		e.preventDefault();
		const user = {
			pseudo : form.pseudo,
			passwd : form.passwd,
			mail : form.mail,
		};

		axios.post("https://" + config.server + ":4200/user", user)
			.then(res => {
				console.log(res.data);
				alert("Merci de valider votre compte");
				setForm({
					pseudo: "",
					mail: "",
					confirmmail: "",
					passwd: "",
					confirmpasswd: ""
				})
			})
			.catch(err => {
				alert(JSON.stringify(err.response.data));
				console.log(err);
				console.log(err.response.data)
			})
		;
	}

	const handleChange = prop => event => {
		setForm({ ...form, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setForm({ ...form, showPassword: !form.showPassword });
	};

	return(
			<div>
			<form className={classes.form} onSubmit={onSubmit}>
				<label className={classes.submit}>Inscription</label>
				<FormControl className={classes.label}>
				<InputLabel>Mail</InputLabel>
				<Input type="text" onChange={handleChange('mail')} value={form.mail}/>
			</FormControl>
				<FormControl className={classes.label}>
					<InputLabel>Confirmez Mail</InputLabel>
					<Input type="text" onChange={handleChange('confirmmail')} value={form.confirmmail}/>
				</FormControl>
				<FormControl className={classes.label}>
					<InputLabel>Pseudo</InputLabel>
					<Input type="text" onChange={handleChange('pseudo')} value={form.pseudo}/>
				</FormControl>
				<FormControl className={classes.label}>
					<InputLabel>Mot de passe</InputLabel>
					<Input
						type={form.showPassword ? 'text' : 'password'}
						value={form.passwd}
						onChange={handleChange('passwd')}
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
				<FormControl className={classes.label}>
					<InputLabel>Confirmez Mot de passe</InputLabel>
					<Input type='password' onChange={handleChange('confirmpasswd')} value={form.confirmpasswd}/>
				</FormControl>
				<FormControl className={classes.submit}>
					<input type="submit" value="Register" className="btn btn-primary"/>
				</FormControl>
			</form>
		</div>
	)
}