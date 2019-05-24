import React, {Component} from "react";
import axios from 'axios';
var config = require("../config.json");

export default class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangePseudo = this.onChangePseudo.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangeConfirmMail = this.onChangeConfirmMail.bind(this);
		this.onChangePasswd = this.onChangePasswd.bind(this);
		this.onChangeConfirmPasswd = this.onChangeConfirmPasswd.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.log = this.log.bind(this);

		this.state = {
			name: "",
			firstname: "",
			pseudo: "",
			mail: "",
			confirmmail: "",
			passwd: "",
			confirmpasswd: "",
			log:""
		}
	}
	onChangeName(e) {
		this.setState({name: e.target.value});
	}
	onChangeFirstName(e) {
		this.setState({firstname: e.target.value});
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
		const crypto = require('crypto');
		const hash = crypto.createHash('sha256');
		console.log(hash.update('test').digest('hex'));
		const user = {
			name : this.state.name,
			firstname : this.state.firstname,
			pseudo : this.state.pseudo,
			mail : this.state.mail
		};

		axios.post("http://" + config.server + ":4200/user/add", user)
			.then(res => {
				console.log(res.data);
				this.setState({
					name: "",
					firstname: "",
					pseudo: "",
					mail: "",
					confirmmail: "",
					passwd: "",
					confirmpasswd: ""
				})
			})
			.catch(err => {
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
						<label>Nom</label>
						<input type="text" onChange={this.onChangeName} value={this.state.name} className="form-control"/>
					</div>

					<div className="form-group">
						<label>Prénom</label>
						<input type="text" onChange={this.onChangeFirstName} value={this.state.firstname} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Pseudo</label>
						<input type="text" onChange={this.onChangePseudo} value={this.state.pseudo} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Mail</label>
						<input type="text" onChange={this.onChangeMail} value={this.state.mail} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Confirmez Mail</label>
						<input type="text" onChange={this.onChangeConfirmMail} value={this.state.confirmmail} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Mot de passe</label>
						<input type="text" onChange={this.onChangePasswd} value={this.state.passwd} className="form-control"/>
					</div>
					<div className="form-group">
						<label>Confirmez Mot de passe</label>
						<input type="text" onChange={this.onChangeConfirmPasswd} value={this.state.confirmpasswd} className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Register" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		)
	}
}