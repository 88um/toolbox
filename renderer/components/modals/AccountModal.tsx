'use client';

import { User } from "lucide-react";
import { useRouter } from "next/router";
import { BsTicketDetailed } from "react-icons/bs";
import useAccountModal from "../../hooks/useAccountModal";
import IGLoginForm from "../forms/IGLoginForm";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";
import { useToast } from "../ui/use-toast";

interface AccountModalProps {

}

const AccountModal: React.FC<AccountModalProps> = ({}) => {
    const accmodal = useAccountModal()
    const router = useRouter()
    const {toast} = useToast()



  return (
    <div>
        <Modal onClose={accmodal.onClose} isOpen={accmodal.isOpen } title={accmodal.account ? accmodal.account.username : "Add an Account"} description={accmodal.account ? `Edit details for ${accmodal.account.username}` : "Login to your instagram account below"} icon={User}>
            <div className=" text-start">
               <IGLoginForm/>
            </div>
        </Modal>
    </div>
  );
};

export default AccountModal;