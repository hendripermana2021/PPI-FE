import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';
import HerokuLandingPage from './components/HerokuLandingPage';
import FoodStands from './components/FoodStands';
import LeavesPortal from "./components/LeavesPortal";
import MobileLayout from "./layout/MobileLayout";
import PageNotFound from "./components/PageNotFound";
import LocationPage from "./components/LocationPage";
import ContactPage from "./components/ContactPage";

// Component wrapper agar AnimatePresence bisa bekerja dengan route
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MobileLayout />}>
          <Route
            path="/location"
            element={
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <LocationPage />
              </motion.div>
            }
          />
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
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
        </Route>
        <Route path="*" element={
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <PageNotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <LeavesPortal/> 
      {/* Routes dengan animasi */}
      <AnimatedRoutes  />
    </BrowserRouter>
  );
}

export default App;
