import "./ConfirmModal.css";
import { motion, AnimatePresence } from "framer-motion";

const ConfirmModal = ({
    open,
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    danger = false,
    onConfirm,
    onCancel
}) => {

    return (

        <AnimatePresence>

            {open && (

                <>

                    <motion.div

                        className="modalOverlay"

                        initial={{opacity:0}}

                        animate={{opacity:1}}

                        exit={{opacity:0}}

                        onClick={onCancel}

                    />

                    <motion.div

                        className="confirmModal"

                        initial={{
                            opacity:0,
                            scale:.9,
                            y:40
                        }}

                        animate={{
                            opacity:1,
                            scale:1,
                            y:0
                        }}

                        exit={{
                            opacity:0,
                            scale:.9,
                            y:40
                        }}

                    >

                        <h2>{title}</h2>

                        <p>{message}</p>

                        <div className="modalButtons">

                            <button

                                className="cancelBtn"

                                onClick={onCancel}

                            >

                                {cancelText}

                            </button>

                            <button

                                className={
                                    danger
                                    ?
                                    "dangerBtn"
                                    :
                                    "confirmBtn"
                                }

                                onClick={onConfirm}

                            >

                                {confirmText}

                            </button>

                        </div>

                    </motion.div>

                </>

            )}

        </AnimatePresence>

    );

};

export default ConfirmModal;