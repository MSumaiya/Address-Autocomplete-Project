import React from "react";
import "./App.css";
import AddressAutocompleteComponent from "./components/AddressAutocompleteComponent/AddressAutocompleteComponent";
import ProjectHeader from "./components/ProjectHeader/ProjectHeader";

export default function App() {
  return (
    <div>
      <ProjectHeader />
      <AddressAutocompleteComponent />
    </div>
  );
}
