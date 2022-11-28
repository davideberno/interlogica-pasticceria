import React, { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Footer, SweetsList, LoginPage } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { checkAuth, selectUser } from "slices/auth";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<SweetsList />} />
        <Route path="/admin" element={user ? <div>Backoffice</div> : <LoginPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
