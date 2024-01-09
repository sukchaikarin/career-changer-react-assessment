import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-light vh-100">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
