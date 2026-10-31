import {
	applyMiddleware,
	combineReducers,
	compose,
	legacy_createStore as creatStore,
} from 'redux';
import {
	appReducer,
	postReducer,
	postsReducer,
	userReducer,
	usersReducer,
} from './reducers';
import { thunk } from 'redux-thunk';

const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	post: postReducer,
	posts: postsReducer,
});

export const store = creatStore(reducer, composeEnhansers(applyMiddleware(thunk)));
