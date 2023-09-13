"use client"
import { motion, useInView, useAnimate, inView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const ScrollText = ({ children, width = "fit-content" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const slideControl = useAnimation()
    useEffect(() => {
        if (isInView) {
            // fire animation
            mainControls.start("visible")
            slideControl.start("visible")
        }
    }, [isInView])
    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
                initial="hidden"
                // animate="visible"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div variants={{
                hidden: { left: 0 },
                visible: { left: "100%" }
            }}
                initial="hidden"
                animate={slideControl}
                transition={{ duration: 0.5, ease: "easeIn" }}

                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "#f39c12",
                    zIndex: 20,
                }}
            >

            </motion.div>
        </div>
    )
}

export default ScrollText
