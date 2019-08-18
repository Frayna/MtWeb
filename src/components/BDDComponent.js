import React, {useEffect} from 'react';

import AddFormElem from "./utilities/AddFormElem";
import FormElement from "./utilities/FormElement";
import Button from "@material-ui/core/Button";





export default function BDDComponent() {
	const [fields, setFields] = React.useState([]);


	useEffect(() => {
		console.log('effect', fields);
	}, [fields]);

	function f() {
		console.log(fields);
//		console.log(form);
	}

	function addField (field) {
		//	console.log(fields);
		const newFields = fields.slice();
		newFields.push(field);
		setFields(newFields);
		console.log('addfield',fields);
		//  	console.log(typeof fields);
		//	console.log(Array.isArray(fields));
	}
	return(<>
		<AddFormElem onSubmit={addField}/>
		<FormElement data={fields}/>
		<Button variant="contained" onClick={f}>Log BDDComp</Button>
	</>);
}
