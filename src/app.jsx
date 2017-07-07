import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory} from 'react-router-dom';
import MainLayout from './layout/Layout.jsx';
import TableList from './components/TableList.jsx';
import List from './components/List.jsx';




ReactDom.render((<HashRouter history={hashHistory}>
	<MainLayout>
		<Route path='/Detail' component={TableList} />
		<Route path='/Home' component={List} />
	</MainLayout>
</HashRouter>),document.getElementById('root'))






