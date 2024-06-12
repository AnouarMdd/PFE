import React from "react";
import AddStationPopup from './AddStationPopup';
import './Hero.css';

const Hero = () => {
    
    return (
       
        <div className="dropdown-container">
           <form class="max-w-sm mx-auto">
  <label for="underline_select" class="sr-only">Underline select</label>
  <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Plage</option>
      <option value="1">Lala meriem</option>
      <option value="2">Ain diab</option>
      <option value="2">Tamaris</option>
  </select>
</form>
          <form class="max-w-sm mx-auto">
  <label for="underline_select" class="sr-only">Underline select</label>
  <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Station</option>
      <option value="1">Lala meriem</option>
      <option value="2">Ain diab1</option>
      <option value="3">Ain diab2</option>
      <option value="DE">Ain diab3</option>
  </select>
</form>
          <form class="max-w-sm mx-auto">
  <label for="underline_select" class="sr-only">Underline select</label>
  <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-black dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
      <option selected>Statut</option>
      <option value="1">Active</option>
      <option value="2">Inactive</option>
  </select>
</form>
         <AddStationPopup/>
        </div>
        
      );
    };
  
  export default Hero;