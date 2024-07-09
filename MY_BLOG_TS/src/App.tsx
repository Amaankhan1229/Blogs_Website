import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import FourOFour from "./pages/FourOFour"
import RootLayout from "./Shared/Layouts/RootLayout"
import PostPage from "./pages/PostPage"

import ProtectedRoute from "./Shared/routes/ProtectedRoute"
import HomePage from "./pages/HomePage"
import DashboardPage from "./pages/DashBoardPage"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout><ProtectedRoute><HomePage/></ProtectedRoute></RootLayout>}></Route>
      <Route path="/dashboard" element={<RootLayout><ProtectedRoute><DashboardPage/></ProtectedRoute></RootLayout>}></Route>
      <Route path="/signUp" element={<RootLayout><SignUpPage/></RootLayout>}></Route>
      <Route path="/login" element={<RootLayout><LoginPage/></RootLayout>} ></Route>
      <Route path="/post" element={<RootLayout><PostPage/></RootLayout>} ></Route>
      <Route path="*" element={<RootLayout><FourOFour/></RootLayout>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
