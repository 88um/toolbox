import { Circle } from "lucide-react";
import { useRouter } from "next/router";
import { BiSearch } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import useCurrentUser from "../../hooks/useCurrentUser";
import MobileSidebar from "./MobileSidebar";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const pathname = router.pathname.slice(1);
  const currentUser = useCurrentUser()
  if (!currentUser?.customer) {
    router.push('/login')
  }
  return (
    <div className="mx-auto p-4 flex items-center bg-white w-full shadow-sm">
      <div className="flex md:hidden pr-4">
        <MobileSidebar/>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="text-xl py-3 font-semibold capitalize">{pathname}</p>
        <div className="flex items-center space-x-5  text-gray-600">
          <div className="flex items-center space-x-5">
            <div>
              <BiSearch className="text-lg" />
            </div>
            <div className="relative">
              <BsBellFill className="text-gray-700" />
              <Circle className="h-2 w-2 absolute top-0 right-0 rounded-full border broder-white text-red-400 bg-red-400" />
            </div>
          </div>
          <div className="text-gray-400 font-thin">
            <div className="flex flex-col items-center justify-center">
              <p>|</p>
              <p className="-mt-4">|</p>
            </div>
          </div>
          <div>Joshua Solo</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
