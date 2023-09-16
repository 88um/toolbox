'use client';

import { useEffect, useState } from "react";
import ErrorModal from "../modals/ErrorModal";

interface ModalProviderProps {

}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
        <ErrorModal />
    </div>
  );
};

export default ModalProvider;