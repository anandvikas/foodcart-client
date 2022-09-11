import SignUp from "../components/signup/signup";
import LoginUseform from "../components/login/loginUseform";
import SignupUseform from "../components/signup/signupUseform.js"
import ForgotPass from "../components/passwordReset/forgotPass";
import ResetPass from "../components/passwordReset/resetPass";
import Home from "../components/home/home";
import ViewCart from "../components/cart/view";
import ViewWishlist from "../components/wishlist/view";
import ViewOne from "../components/food/viewOne";
import ViewProfile from "../components/profile/viewProfile"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import CustSup from "../components/customerSupport/custSup.js"
import UserProfile from "../components/account/userProfile.js"

export const NonPrivateRoutes = [
  { path: "/", component: Home },
  { path: "/food/:id", component: ViewOne },
  { path: "/signup", component: SignupUseform },
  { path: "/login", component: LoginUseform },
  { path: "/forgotPassword", component: ForgotPass },
  { path: "/resetpassword", component: ResetPass },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  // { path: "*", component: Home },  
];

export const Privateroutes = [
  { path: "/", component: Home },
  { path: "/cart", component: ViewCart },
  { path: "/wishlist", component: ViewWishlist },
  { path: "/food/:id", component: ViewOne },
  { path: "/profile", component: ViewProfile },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/user/:id", component: UserProfile },
  { path: "/customer_support", component: CustSup },
  // { path: "*", component: Home },
];
