import { useState, useEffect, useCallback, useRef } from 'react'

const useCarousel = (length, interval = 4000) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timerRef = useRef(null)

    const next = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % length)
    }, [length])

    const prev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + length) % length)
    }, [length])

    const goTo = useCallback((index) => {
        setCurrentIndex(index)
    }, [])

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(next, interval)
    }, [next, interval])

    useEffect(() => {
        resetTimer()
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [resetTimer])

    return {
        currentIndex,
        next,
        prev,
        goTo,
        resetTimer
    }
}

export default useCarousel
