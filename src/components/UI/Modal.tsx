import {useRef, useEffect} from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import style from "./Modal.module.css";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose?: () => void
    className?: string;
};

//useRef => 
const Modal = ({children, open, onClose, className}: Props) => {
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
        <dialog onClose={onClose} ref={dialog} className={`${style.dialog} ${className || ""}`}
>
            {children} 
        </dialog>,
        document.getElementById('modal') as HTMLElement
    )
}

export default Modal