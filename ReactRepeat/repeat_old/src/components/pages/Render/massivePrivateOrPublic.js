import About from '../AboutPage';
import Post from '../currentPost';
import Login from '../LoginPart/LoginPage';
import Posts from '../postsPage';
import Registration from '../RegistrationPart/Registration';

const aboutPath = '/about'
const postsPath = '/posts'
const loginPath = '/login'
const registrationPage = '/registration'

export const privateMassive = [
    {path: postsPath, element: <Posts />, exact: true},
    {path: aboutPath, element: <About />, exact: true},
    {path: '/posts/:id', element: <Post />, exact: true}
]

export const publicMassiveLogin = [
    {path: loginPath, element: <Login />, exact: true }
]

export const publicMassiveRegistration = [
    {path: registrationPage, element: <Registration />, exact: true}
]