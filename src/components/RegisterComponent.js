import React, {Component} from "react";
import axios from 'axios';
var config = require("../config.json");

export default class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.onChangePseudo = this.onChangePseudo.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangeConfirmMail = this.onChangeConfirmMail.bind(this);
		this.onChangePasswd = this.onChangePasswd.bind(this);
		this.onChangeConfirmPasswd = this.onChangeConfirmPasswd.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.log = this.log.bind(this);

		this.state = {
			pseudo: "",
			mail: "",
			confirmmail: "",
			passwd: "",
			confirmpasswd: "",
			log:""
		}
	}
	onChangePseudo(e) {
		this.setState({pseudo: e.target.value});
	}
	onChangeMail(e) {
		this.setState({mail: e.target.value});
	}
	onChangeConfirmMail(e) {
		this.setState({confirmmail: e.target.value});
	}
	onChangePasswd(e) {
		this.setState({passwd: e.target.value});
	}
	onChangeConfirmPasswd(e) {
		this.setState({confirmpasswd: e.target.value});
	}
	log(e){
		console.log(e);
	}
	onSubmit(e) {
		e.preventDefault();
		const user = {
			pseudo : this.state.pseudo,
			passwd : this.state.passwd,
			mail : this.state.mail
		};

		axios.post("https://" + config.server + ":4200/user/add", user)
			.then(res => {
				console.log(res.data);
				alert("Merci de valider votre compte");
				this.setState({
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

	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Mail</label>
						<input type="text" onChange={this.onChangeMail} value={this.state.mail} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Confirmez Mail</label>
						<input type="text" onChange={this.onChangeConfirmMail} value={this.state.confirmmail} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Pseudo</label>
						<input type="text" onChange={this.onChangePseudo} value={this.state.pseudo} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Mot de passe</label>
						<input type="password" onChange={this.onChangePasswd} value={this.state.passwd} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Confirmez Mot de passe</label>
						<input type="password" onChange={this.onChangeConfirmPasswd} value={this.state.confirmpasswd} className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Register" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		)
	}
}