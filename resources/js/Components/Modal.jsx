import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-gray-600  bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-[90%] md:w-[40rem] h-[40rem] md:h-96 p-6 rounded-md relative">
                <button
                    onClick={onClose}
                    className="mb-4 absolute right-4 top-4"
                >
                    <IoIosCloseCircleOutline />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
