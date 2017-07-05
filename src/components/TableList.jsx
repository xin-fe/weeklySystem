import React from 'react'
import { Table, Input, Icon, Button, Popconfirm } from 'antd';



class EditableCell extends React.Component {
	state = {
		value:this.props.value,
		editable:false
	}
	handleChange = (e) =>{
		const value = e.target.value;
		this.setState({value})
	}
	check = () =>{
		this.setState({editable:false});
		if(this.props.onChange) {
			this.props.onChange(this.state.value);
		}
	}
	edit = () =>{
		this.setState({editable:true})
	}
	render () {
		const {value, editable} = this.state;
		return (
			<div  >
				
			</div>
		)
	}
}


export default class TableList extends React.Component {
	constructor (props) {
		super (props)

	}
	conponmentWillMount () {

	}
	componentDidMount () {

	}
	render () {
		return (
			
		)
	}
}


