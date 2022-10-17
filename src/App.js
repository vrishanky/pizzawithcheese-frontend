import { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ProfileScreen from "./ProfileScreen";
import RegistrationScreen from "./RegistrationScreen";
import ItineraryScreen from "./ItineraryScreen";
import LayoutRoute from './LayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';
import LoginScreen from './LoginScreen';
import {UserContext} from './UserContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme ({
   palette: {
      primary: {
        main: '#0A183E'
      },
      secondary: {
        main: '#e9c46a'

      },
      success: {
        main: '#e9c46a'

   }
  },

   typography: {
    fontFamily: "'Quicksand', san-serif",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700

  }


})

function App() {

  const { jsonwebtoken, updateUser } = useContext(UserContext);

  useEffect(
    function() {
      // fetch function
      fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/users/find`,{
        "method": 'POST',
        "headers": {
            //"Content-Type": "multipart/form-data"
            'Authorization' : `Bearer ${localStorage.getItem('jsonwebtoken')}`,
        }
      })
      // Convert the JSON string to an object
      .then(
          (response) => response.json()
      )

      // If Promise was successful
      .then(
          (response) => {              
              // Turn off preloader and reveal success message
              updateUser(
                {
                  "firstName": response.message.firstName,
                  "lastName": response.message.lastName,
                  "email": response.message.email,
                  "password": response.message.password,
                  "avatar": response.message.avatar,
                  "phone": response.message.phone,
                  "jsonwebtoken": jsonwebtoken || response.message.jsonwebtoken
                }
              )
          }
      )

      // If Promise was not fulfilled
      .catch(
          (e) => {
              console.log({e: e})
              // Turn off preloader and reveal error message
          }
      )
    }, []
  )

  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes>
            <Route element={<LayoutRoute/>}>
            <Route path="/" element={<HomeScreen/>} exact={true} />
            <Route path="/about" element={<AboutScreen/>} exact={true} />
            <Route path="/registration" element={<RegistrationScreen/>} exact={true} />
            <Route path="/login" element={<LoginScreen/>} exact={true} />
            </Route>
            <Route element={<PrivateLayoutRoute/>}>
            <Route path="/profile" element={<ProfileScreen/>} exact={true} />
            <Route path="/itinerary" element={<ItineraryScreen/>} exact={true} />
            </Route>
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;