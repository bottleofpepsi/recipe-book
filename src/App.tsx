import React from "react";
import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "@/components/ErrorBoundary";
import ErrorPage from "@/pages/ErrorPage";
import RecipeInfoPage from "@/pages/RecipeInfoPage";
import SearchPage from "@/pages/SearchPage";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ErrorBoundary>
                        <SearchPage />
                    </ErrorBoundary>
                }
                errorElement={<ErrorPage />}
            />
            <Route
                path="/:id"
                element={
                    <ErrorBoundary>
                        <RecipeInfoPage />
                    </ErrorBoundary>
                }
                errorElement={<ErrorPage />}
            />
            <Route path="/error" element={<ErrorPage />} />
        </Routes>
    );
}

export default App;
