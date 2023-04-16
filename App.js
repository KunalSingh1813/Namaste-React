/*Parcel does all these below mentioned things
*
*Created A server
*HMR  - Hot Module Replacement
*File Watcher algorithm -> C++
*Bundling
*Minify
*Cleaning our code
*Dev and production build
*superfast build algorithm
*image optimization also
*caching while development
*Compatible with older version of browser
*HTTPS on dev
*port number
*consistent hashing algorithm
*
*
*Transitive Dependencies
*/
// Create nested React Elements
import React from "react";
import  ReactDOM  from "react-dom/client";
const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading 1 from parcel"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "Heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1] 
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);