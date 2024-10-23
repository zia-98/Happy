// src/App.js
import React from 'react';
import { BrowserRouter,Route,Link,Navigate} from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import Error from './components/Error';
const App = () => {
    return (
       <BrowserRouter>
       <Header>
       <Link to="/">Home</Link> |
       <Link to="Posts">Posts</Link> |
       <Link to="Profile">Profile</Link> |
       </Header>
        <Route>
        <Route path="Posts" element={<Posts/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="*" element={<Error/>}/>
        </Route>
       </BrowserRouter>         
    )
};
export default App;
