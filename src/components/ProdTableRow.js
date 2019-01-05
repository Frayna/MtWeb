import React, {Component} from 'react';
import axios from 'axios';

class ProdTableRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
		this.onShow = this.onShow.bind(this);
	}

	delete() {
		axios.get('http://localhost:4200/product/delete/' + this.props.obj._id)
			.then(console.log('Deleted'))
			.catch(err => console.log(err))
	}

	onShow() {
		if (this.props.show === true)
			this.props.show = true;
	}
	markup() {
		// transforme \n en <p>
		let narray = this.props.obj.descFull.split("\n");
		console.log(narray);
		return(narray.map(
		(object, i) => {
			return <p>{object}</p>;
		}));
	}

	render() {
		return (
			<div>
				<tr>
					<td>
						{this.props.obj.img}
					</td>
					<td>
						{this.props.obj.name}
					</td>
					<td>
						{this.props.obj.desc}
					</td>
					<td>
						<button className="btn btn-primary">Edit</button>
					</td>
					<td>
						<button onClick={this.delete} className="btn btn-danger">Delete</button>
					</td>
				</tr>
				<ul className="list-group">
					<li>{this.props.obj.molecule}</li>
					<li>{this.props.obj.principe}</li>
					<li>{this.props.obj.voie}</li>
					<li>{this.props.obj.dangerosite}</li>
					<li>{this.props.obj.vente}</li>
					<li>{this.props.obj.venteFR}</li>
					<li>{this.props.obj.wiki}</li>
					{this.markup()}
				</ul>
			</div>

		);
	}
}

export default ProdTableRow;