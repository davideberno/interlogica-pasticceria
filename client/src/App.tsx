import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "components";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/admin" element={<div>Admin</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  );
};

export default App;
