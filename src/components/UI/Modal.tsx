import {useRef, useEffect} from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";


type Props = {
    children: ReactNode;
    open: boolean;
    onClose?: () => void
};

//useRef => 
const Modal = ({children, open, onClose}: Props) => {
    const dialog =  useRef<HTMLDialogElement | null>(null)
    
    useEffect(() => {
        const modal = dialog.current;

        if (!modal) return;

        if (open) {
            modal.showModal();
        } else {
            modal.close();
        }

        return () => {
            modal.close();
        };
    }, [open]);

    return createPortal (
        <dialog onClose={onClose} ref={dialog}> 
            {children} 
        </dialog>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal