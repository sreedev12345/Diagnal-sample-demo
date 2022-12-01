import { createSlice } from '@reduxjs/toolkit';
import page1 from '../../CONTENTLISTINGPAGE-PAGE1.json';

console.log(page1)

const banner = createSlice({
    name : page1.page.title,
    initialState : page1.page['content-items'],
    // reducers : {
    //     getBanner(state,action) {
    //         return state;
    //     }
    // }
});

export default banner.reducer
