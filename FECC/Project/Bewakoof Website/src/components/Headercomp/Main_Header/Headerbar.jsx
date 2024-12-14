import React, { useState, useContext } from "react";
import '../../../styles/Headerbar.css';
import { Header_Men_Women_MobileCover } from "./Header_Men_Women_Mobile";
import { MainHeaderLogo } from "./logo";
import { SearchBox } from "./SearchBox";

const Headerbar = () => {
  const menItems = [
    { label: 'Shirts', link: '#shirts' },
    { label: 'Pants', link: '#pants' },
    { label: 'Accessories', link: '#accessories' },
  ];

  const womenItems = [
    { label: 'Dresses', link: '#dresses' },
    { label: 'Tops', link: '#tops' },
    { label: 'Jewelry', link: '#jewelry' },
  ];

  const servicesItems = [
    { label: 'Web Design', link: '#web-design' },
    { label: 'SEO', link: '#seo' },
    { label: 'Digital Marketing', link: '#marketing' },
  ];

  return (
    <div className="Headerbar_box">
      <div id="leftside">
        <div id="logo_box"><MainHeaderLogo /></div>
        <div id="options_box">
          <ul>
            {/* Reusable Dropdowns for Men, Women, and Services */}
            <li>  <Header_Men_Women_MobileCover title="MEN" options={menItems} /></li>
            <li>   <Header_Men_Women_MobileCover title="WOMEN" options={womenItems} /></li>
            <li>   <Header_Men_Women_MobileCover title="MOBILE COVERS" options={servicesItems} /></li>
          </ul>
        </div>
      </div>

      <div id="rightside">
        <SearchBox/> <div id="seperatorVerticalBar"></div>
      </div>

    </div>
  );
}

export { Headerbar }