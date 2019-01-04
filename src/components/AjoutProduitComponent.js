import React, {Component} from "react";
import axios from 'axios';
export default class AjoutProduitComponent extends Component {

	// state = {
	// 	nom:"androcur",
	// 	desc: "Anti-androgene",
	// 	molecule : "acetate de cyproterone",
	// 	pactif : "cyproterone",
	// 	danger : "Dangeureux",
	// 	wiki : "https://fr.wikipedia.org/wiki/Cyprotérone",
	// 	vente : true,
	// 	france : true,
	// 	show: false,
	// 	img: "https://picsum.photos/200",
	// 	fullDesc:   "-Effets Attendus : \n\n" +
	// 				"-Effets Indesirables : \n\n" +
	// 				"-Risques : \n\n" +
	// 				"-Description : "
	// }
	constructor(props) {
		super(props);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDesc = this.onChangeDesc.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			port: ''
		}
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value
		});
	}
	onChangeDesc(e) {
		this.setState({
			desc: e.target.value
		});
	}


	onSubmit(e) {
		e.preventDefault();
		const product = {
			name: this.state.name,
			desc: this.state.desc
		}
		axios.post('http://localhost:4200/product/add', product)
			.then(res => console.log(res.data));
		this.setState({
			name: '',
			desc: ''
		})
	}


	render() {
		return (
			<div style={{marginTop: 50}}>
				<h3>Add New Product</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Name:  </label>
						<input type="text" value={this.state.name} className="form-control" onChange={this.onChangeName}/>
					</div>
					<div className="form-group">
						<label>Desc: </label>
						<input type="text" value={this.state.desc} className="form-control" onChange={this.onChangeDesc}/>
					</div>
					<div className="form-group">
						<input type="submit" value="Add Product" className="btn btn-primary"/>
					</div>
				</form>
			</div>



		)
	}
}