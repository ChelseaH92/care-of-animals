import { Outlet, Route, Routes } from "react-router-dom"
import { AnimalForm } from "../animals/AnimalForm";
import { AnimalList } from "../animals/AnimalList";
import { AnimalDropdown } from "../animals/AnimalDropdown";
// import { MessageContainer } from "../Messages/MessageContainer"
// import { MessageEdit } from "../Messages/MessageEdit"
// import { ImageForm } from "../Images/ImageForm"
// import { Images } from "../Images/Image"


export const ApplicationViews = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="title--main">For the Care of Animals</h1>
              <div>Will Fill In Later</div>
              <div className="images-container"></div>
              <Outlet />
            </>
          }
        >
          {/* <Route path="profile" element={<Profile />} />
          <Route path="Messages/:messageId/edit" element={<MessageEdit />} />
          <Route path="messages" element={ <MessageContainer />} />
          <Route path="images" element={<Images />} /> */}
          
          <Route path="animals/create" element={ <AnimalForm /> } />
          <Route path="/animals/" element={<AnimalList/>} />
          <Route path="/" element={<AnimalDropdown />} />
        </Route>
      </Routes>
    );
  };