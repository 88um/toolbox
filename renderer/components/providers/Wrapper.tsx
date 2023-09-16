
import Navbar from "../nav/Navbar";
import Sidebar from "../nav/Sidebar";
import { Toaster } from "../ui/toaster";
import ModalProvider from "./ModalProvider";




interface WrapperProps {
    children? : React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return (
    <div className="flex w-screen h-screen overflow-y-auto">
        <div className="hidden md:flex">
        <Sidebar />
        </div>
        <div className="flex flex-col w-full overflow-auto">
            <Navbar/>
            <Toaster/>
            <ModalProvider/>
            {children}
        </div>
    </div>
  );
};

export default Wrapper;