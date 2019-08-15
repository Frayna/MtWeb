import React, {Component} from "react";
import axios from 'axios';
var config = require("../config.json");

export default class RegisterComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			code : "",
		}
		this.onChangeCode = this.onChangeCode.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeCode(e) {
		this.setState({code: e.target.value});
	}
	onSubmit() {
		const code = this.state.code;
		axios.post("https://" + config.server + ":4200/validate", code)
			.then(res => {
				console.log(res.data);
				alert("Votre Compte est activé");
				this.setState({
					code: ""
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
			<>
				<div>
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Votre code : </label>
							<input type="text" onChange={this.onChangeCode} value={this.state.code} className="form-control"/>
							<input type="submit" value="Activer" className="btn btn-primary"/>
						</div>
					</form>
				</div>

			</>
		)};
}