import { configureStore } from '@reduxjs/toolkit';
import banner from './Banner'

export const store = configureStore({
    reducer :{
        banner : banner
    }
})