import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterNews } from '../Redux/NewsSlice';
import './SidebarOptions.scss'
function SidebarOptions({option}) {
    const isEnglish = useSelector( (state) => state.newsReducers.isEnglish)
    const dispatch = useDispatch()
    const [selectedCategory, setSelectedCategory] = useState("");
    let language = isEnglish ? "English" : "Hindi"
    const changeTheCategory = (option) => {
        setSelectedCategory(option)
    }
    
    return(
        <div className={(selectedCategory === option ? "sidebarOption Active" : "sidebarOption")} onClick={ () => { dispatch(filterNews({category:option, language})); changeTheCategory(option) }}>{option}</div>
    );
}

export default SidebarOptions;
