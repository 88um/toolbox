"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import Wrapper from "../../components/providers/Wrapper";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import AccountsTable from "../../components/user/AccountsTable";




interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = ({}) => {
  return (
    <Wrapper>
        <div className="flex flex-col w-full mt-4 p-6 ">
            <h1>

            </h1>
            <AccountsTable/>
         
        </div>
    </Wrapper>
  )
};

export default Accounts;
