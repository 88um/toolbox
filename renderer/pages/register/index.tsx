"use client";

import { DollarSign } from "lucide-react";
import { FaToolbox } from "react-icons/fa";
import LoginForm from "../../components/forms/LoginForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-b from-[#31b6b1]  to-[#3b92d6]">
      <Card className="p-8 mx-auto rounded-xl bg-white">
        <CardHeader className="px-8 flex flex-row items-center justify-between space-y-5 pb-2 space-x-5">
          <div className="relative bg-gradient-to-b from-[#31b6b1]  to-[#3b92d6] rounded-full p-9">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white p-3">
              <div className="flex flex-col items-center justify-center space-y-1">
                <FaToolbox className="text-3xl"/>
                <p className="hidden text-[12px] font-neue text-center">ToolBox™️</p>
              </div>
            </div>
          </div>
          <CardTitle className="text-center ">Login To Continue</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
          
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;