// third-party
import { createSlice } from '@reduxjs/toolkit';

// project imports
import axios from 'utils/axios';
import { dispatch } from '../index';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    categories: []
};

const slice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload;
        },

        // GET COUNTRIES
        getCategoriesSuccess(state, action) {
            action.payload.forEach((element) => {});
            state.categories = action.payload;
        },

        setCategoryStatusSuccess(state, action) {
            const { data, status } = action.payload;
            const category = state.categories.find((category) => category.id === data.id);
            if (category) {
                category.status = status;
            }
        }
    }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getCategories() {
    return async () => {
        try {
            const response = await axios.get('/api/categories');
            dispatch(slice.actions.getCategoriesSuccess(response.data.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function setCategoryStatus(data, status) {
    return async () => {
        try {
            // const response = await axios.get('/api/categories');
            dispatch(slice.actions.setCategoryStatusSuccess({ data, status }));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}

export function addCategory(category) {
    return async () => {
        try {
            const response = await axios.postForm('/api/categories', {
                ...category
            });

            console.log(response);
            //   dispatch(slice.actions.addEventSuccess(response.data));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    };
}
