// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    states: [],
    countries: [],
    cities: []
};

const slice = createSlice({
    name: 'demographics',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET COUNTRIES
        getCountriesSuccess(state, action) {
            action.payload.forEach((element) => {
                // TODO temporary akash
                if (element.numeric_code !== '356') {
                    element.status = false;
                }
            });
            state.countries = action.payload;
        },

        // GET STATES
        getStatesSuccess(state, action) {
            action.payload.forEach((element) => {
                // TODO temporary akash
                if (element.state_code !== 'GJ') {
                    element.status = false;
                }
            });
            state.states = action.payload;
        },

        getCitiesSuccess(state, action) {
            action.payload.forEach((element) => {
                // TODO temporary akash
                if (element.name !== 'Surat') {
                    element.status = false;
                }
            });
            state.cities = action.payload;
        },

        setCountryStatusSuccess(state, action) {
            const { data, status } = action.payload;
            const country = state.countries.find((country) => country.id === data.id);
            if (country) {
                country.status = status;
            }
            // state.countries = action.payload;
        },

        setStateStatusSuccess(state, action) {
            const { data, status } = action.payload;
            const stateLocal = state.states.find((stateLocal) => stateLocal.id === data.id);
            if (stateLocal) {
                stateLocal.status = status;
            }
            // state.countries = action.payload;
        },

        setCityStatusSuccess(state, action) {
            const { data, status } = action.payload;
            const city = state.cities.find((city) => city.id === data.id);
            if (city) {
                city.status = status;
            }
            // state.countries = action.payload;
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getCountries() {
    return async () => {
        try {
            const response = await axios.get('/api/countries');
            dispatch(slice.actions.getCountriesSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getStatesLocal(countryId) {
    return async () => {
        try {
            const params = {
                country_id: countryId
            };
            const response = await axios.get('/api/states', { params });
            dispatch(slice.actions.getStatesSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function getCities(stateId) {
    return async () => {
        try {
            const params = {
                state_id: stateId
            };
            const response = await axios.get('/api/cities', { params });
            dispatch(slice.actions.getCitiesSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setCountryStatus(data, status) {
    return async () => {
        try {
            // const response = await axios.get('/api/countries');
            dispatch(slice.actions.setCountryStatusSuccess({ data, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setStateStatus(data, status) {
    return async () => {
        try {
            // const response = await axios.get('/api/countries');
            dispatch(slice.actions.setStateStatusSuccess({ data, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setCityStatus(data, status) {
    return async () => {
        try {
            // const response = await axios.get('/api/countries');
            dispatch(slice.actions.setCityStatusSuccess({ data, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
