// import { UserViews } from "./UserViews"
// import { AdminViews } from "./AdminViews"

// export const ApplicationViews = () => {

//     const localUser = localStorage.getItem("login_user")
//     const localUserObject = JSON.parse(localUser)

//     if (localUserObject.isAdmin) {
//         return <AdminViews />
//     }
//     else {
//         return <UserViews />
//     }
// }

import { Outlet, Route, Routes } from "react-router-dom"
import { AnimalForm } from "../animals/AnimalForm";
import { AnimalList } from "../animals/AnimalList";
import  AnimalDropdown from "../animals/AnimalDropdown";
import SuggestionBox from "../shared/SuggestionBox";
import { Account } from "../auth/Account";
import { FelineList } from "../animals/FelineList";
import { CanineList } from "../animals/CanineList";
import { ReptileList } from "../animals/ReptileList";

export const ApplicationViews = () => {
    return (
      <Routes>
        <Route
        path="/"
        element={<Outlet />}
        >  
        <Route
          path="/home"
          element={
            <>
              <h1 className="title--main">For the Care of Animals</h1>
              <h4>Why Does This Page Exist?</h4>
              <div>Take care of your damn animals</div>
              <div className="images-container"></div>
              <br />
              <AnimalDropdown />
            </>
            
          }
        />
          <Route path="animals/create" element={ <AnimalForm /> } />
          <Route path="/animals/" element={<AnimalList/>} />
          <Route path="/felines" element={<FelineList />} />
          <Route path="/canines" element={<CanineList />} />
          <Route path="/reptiles" element={<ReptileList />} />
          <Route path="/suggestions" element={<SuggestionBox />} />
          <Route path="/account" element={<Account />} />

        </Route>
      </Routes>
    );
  };