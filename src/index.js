import React from 'react';
import ReactDOM from 'react-dom';
import App from './todo/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './todo/reducer'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// console.log(reducer)
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
