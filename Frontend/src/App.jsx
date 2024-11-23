import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import MainLayout from "./layouts/MainLayout";
import UpdateProductPage from "./pages/UpdateProductPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/update-product/:id" element={<UpdateProductPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
