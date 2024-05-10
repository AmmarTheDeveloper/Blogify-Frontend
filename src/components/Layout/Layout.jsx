import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] pt-[72px]">
        <Navbar />

        <div className="flex-grow-[1] flex items-stretch w-[100%] py-[20px]">
          {children}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
