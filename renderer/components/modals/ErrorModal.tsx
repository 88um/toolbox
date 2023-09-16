'use client';

import { Ticket, TicketIcon } from "lucide-react";
import { useRouter } from "next/router";
import { BsTicket, BsTicketDetailed } from "react-icons/bs";
import userInfoModal from "../../hooks/useInfoModal";
import { Button } from "../ui/button";
import { Modal } from "../ui/modal";

interface ErrorModalProps {

}

const ErrorModal: React.FC<ErrorModalProps> = ({}) => {
    const useModal = userInfoModal()
    const router = useRouter()
    const onCreate = () => {
        useModal.onClose()
        router.push('/home')
    }

  return (
    <div>
        <Modal onClose={useModal.onClose} isOpen={useModal.isOpen && useModal.type == "error"} title="Error: Account Disabled" description="Your account @joshua has been disabled and removed from your list of accounts. To speak to a support agent, press the button below.">
            <div className="py-2">
                <Button className="bg-black hover:bg-black/80 text-white flex items-center rounded-xl w-full space-x-3" onClick={onCreate}>
                    <div>
                        <BsTicketDetailed/>
                    </div>
                    <div>
                        Create Unban Ticket
                    </div>
                </Button>
            </div>
        </Modal>
    </div>
  );
};

export default ErrorModal;