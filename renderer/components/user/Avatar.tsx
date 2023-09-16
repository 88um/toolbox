

import Image from "next/image";
import { cn } from "../../lib/utils";

interface AvatarProps {
  pfp : string;
  className? : string;
};

const Avatar: React.FC<AvatarProps> = ({ pfp, className = ""}) => {


  return (
    <div className="relative">
      <div className={cn("relative inline-block rounded-full overflow-hidden h-9 w-9", className)}>
        <Image
          layout='fill'
          src={pfp}
          alt="Avatar"
          className="object-cover rounded-full " 
        />
      </div>
      
    </div>
  );
}

export default Avatar;