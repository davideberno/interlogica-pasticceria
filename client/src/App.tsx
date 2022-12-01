import React, { FC, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { useAppSelector } from "hooks";
import { selectUserLoading, selectUserError } from "slices/auth";
import { selectIngredientsLoading, selectIngredientsError } from "slices/ingredients";
import { selectRecipesLoading, selectRecipesError } from "slices/recipes";
import { selectSweetsLoading, selectSweetsError } from "slices/sweets";

import { Navbar, Footer, ProtectedRoute, SweetsList, AdminPage, Snackbar, LoadingPage } from "components";

const App: FC = () => {
  const loadingUser = useAppSelector(selectUserLoading);
  const errorUser = useAppSelector(selectUserError);
  const loadingIngredients = useAppSelector(selectIngredientsLoading);
  const errorIngredients = useAppSelector(selectIngredientsError);
  const loadingRecipes = useAppSelector(selectRecipesLoading);
  const errorRecipes = useAppSelector(selectRecipesError);
  const loadingSweets = useAppSelector(selectSweetsLoading);
  const errorSweets = useAppSelector(selectSweetsError);

  const error = errorUser || errorIngredients || errorRecipes || errorSweets;
  const loading = loadingUser || loadingIngredients || loadingRecipes || loadingSweets;

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    if (error) setIsSnackbarOpen(true);
  }, [error]);

  return (
    <>
      <Snackbar open={isSnackbarOpen} message="TEXT" type="error" onClose={() => setIsSnackbarOpen(false)} />
      <LoadingPage open={loading} />
      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
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
    </>
  );
};

export default App;
