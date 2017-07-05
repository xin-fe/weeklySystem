import React from 'react'
import { Table, Input, Icon, Button, Popconfirm,DatePicker } from 'antd';
import '../style/index.css'


class EditableCell extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            value: this.props.value,
            editable: false,
        }
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }

    check = () => {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}


export default class TableList extends React.Component {
	constructor (props) {
		super (props)
        this.columns = [
            {
                title:'序号',
                width:45,
                render:(text,record,index)=>{
                    return <span>{index}</span>
                }
            },{
                title:'姓名',
                dataIndex:'name',
                width:100,
                render:(text,record,index)=>{
                    return <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'name')}
                    />
                }
            },{
                title:'工作内容',

                dataIndex:'content',
                render:(text,record,index)=>{
                    return <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'content')}
                    />
                }
            },{
                title:'开始时间',
                width:170,
                dataIndex:'start_time',
                render:(text,record,index)=>{
                    return <DatePicker onChange={this.onCellChange(index, 'start_time')} />
                }
            },{
                title:'提测时间',
                width:170,
                dataIndex:'test_time',
                render:(text,record,index)=>{
                    return <DatePicker onChange={this.onCellChange(index, 'test_time')} />
                }
            },{
                title:'上线时间',
                width:170,
                dataIndex:'online_time',
                render:(text,record,index)=>{
                    return <DatePicker onChange={this.onCellChange(index, 'online_time')} />
                }
            },{
                title:'备注',
                width:150,
                dataIndex:'remark',
                render:(text,record,index)=>{
                    return <EditableCell
                        value={text}
                        onChange={this.onCellChange(index, 'remark')}
                    />
                }
            },{
                title:'操作',
                width:45,
                dataIndex:'',
                render:(text,record,index)=>{
                    return (
                        this.state.dataSource.length >= 1 ?
                            (
                                <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
                                    <a href="#">删除</a>
                                </Popconfirm>
                            ) : null
                    );
                }
            }
        ]
	}
	conponmentWillMount () {

	}
	componentDidMount () {

	}
	state = {
	    dataSource:[
            {
                key:'0',
                name:' ',
                content:' ',
                start_time:' ',
                test_time:' ',
                online_time:' ',
                remark:' '
            }
        ],
        count:1
    }
	onCellChange = (index, key) =>{
        return (value)=>{
            const dataSource = [...this.state.dataSource];
            dataSource[index][key] = value;
            this.setState({ dataSource })
        }
    }
    onDelete = (index) =>{
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index,1);
        this.setState({ dataSource })
    }
    handleAdd = () =>{
        const {count, dataSource} = this.state;
        const newData = {
            key:count,
            name:'',
            content:'',
            start_time:'',
            test_time:'',
            online_time:'',
            remark:''
        };
        this.setState({
            dataSource:[...dataSource, newData],
            count:count+1
        })
    }

	render () {
	    const {dataSource} = this.state;
        const columns = this.columns;

		return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd} >添加</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
		)
	}
}


