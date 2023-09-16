"use client";

import Image from "next/image";

interface ProfileCardProps {
  pfp: string;
  name: string;
  username: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ pfp, name, username }) => {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div
            className="
                relative 
                inline-block 
                rounded-full 
                overflow-hidden
                h-9 
                w-9 
                md:h-11 
                md:w-11
            "
          >
            <Image src={pfp || "/images/logo.png"} alt="Avatar" layout='fill' className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col text-center font-semibold">
            <div className="text-lg">
                {name}
            </div>
            <div className="text-xs text-zinc-400 font-medium">
                @{username}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
