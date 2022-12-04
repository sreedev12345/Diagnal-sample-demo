import { createSlice } from '@reduxjs/toolkit';
import page1 from '../../CONTENTLISTINGPAGE-PAGE1.json';


const banner = createSlice({
    name : page1.page.title,
    initialState : page1.page['content-items']
});

export const { getBanner } = banner.actions

export default banner.reducer
