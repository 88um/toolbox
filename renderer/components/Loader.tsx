
import { PuffLoader, PacmanLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="
      h-[100vh]
      bg-gradient-to-b from-[#31b6b1]  to-[#3b92d6]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <div className="">
        <PacmanLoader size={100} color="white" />
      </div>
      <div className="hidden ">
      <PuffLoader size={100} color={'black'} />
      </div>
      
    </div>
  );
};

export default Loader;