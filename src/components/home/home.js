import React from "react";
import ViewAll from "../food/viewAll"
// import NavPrivate from "../navbar/navPrivate";
import Banner from "../banner/banner.js"
import ViewNew from "../food/viewNew";

const Home = () => {  
  return (
    <>
    <Banner/>
    <ViewAll/> 
    <ViewNew/>
    </>   
  );
};

export default Home;
