

import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
const { Header, Content, Footer } = Layout;


export default class Mainlayout extends React.Component {
	
	componentWillMount () {

	}
	componentDidMount () {

	}
	render () {
		return (
			<Layout className="layout">
			    <Header>
			        <div className="logo" style={{ width: 120,height: 31,background: "#333",borderRadius: 6,margin: "16px 24px 16px 0",float: "left" }} />
			        <Menu
				        theme="dark"
				        mode="horizontal"
				        defaultSelectedKeys={['1']}
				        style={{ lineHeight: '64px' }}
			        >
				        <Menu.Item key="1">nav 1</Menu.Item>
				        <Menu.Item key="2">nav 2</Menu.Item>
				        <Menu.Item key="3">nav 3</Menu.Item>
			        </Menu>
			    </Header>
			    <Content style={{ padding: '0 50px' }}>
			        <Breadcrumb style={{ margin: '12px 0' }}>

			        </Breadcrumb>
			        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{this.props.children}</div>
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      Ant Design ©2016 Created by Ant UED
			    </Footer>
		    </Layout>
		)
	}
}




