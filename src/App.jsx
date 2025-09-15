import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';
import HerokuLandingPage from './components/HerokuLandingPage';
import FoodStands from './components/FoodStands';
import LeavesPortal from "./components/LeavesPortal";
import LoginPage from "./page/login/LoginPage";
import BarangCrud from "./page/stuff/PageBarang";
import { MobileLayout } from "./layout/MobileLayout";
import PageUsers from "./page/users/PageUsers";

// Component wrapper agar AnimatePresence bisa bekerja dengan route
const AnimatedRoutes = ({ role }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {role === "admin" ? (
          <Route element={<MobileLayout role={role} />}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <HerokuLandingPage />
                </motion.div>
              }
            />
            <Route
              path="/food"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <FoodStands />
                </motion.div>
              }
            />
            <Route 
              path="/login"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <LoginPage />
                </motion.div>
              }/>
            <Route 
              path="/users"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <PageUsers />
                </motion.div>
              }/>
              <Route 
              path="/stuff"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <BarangCrud />
                </motion.div>
              }/>
          </Route>
        ) : (
          <Route element={<MobileLayout role={role} />}>
            <Route
              path="/autumnFest2025"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <HerokuLandingPage />
                </motion.div>
              }
            />
            <Route
              path="/food"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <FoodStands />
                </motion.div>
              }
            />
          </Route>
        )}
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const role = "admin"; // user / admin

  return (
    <BrowserRouter>

      <LeavesPortal/> 

      

      {/* Routes dengan animasi */}
      <AnimatedRoutes role={role} />
    </BrowserRouter>
  );
}

export default App;
