// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    events: []
};

const slice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET EVENTS
        getEventsSuccess(state, action) {
            action.payload.forEach((element) => {});
            state.events = action.payload;
        },

        setEventStatusSuccess(state, action) {
            const { data, status } = action.payload;
            const event = state.events.find((event) => event.id === data.id);
            if (event) {
                event.status = status;
            }
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getEvents() {
    return async () => {
        try {
            const response = await axios.get('/api/events');
            dispatch(slice.actions.getEventsSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
export function getEventsById(id) {
    return async () => {
        try {
            const response = await axios.get(`/api/events/${id}`);
            // TODO
            // dispatch(slice.actions.getEventsSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setEventStatus(data, status) {
    return async () => {
        try {
            // const response = await axios.get('/api/events');
            dispatch(slice.actions.setEventStatusSuccess({ data, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addEvent(data, handleSuccess, handleError) {
    return async () => {
        try {
            const response = await axios.postForm('/api/events', {
                ...data
            });

            handleSuccess(response);

            console.log(response);
            //   dispatch(slice.actions.addEventSuccess(response.data));
        } catch (error) {
            handleError(error);

            dispatch(slice.actions.hasError(error));
        }
    };
}

export function updateEvent(data, handleSuccess, handleError) {
    return async () => {
        try {
            const response = await axios.postForm(`/api/events/${data.id}`, {
                ...data
            });

            handleSuccess(response);

            console.log(response);
            //   dispatch(slice.actions.addEventSuccess(response.data));
        } catch (error) {
            handleError(error);

            dispatch(slice.actions.hasError(error));
        }
    };
}
