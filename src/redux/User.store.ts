import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const store = createSlice({
    name: 'user',
    initialState: {
        username: '',
    },
    reducers: {
        setUser: (state, action: PayloadAction<any>) => {
            state = action.payload;
            return state;
        }
    }
});

export const { setUser } = store.actions;
export default store.reducer;