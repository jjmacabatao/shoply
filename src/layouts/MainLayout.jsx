import Footer from "../shared/components/Footer";
import NavBar from "../shared/components/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <NavBar title={"$hoply"} subTitle={"Shop smart. Live easy."}/>
      <main className="max-w-7xl mx-auto p-2 min-h-89 sm:p-4">{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;