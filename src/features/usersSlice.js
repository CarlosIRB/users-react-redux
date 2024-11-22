import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: [
        {
            id: "1",
            name: "Carlos Ismael Ramirez Bello",
            user: "carlos",
            password: "123",
            permissions: ["analize"],
        }
    ],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        deleteUser(state, action) {
            return state.filter(user => user.id !== action.payload);
        },
    },
});

export const { addUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
