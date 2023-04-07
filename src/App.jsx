import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SinglePage from "./pages/SinglePage";
import AdminLogin from "./pages/adminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { Footer, Navbar } from "./components";
import AdminSidebar from "./components/AdminSidebar";
import AdminBlog from "./pages/AdminBlog";
import AdminCities from "./pages/AdminCities";
import AdminEvents from "./pages/AdminEvents";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/single" element={<SinglePage />}>
          <Route path=":id" element={<SinglePage />} />
        </Route>

        <Route path="/admin" element={<AdminLogin />} />
        
        
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/cities" element={<AdminCities />} />
        <Route path="/admin/events" element={<AdminEvents />} />  

      </Routes>
      <Footer />
    </>
  );
};

export default App;
