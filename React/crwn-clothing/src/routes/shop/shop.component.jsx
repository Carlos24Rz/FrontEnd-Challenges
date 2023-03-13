import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import './shop.style.scss'

import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
          const categories = await getCategoriesAndDocument();
          dispatch(setCategories(categories));
        };
    
    
        getCategoriesMap();
      }, []);


    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category />}/>
        </Routes>
       
    );
};

export default Shop;