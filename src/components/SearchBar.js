import React, { Component } from 'react';


export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			select: "TEST",
			input: "",
		}
		this.onChangeSelect = this.onChangeSelect.bind(this);
		this.onChangeInput = this.onChangeInput.bind(this);
	}
	onChangeSelect(e) {
		this.setState({select: e.target.value});
	}
	onChangeInput(e) {
		this.setState({input: e.target.value});
	}
	handleKeyPress = (e) => {
		if(e.key === 'Enter')
			console.log(this.state.select, this.state.input)

	}

	scroll = () => {
		// return "test";
		console.log(this.props.scrolldata)

		// return this.props.scrolldata.map((obj) => {
		// 	return <option>obj</option>
		// })
	}

	render(){
		return (
			<div>
				<div className="form-group">
					<select onChange={this.onChangeSelect} value={this.state.select}>
						{this.scroll()}
					</select>
					<input type="text" onKeyPress={this.handleKeyPress} onChange={this.onChangeInput}/>
				</div>
			</div>
		)
	}
}