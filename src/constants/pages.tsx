import { Home } from '../pages/Home/Home';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';

export const PAGES_CONFIG = {
  home: {
    path: '/',
    element: <Home />,
  },
  signIn: {
    path: '/signIn',
    element: <SignIn />,
  },
  signUp: {
    path: '/signUp',
    element: <SignUp />,
  },
};

export const ROUTES = Object.entries(PAGES_CONFIG).map(
  ([key, value]) => value
);
