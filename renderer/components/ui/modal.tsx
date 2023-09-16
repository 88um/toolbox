"use client";

import { ShieldAlert } from "lucide-react";
import { useState } from "react";
import { IconType } from "react-icons";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";




interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  icon? : IconType;
  footer? : string;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
    icon : Icon = ShieldAlert,
    footer,
  title,
  description,
  isOpen,
  onClose,
  children
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };


  return ( 
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="bg-white text-center">
        <DialogHeader className="">
            
          <DialogTitle className="flex flex-col items-center justify-center text-center space-y-3 py-4 capitalize">
            
            <div className="rounded-full bg-red-400 text-white p-2 ">
                <Icon className="w-12 h-12"/>
            </div>
            <div className="text-gray-600 text-2xl">
            {title}
            </div>
        </DialogTitle>
          <DialogDescription className="capitalize text-gray-600 text-center px-6">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div>
          {children}
        </div>
      </DialogContent>
      <DialogFooter className="capitalize">
        {footer}
      </DialogFooter>
    </Dialog>
  );
};