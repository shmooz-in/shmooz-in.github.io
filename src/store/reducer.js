// third-party
import { combineReducers } from 'redux';

// project imports
import snackbarReducer from './slices/snackbar';
import menuReducer from './slices/menu';
import chatReducer from './slices/chat';
import demographicsReducer from './slices/demographics';
import categoryReducer from './slices/category';
import eventReducer from './slices/event';
import venueReducer from './slices/venue';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    snackbar: snackbarReducer,
    menu: menuReducer,
    chat: chatReducer,
    demographics: demographicsReducer,
    category: categoryReducer,
    event: eventReducer,
    venue: venueReducer
});

export default reducer;
