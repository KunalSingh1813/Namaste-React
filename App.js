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
 *Tree Shaking -- Removing unwanted code
 *
 *Transitive Dependencies
 */
// Create nested React Elements
import React from "react";
import ReactDOM from "react-dom/client";

//JSX => React.createElement => Object => HTML(DOM)
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

//React Component
//Functional --NEW
//Class Based component --OLD

//Name of component starts with capital letter--Good practice

//component composition --passing components as props to other components
const HeaderComponent = () => {
  return (
    <div>
    <Title/>
      {/*  {Title()}  */}
      <h2> Namaste React Functional component</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);
