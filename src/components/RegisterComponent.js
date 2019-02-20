import React, {Component} from "react";
import axios from 'axios';

export default class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name:"",
			firstname:"",
			pseudo:"",
			mail:"",
			passwd:""
		}

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
						<label>Mot de passe</label>
						<input type="text" onChange={this.onChangePasswd} value={this.state.passwd} className="form-control"/>
					</div>
					<div className="form-group">
						<input type="submit" value="Register" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		)
	}
}