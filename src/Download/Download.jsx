import React from 'react';
import appStore from "../images/appstore.png"
import playStore from "../images/playstore.png"
import './Download.scss'
const Download = () => {
  return(
    <section className='downloadForPhone'>
        <span>For the best experience use inshorts app on your smartphone</span>
        <div>
            <img src={appStore} alt="appStore"/>
            <img src={playStore} alt="playStore"/>
        </div>
    </section>
  );
};

export default Download;
