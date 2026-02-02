"use client"

import { useEffect, useState, createContext, use, useContext } from "react"
import Lenis from "lenis"

const SmoothScrollerContext = createContext(null)

export const useSmoothScroller = () => useContext(SmoothScrollerContext)

export default function ScrollContext({ children }) {
    const [LenisRef, setLenisRef] = useState(null)
    const [rafState, setRaf] = useState(null)

    useEffect(() => {
        const scroller = new Lenis()
        let rf

        function raf(time) {
            scroller.raf(time)
            rf = requestAnimationFrame(raf)
        }
            
        rf = requestAnimationFrame(raf)
        setLenisRef(scroller)
        setRaf(rf)

        return () => {
            if(Lenis) {
                cancelAnimationFrame(rf)
                scroller.destroy()
            }
        }
    }, [])
    return <SmoothScrollerContext.Provider value={LenisRef}>{children}</SmoothScrollerContext.Provider>
}