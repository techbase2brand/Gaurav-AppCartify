import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Index({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <Header/>
            {children}
            <ToastContainer />
            <Footer />
        </div>
    );
}
