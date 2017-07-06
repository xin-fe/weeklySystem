import React from 'react'
import sendFetch from '../utils/fetch';
import {Table,Button} from 'antd'


export default class List extends React.Component {
	state = {

	}
	constructor (props) {
		super(props)
		this.columns = [
			{
				title:'序号',
				dataIndex:'id'
			},
			{
				title:'标题',
				dataIndex:'title',
				render:(text,record,index)=>{
					let url = `#/Detail?id=${this.state.id}`
					return <a href={url} >{record.title}</a>
				}
			},
			{
				title:'创建时间',
				dataIndex:'create_time'
			},
			{
				title:'操作',
				dataIndex:'',
				render:(text,record,index)=>{
					//导出
				}
			}
		]
	}
	componentWillMount () {
		sendFetch('api/findList', {},'get')
			.then(data=>{
				console.log(data)
			})
	}
	componentDidMount () {
		
	}
	render () {
		const { dataList } = this.state;
	    const columns = this.columns;
	    return (
	      <div>
	        <Button className="editable-add-btn" onClick={this.handleAdd}>添加</Button>
	        <Table bordered dataSource={dataList} columns={columns} />
	      </div>
	    );
	}
}