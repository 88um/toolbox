"use client";

import { ChevronRight, Edit, Edit2, Edit2Icon, Edit3, Play } from "lucide-react";
import {BsFillPlayFill, BsFillPauseFill, BsFillStopFill} from 'react-icons/bs'
import useAccountModal from "../../hooks/useAccountModal";
import Avatar from "../user/Avatar";

interface RunnerCardProps {
  username: string;
  pfp: string;
  status: string;
}

const RunnerCard: React.FC<RunnerCardProps> = ({ username, pfp, status }) => {
    const accountModal = useAccountModal()

    const onEdit = () =>{
        accountModal.setType('edit');
        accountModal.setAccount(null)
        accountModal.onOpen()
    }
  return (
    <div className="bg-white p-6 m-6 w-[300px] shadow-lg rounded-2xl relative text-gray-400 font-light">
        <div className="absolute top-3 right-3 bg-white text-gray-500 p-2 rounded-full cursor-pointer">
        <Edit/>
        </div>
      <div className="flex flex-col items-center ">
        <Avatar
          pfp={pfp}
          className="h-24 w-24  border-2 rounded-full border-green-400/70"
        />
        <div className="text-black font-medium">@{username}</div>
        <div className="capitalize">Status: {status}</div>
        <div className="flex w-full items-center justify-between pt-6 text-center">
          <div className="flex flex-col space-y-2">
            <div className="bg-blue-500/20 rounded-full p-2">
              <BsFillPlayFill className="text-blue-400" size={40}/>
            </div>
            <p>Start</p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="bg-yellow-500/20 rounded-full p-2">
              <BsFillPauseFill className="text-yellow-400" size={40} />
            </div>
            <p>Pause</p>
          </div>

          <div className="flex flex-col space-y-2">
            <div className="bg-red-500/20 rounded-full p-2">
              <BsFillStopFill className="text-red-400 " size={40}/>
            </div>
            <p>Stop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunnerCard;
