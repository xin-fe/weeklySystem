import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Router, HashRouter, Match, Route, Link, hashHistory} from 'react-router-dom';
import MainLayout from './layout/Layout.jsx';
import TableList from './components/TableList.jsx';




ReactDom.render((<HashRouter history={hashHistory}>
	<MainLayout>
		<Route path='/' component={TableList} />
	</MainLayout>
</HashRouter>),document.getElementById('root'))






