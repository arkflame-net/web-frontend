 import reducers from './reducers';
 import thunkMiddleware from 'redux-thunk';
 import { createStore, compose, applyMiddleware } from 'redux';

 const store = createStore(
     reducers,
     undefined,
     compose(applyMiddleware(thunkMiddleware))
 );

 export default store;