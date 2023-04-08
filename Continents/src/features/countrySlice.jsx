import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState={
    region: [],
    mode:'light'
}


const countrySlice=createSlice({
    name:'country',
    initialState,
    reducers: {
        updateRegion:((state,action)=>{
            console.log(action)
            state.region=action.payload
        }),
        setMode:((state)=>{
            state.mode=   state.mode=== 'light' ? 'dark' :'light'
        })
    }

    
});

export const {updateRegion,setMode}=countrySlice.actions
export default countrySlice.reducer