import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 300}));
store.dispatch(addExpense({description: 'Gas bill', amount: 200}));
store.dispatch(setTextFilter('bill'));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

store.dispatch(setTextFilter('water'));
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));