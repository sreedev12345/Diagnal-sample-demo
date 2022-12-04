import { createSlice } from '@reduxjs/toolkit';
import page2 from '../../CONTENTLISTINGPAGE-PAGE2.json';


const Image = createSlice({
    name : page2.page.title,
    initialState : page2.page['content-items'],
    // reducers : {
    //     getBanner(state,action) {
    //         return state;
    //     }
    // }
});

export default Image.reducer
