import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import ReduxThunk from 'redux-thunk';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(ReduxThunk),
        compose(
            DevTools.instrument()
        )
    );
}
