import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        // actions
        setUser: (state, action) => {
            console.log('User data being set in Redux:', action.payload);
            state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;