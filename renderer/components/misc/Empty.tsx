"use client";

import { Lock } from "lucide-react";

interface EmptyProps {}

const Empty: React.FC<EmptyProps> = ({}) => {
  return (
    <div className="flex items-center justify-center h-3/5">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className=" text-black rounded-full p-4">
          <Lock size={40}/>
        </div>

        <p className="text-2xl font-semibold">This page is coming soon!!</p>
      </div>
    </div>
  );
};

export default Empty;
