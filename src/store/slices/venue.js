// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    venues: []
};

const slice = createSlice({
    name: 'venue',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET VENUES
        getVenuesSuccess(state, action) {
            action.payload.forEach((element) => {});
            state.venues = action.payload;
        },

        setVenueStatusSuccess(state, action) {
            const { data, status } = action.payload;
            const venue = state.venues.find((venue) => venue.id === data.id);
            if (venue) {
                venue.status = status;
            }
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getVenues() {
    return async () => {
        try {
            const response = await axios.get('/api/venues');
            dispatch(slice.actions.getVenuesSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setVenueStatus(data, status) {
    return async () => {
        try {
            // const response = await axios.get('/api/venues');
            dispatch(slice.actions.setVenueStatusSuccess({ data, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addVenue(data, handleSuccess, handleError) {
    return async () => {
        try {
            const response = await axios.postForm('/api/venues', {
                ...data
            });

            handleSuccess(response);

            console.log(response);
            //   dispatch(slice.actions.addVenueSuccess(response.data));
        } catch (error) {
            handleError(error);

            dispatch(slice.actions.hasError(error));
        }
    };
}

export function updateVenue(data, handleSuccess, handleError) {
    return async () => {
        try {
            const response = await axios.postForm(`/api/venues/${data.id}`, {
                ...data
            });

            handleSuccess(response);

            console.log(response);
            //   dispatch(slice.actions.addVenueSuccess(response.data));
        } catch (error) {
            handleError(error);

            dispatch(slice.actions.hasError(error));
        }
    };
}
