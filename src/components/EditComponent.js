
import React, { Component } from 'react';
import AjoutProduitComponent from "./AjoutProduitComponent";
import axios from "axios";
import ProdTableRow from "./ProdTableRow";

export default class EditComponent extends Component {
	showAdd = false;
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			prodLongDesc : [],
			addShow : true
		}
	}
	// constructor()
	// {
	//     super();
	//     this.handleshow = this.handleshow().bind(this);
	// }
	// TODO Passer les produits en sous components

	componentDidMount(){
		axios.get('http://localhost:4200/product/list')
			.then(response => {
				this.setState({ products: response.data });
				this.setState({prodLongDesc: [this.state.products.length]})
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	handleshow = (id) => {
		let newArray = this.state.prodLongDesc.slice();
		if(newArray[id]){
			newArray[id] = !newArray[id];
			this.setState({prodLongDesc: newArray});
		}
		else {
			newArray[id] = true;
			this.setState({prodLongDesc: newArray});
		}
	};

	handleAdd = () => {
//		this.state.addShow = !this.state.addShow;
		this.setState({addShow: !this.state.addShow})
	};

	showProd = () => {
		return this.state.products.map((object, i) => {
			console.log(object.descFull);
				return <ProdTableRow obj={object} key={i}/>;
		});
	};

	render() {
		return (
			<div>
				<div style={{marginTop: 50}}>
						{this.showProd()}
				</div>
				<button onClick={this.handleAdd} className="btn btn-outline-primary" style={{float:"right"}}>+</button>
				<div hidden={this.state.addShow}>
					<AjoutProduitComponent/>
				</div>
			</div>
		)
	}
}