import axios from 'axios';
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, {useEffect} from "react";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from "@material-ui/core/IconButton";
import FormHelperText from "@material-ui/core/FormHelperText";
import withStyles from "@material-ui/core/styles/withStyles";

var config = require("../config.json");

const validStyles = makeStyles({
	underline: {
		borderBottom: '2px solid green',
		'&:after': {
			// The MUI source seems to use this but it doesn't work
			borderBottom: '2px solid green',
		},
	} // a nested style rule
});

const useStyles = makeStyles(theme => ({
	form: {
		display : 'flex',
		flexDirection : 'column',
		alignItems: 'center',
	},
	label:{
		width : '80%',
	},
	success:{
		color : '#0a0',
		borderBottomColor : '#0a0'
	},
	submit:{
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3)
	},
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
	const [formActivate, setFormActivate] = React.useState({
		pseudo: false,
		mail: false,
		confirmmail: false,
		passwd: false,
		confirmpasswd: false,
	});
	const [formAlert, setFormAlert] = React.useState({
		pseudo: "",
		mail: "",
		confirmmail: "",
		passwd: "",
		confirmpasswd: "",
	});
	const classes = useStyles();

	const valid = validStyles();

	function onSubmit(e) {
		e.preventDefault();
		const user = {
			pseudo : form.pseudo,
			passwd : form.passwd,
			mail : form.mail,
		};

		//error checking
		if (!form.pseudo)
			setFormAlert({pseudo : "champs requis"});
		if (!form.mail)
			setFormAlert({mail : "champs requis"});

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
				if(err.response.data.pseudo && err.response.data.pseudo === "required")
					setFormAlert({pseudo: "Champs requis"});
				if(err.response.data.mail && err.response.data.mail === "required")
					setFormAlert({mail: "Champs requis"});
				alert(JSON.stringify(err.response.data));
				console.log(err);
				console.log(err.response.data)
			})
		;
	}

useEffect(() => {
		console.log("Trigger");
		console.log(formAlert);
		console.log(form);

			const res = {
				pseudo: "",
				mail: "",
				confirmmail: "",
				passwd: "",
				confirmpasswd: "",
			};

			for (const k in formAlert)
				if (form[k] === "" && formActivate[k])
					res[k] = "Champs requis";

			if (form.mail !== form.confirmmail && formActivate.confirmmail)
				res.confirmmail = "Adresses mail differentes";
			if (form.passwd !== form.confirmpasswd  && formActivate.confirmpasswd)
				res.confirmpasswd = "Mot de passe differents";
			if (!form.mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && formActivate.mail)
				res.mail = "Adresse mail incorrecte";

			setFormAlert(res);
	}, [form, formActivate]);

/*	useEffect(() => {
		if(!formAlert.activate)
			return;
		console.log("Trigger");
		console.log(formAlert);
		console.log(form);

		if (!form.mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && form.mail !== form.confirmmail)
			return setFormAlert({...formAlert, mail: "Adresse mail incorrecte", confirmmail : "Adresses mail differentes"});
		if (!form.mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
			return setFormAlert({...formAlert, mail: "Adresse mail incorrecte"});
		if (form.mail !== form.confirmmail)
			return setFormAlert({...formAlert, confirmmail : "Adresses mail differentes"});
		}, [form.mail, form.confirmmail]);*/

/*	const handleBlur = prop => e => {
		const res = {
			pseudo: "",
			mail: "",
			confirmmail: "",
			passwd: "",
			confirmpasswd: "",
		};

		if(prop === "mail" && !form.mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
			return setFormAlert({...formAlert, [prop]: "Adresse mail incorrecte"});
		if(prop === "mail" && form.mail !== form.confirmmail)
			return setFormAlert({...formAlert, ['confirmmail']: "Adresses mail differentes"});
		if(prop === "confirmmail" && form.mail !== form.confirmmail)
			return setFormAlert({...formAlert, [prop]: "Adresses mail differentes"});
		if(prop === "pseudo" && form.pseudo === "")
			return setFormAlert({...formAlert, [prop]: "Champs requis"});
		if(prop === "passwd" && form.passwd !== form.confirmpasswd)
			return setFormAlert({...formAlert, ['confirmpasswd']: "Mots de passe differents"});
		if(prop === "confirmpasswd" && form.passwd !== form.confirmpasswd)
			return setFormAlert({...formAlert, [prop]: "Mots de passe differents"});
		return setFormAlert(res);
	};*/

	const handleBlur = prop => () => {
		setFormActivate({...formActivate, [prop]: true});
	};

	const handleChange = prop => event => {
		setFormActivate({...formActivate, [prop]: true});
		setForm({ ...form, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setForm({ ...form, showPassword: !form.showPassword });
	};

	return(
		<div>
			<form className={classes.form} onSubmit={onSubmit}>
				<label className={classes.submit}>Inscription</label>
				<FormControl className={classes.label} error={formAlert.mail}>
					<InputLabel className={classes.success}>Mail</InputLabel>
					<Input classes={{
						underline: valid.underline,
					}} type="text" onChange={handleChange('mail')} onBlur={handleBlur('mail')} value={form.mail}/>
					<FormHelperText>{formAlert.mail} test</FormHelperText>
				</FormControl>
				<FormControl className={classes.label} error={formAlert.confirmmail}>
					<InputLabel>Confirmez Mail</InputLabel>
					<Input type="text" onChange={handleChange('confirmmail')} onBlur={handleBlur('confirmmail')} onPaste={(e) => {e.preventDefault()}} onDrop={(e) => {e.preventDefault()}} value={form.confirmmail}/>
					<FormHelperText>{formAlert.confirmmail}</FormHelperText>
				</FormControl>
				<FormControl className={classes.label} error={formAlert.pseudo}>
					<InputLabel>Pseudo</InputLabel>
					<Input type="text" onChange={handleChange('pseudo')} onBlur={handleBlur('pseudo')} value={form.pseudo}/>
					<FormHelperText>{formAlert.pseudo}</FormHelperText>
				</FormControl>
				<FormControl className={classes.label} error={formAlert.passwd}>
					<InputLabel>Mot de passe</InputLabel>
					<Input
						type={form.showPassword ? 'text' : 'password'}
						value={form.passwd}
						onChange={handleChange('passwd')}
						onBlur={handleBlur('passwd')}
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
					<FormHelperText>{formAlert.passwd}</FormHelperText>
				</FormControl>
				<FormControl className={classes.label} error={formAlert.confirmpasswd}>
					<InputLabel>Confirmez Mot de passe</InputLabel>
					<Input type='password' onChange={handleChange('confirmpasswd')} onBlur={handleBlur('confirmpasswd')} onPaste={(e) => {e.preventDefault()}} onDrop={(e) => {e.preventDefault()}} value={form.confirmpasswd}/>
					<FormHelperText>{formAlert.confirmpasswd}</FormHelperText>
				</FormControl>
				<FormControl className={classes.submit}>
					<input type="submit" value="Register" className="btn btn-primary"/>
				</FormControl>
			</form>
		</div>
	)
}