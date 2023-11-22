import { Outlet, Route, Routes } from "react-router-dom";
import { AnimalForm } from "../animals/AnimalForm";
import { AnimalList } from "../animals/AnimalList";
import AnimalDropdown from "../animals/AnimalDropdown";
import SuggestionBox from "../shared/SuggestionBox";
import { Account } from "../auth/Account";
import { FelineList } from "../animals/FelineList";
import { CanineList } from "../animals/CanineList";
import { ReptileList } from "../animals/ReptileList";
import "./ApplicationViews.css";

export const ApplicationViews = () => {
  const commonHomeContent = (
    <div className="home-container">
      <div className="home-content">
        <h1 className="title--main">For the Care of Animals</h1>
        <h4 className="second-title">Why Does This Page Exist?</h4>
        <br />
        <div>
          This site exists for those who are considering adopting a new member of the family and aren't sure what their care would look like, those curious about animals in general, and anyone who considers themselves an animal lover. Finding accurate advice about an animal's care can be frustrating and incredibly time-consuming. The goal of this page is to take the guess-work out of what is and isn't good care information for your current or future pets.
        </div>
        <br />
        <AnimalDropdown />
      </div>
      <div className="image-container">
        <img src="https://demo.phlox.pro/pet-shop/wp-content/uploads/sites/111/2019/06/group-of-pets-dog-cat-bird-reptile-rabbit-PVJ6BHU.png" alt="Animal Care" />
      </div>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={commonHomeContent} />
      <Route path="/home" element={commonHomeContent} />
      <Route path="animals/create" element={<AnimalForm />} />
      <Route path="/animals/" element={<AnimalList />} />
      <Route path="/felines" element={<FelineList />} />
      <Route path="/canines" element={<CanineList />} />
      <Route path="/reptiles" element={<ReptileList />} />
      <Route path="/suggestions" element={<SuggestionBox />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
};