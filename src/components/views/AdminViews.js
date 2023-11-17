// import React, { useState } from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import AnimalForm from '../animals/AnimalForm';
// import AnimalList from '../animals/AnimalList';
// import AnimalDropdown from '../animals/AnimalDropdown';
// import SuggestionBox from '../shared/SuggestionBox';
// import Account from '../auth/Account';
// import AdminSuggestionViewer from './AdminSuggestionViewer'; // Import the new component

// export const ApplicationViews = () => {
//   const [isAdmin, setIsAdmin] = useState(true); // Set based on your authentication logic

//   return (
//     <Routes>
//       <Route path="/" element={<Outlet />}>
//         <Route
//           path="/home"
//           element={
//             <>
//               <h1 className="title--main">For the Care of Animals</h1>
//               <h4>Why Does This Page Exist?</h4>
//               <div>Take care of your damn animals</div>
//               <div className="images-container"></div>
//             </>
//           }
//         />
//         <Route path="animals/create" element={<AnimalForm />} />
//         <Route path="/animals/" element={<AnimalList />} />
//         <Route path="/felines" element={<FelineList />} />
//         <Route path="/canines" element={<CanineList />} />
//         <Route path="/reptiles" element={<ReptileList />} />
//         <Route path="/" element={<AnimalDropdown />} />

//         <Route path="/suggestions" element={<SuggestionBox isAdmin={isAdmin} />} />
//         <Route path="/account" element={<Account />} />
//         {isAdmin && <Route path="/admin-suggestions" element={<AdminSuggestionViewer />} />}
//       </Route>
//     </Routes>
//   );
// };
