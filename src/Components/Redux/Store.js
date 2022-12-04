import { configureStore } from '@reduxjs/toolkit';
import banner from './Banner';
import Image from './Image';
import Content from './Content'
import { getBanner } from './Banner'

export const store = configureStore({
    reducer :{
        banner : banner,
        image : Image,
        content : Content,
        getBanner : getBanner
    }
})