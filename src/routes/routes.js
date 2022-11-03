import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import PointsPage from "../pages/PointsPage/PointsPage";
import HowToOrderPage from "../pages/HowToOrderPage/HowToOrderPage";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import CartPage from "../pages/CartPage/CartPage";
import MyAccount from "../pages/MyAccount/MyAccount";
import RegisterForm from "../components/Forms/RegisterForm/RegisterForm";
import LoginForm from "../components/Forms/LoginForm/LoginForm";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ProductPage from "../pages/ProductPage/ProductPage";

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    index: true
  },
  {
    path: 'catalog',
    element: <CatalogPage />,
  },
  {
    path: 'catalog/product/:id',
    element: <ProductPage />,
  },
  {
    path: 'points',
    element: <PointsPage />,
  },
  {
    path: 'how-to-order',
    element: <HowToOrderPage />,
  },
  {
    path: 'favorites',
    element: <FavoritesPage />,
  },
  {
    path: 'cart',
    element: <CartPage />,
  },
  {
    path: 'my-account',
    element: <MyAccount />,
  },
  {
    path: 'register',
    element: <RegisterForm />,
  },
  {
    path: 'login',
    element: <LoginForm />,
  },
  {
    path: 'about-us',
    element: <PrivateRoute component={<AboutUs />} />,
  },
]