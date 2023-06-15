import { createSlice } from '@reduxjs/toolkit';

const initialValues = {
    id: null,
    email: null,
    nome: null,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.nome = action.payload.nome
        }
    }
})

export const { reducerSetLogin } = loginSlice.actions

export default loginSlice.reducer