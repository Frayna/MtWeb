
import React, { Component } from 'react';
import AjoutProduitComponent from "./AjoutProduitComponent";
import axios from "axios";

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

	showProd = (prod, key) => {
	if(this.state.prodLongDesc[key]){

	}

	}
	render() {
		return (
			<div>
				<div style={{marginTop: 50}}>
					<ul className="list-group">
						{this.showProd()}
						{this.state.produits.map((prod , key) =>
							<li key={prod.nom} className="list-group-item">
								<div className="row">
									<h5 className="col-sm-3" style={{fontWeight:"bold", margin:0}}>{prod.nom.charAt(0).toUpperCase() + prod.nom.slice(1)}</h5>
									<p className="col-sm-8" style={{margin:0}}>{prod.desc}</p>
									<span style={{color:"#888", paddingLeft:2, textAlign:"right"}} className="col-sm-1"><button onClick={() => this.handleshow(key)}>{'\u25bc'}</button></span>
								</div>
								<div hidden={prod.show} className="row" style={{marginTop:20, paddingTop:10, borderTopStyle:"solid", borderTopWidth:1, borderTopColor:"#D2D2D2"}}>
									<img alt="" src={prod.img} className="col-sm-3"/>
									<p className="col-sm-9" style={{margin:0}}>{prod.fullDesc}</p>
								</div>
							</li>
						)}
					</ul>
				</div>
				<button onClick={this.handleAdd} className="btn btn-outline-primary" style={{float:"right"}}>+</button>
				<div hidden={this.state.addShow}>
					<AjoutProduitComponent/>
				</div>
			</div>
		)
	}
}