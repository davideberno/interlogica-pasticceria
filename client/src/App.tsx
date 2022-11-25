import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import { Navbar } from "components";
import { Sweets } from "features";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ paddingY: 4 }}>
        <Routes>
          <Route path="/" element={<Sweets />} />
          <Route path="/admin" element={<div>Admin</div>} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
