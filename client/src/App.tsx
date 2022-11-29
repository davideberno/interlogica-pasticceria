import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import { Navbar, Footer, ProtectedRoute, SweetsList, AdminPage } from "components";

const App: FC = () => {
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
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
