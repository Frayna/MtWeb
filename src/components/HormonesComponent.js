import React, { Component } from 'react';
import AjoutProduitComponent from "./AjoutProduitComponent";
import axios from "axios";
import ProdTableRow from "./ProdTableRow";
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

const config = require("../config.json");

export default class HormonesComponent extends Component {

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

	componentDidMount(){
		const axiosConfig = {
			headers: {'Access-Control-Allow-Origin': '*'}
		};
		axios.get('https://' + config.server + ':4200/product',axiosConfig)
			.then(response => {
				this.setState({ products: response.data });
				this.setState({prodLongDesc: [this.state.products.length]})
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	showProd = () => {
		return this.state.products.map((object, i) => {
			return <ProdTableRow obj={object} key={i}/>;
		});
	};

	render() {
		return (
			<div>
				{/* SearchBar*/}
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
