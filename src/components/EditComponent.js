
import React, { Component } from 'react';
import AjoutProduitComponent from "./AjoutProduitComponent";
import axios from "axios";
import ProdTableRow from "./ProdTableRow";
import SearchBar from "./SearchBar";
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

export default class EditComponent extends Component {
	showAdd = false;
	constructor(props) {
		super(props);
		this.state = {
			addProductModal:false,
			products: [],
			prodLongDesc : [],
			prodKeys : [],
		}
        this.toggle = this.toggle.bind(this);
	}

    toggle() {
        this.setState({addProductModal: !this.state.addProductModal});
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

	showProd = () => {
		return this.state.products.map((object, i) => {
			console.log(object.descFull);
				return <ProdTableRow obj={object} key={i}/>;
		});
	};

	getScroll = () => {
		if(this.state.products.length){
			let arr = Object.keys(this.state.products[0]);
			console.table(arr);
			return arr;
		}
		return [];
	}
	// getOptions = () => {
	// 	let arr = []
	// 	if(this.state.products[0])
	// 		arr = Object.keys(this.state.products[0]);
	// 	console.log(arr);
	// 	return(arr.map((str) => {
	// 		return<option>{str}</option>;
	// 	}))
	// }

	render() {
		return (
			<div>
				{/* SearchBar*/}
				<SearchBar scrolldata={this.getScroll}/>
				{/*Products*/}
				<div style={{marginTop: 50}}>
						{this.showProd()}
				</div>
				<button onClick={this.toggle} className="btn btn-outline-primary" style={{float:"right"}}>+</button>
                <Modal isOpen={this.state.addProductModal} toggle={this.toggle} className="modal-dialog modal-lg">
					<ModalHeader toggle={this.toggle}>Add New Product</ModalHeader>
                    <ModalBody>
                        <AjoutProduitComponent/>
					</ModalBody>
                </Modal>
			</div>
		)
	}
}