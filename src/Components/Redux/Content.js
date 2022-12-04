import { createSlice } from '@reduxjs/toolkit';
import page3 from '../../CONTENTLISTINGPAGE-PAGE3.json';


const Content = createSlice({
    name : page3.page.title,
    initialState : page3.page['content-items'],
    // reducers : {
    //     getBanner(state,action) {
    //         return state;
    //     }
    // }
});

export default Content.reducer