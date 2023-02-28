import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Framer() {

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(25, 255, 255, 1)"
        }
    };

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        // Ocultar el loader después de 5 segundos
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 1000000);

        // Limpieza del timeout al desmontar el componente
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
            <AnimatePresence>
                {showLoader && (
                    <motion.div
                        variants={icon}
                        style={{ opacity: 0 }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onAnimationComplete={() => {
                            setShowLoader(false);
                        }}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{
                                default: { duration: 10, ease: "easeInOut" },
                                fill: { duration: 10, ease: [1, 0, 0.8, 1] }
                            }}
                        >
                            <motion.path
                                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                                variants={icon}

                            />
                        </motion.svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Framer;