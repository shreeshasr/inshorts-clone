import React from 'react';
import SidebarOptions from '../SidebarOptions/SidebarOptions';
import './Sidebar.scss';
const Sidebar = () => {
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
        <button className='languageButton'>English</button>
        <button className='languageButton'>हिन्दी</button>
      </div>
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
