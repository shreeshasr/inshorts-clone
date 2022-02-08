import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage } from '../Redux/NewsSlice';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import './Sidebar.scss';
const Sidebar = () => {
    const isEnglish = useSelector( state => state.newsReducers.isEnglish)
    const dispatch = useDispatch()
    const options = [
        {
            option: "All News"
        },
        {
            option: "India"
        },
        {
            option: "Business"
        },
        {
            option: "Sports"
        },
        {
            option: "World"
        },
        {
            option: "Politics"
        },
        {
            option: "Technology"
        },
        {
            option: "Startup"
        },
        {
            option: "Entertainment"
        },
        {
            option: "Miscellaneous"
        },
        {
            option: "Hatke"
        },
        {
            option: "Science"
        },
        {
            option: "Automobile"
        },
    ]
  return(
  <section className='sidebar'>
      <div className="languageButtons">
        <button className={(isEnglish ? 'languageActive' : 'languageInactive') + ' languageButton'} onClick={ () => dispatch(toggleLanguage())}>English</button>
        <button className={(!isEnglish ? 'languageActive' : 'languageInactive') + ' languageButton'} onClick={ () => dispatch(toggleLanguage())}>हिन्दी</button>
      </div>
      <hr/>
      <div className='categoriesHeading'>Categories</div>
      <div className="sidebarOptions">
      {
          options.map( (item) => {
              return <SidebarOptions option={item.option}/>
          })
      }
      </div>   
  </section>);
};

export default Sidebar;
