import React, { Component } from 'react';
import axios from 'axios';
import ProdTableRow from './ProdTableRow';

export default class DebugComponent extends Component {
	// TODO Faire des calls DB et les afficher
	constructor(props) {
		super(props);
		this.state = {products: []};
	}
	componentDidMount(){
		axios.get('http://localhost:4200/product/list')
			.then(response => {
				this.setState({ products: response.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	tabRow(){
		return this.state.products.map(function(object, i){
			console.table(object);
			return <ProdTableRow obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div className="container">
				<table className="table table-striped">
					<thead>
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>Desc</td>
					</tr>
					</thead>
					<tbody>
					{this.tabRow()}
					</tbody>
				</table>
			</div>
		);
	}
}