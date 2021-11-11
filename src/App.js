import React, {useEffect, useState } from 'react';
import './App.css';
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme, GlobalStyles, StyledApp} from './themes'
import Navbar from './components/Navbar';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Profile from './components/Profile';
import AdminPage from './components/AdminPage';
import { getCurrentUser, getData } from './components/axiosServices';
import Home from './components/Home';
import Testing from './components/Testing'

function App() {
  const [isLog, setIsLog] = useState(false);
  const [theme, setTheme] = useState('light');
  const [role, setRole] = useState('');
  
  function themeToggler(){
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  useEffect(()=>{
    if(getCurrentUser()){
      getData(1)
        .then(data => {
          setIsLog(data.active);
          setRole(data.role);
        })
    }
  },[isLog, role])

  return (
    <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Router>
        <Switch>
          <StyledApp>
              <Navbar 
                isLog={isLog} 
                setIsLog={setIsLog}
                role={role}
                setRole={setRole} 
                changeTheme={themeToggler} 
                />
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact><Login isLog={setIsLog}/></Route>
            {isLog && <Route path='/profile' exact component={Profile}/>}
            {isLog && <Route path='/profile/:id' exact component={Profile}/>}
            {role === 'ROLE_ADMIN' && <Route path='/admin-page' exact component={AdminPage}/>}
            <Route path='/test' component={Testing}/> 
          </StyledApp>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
