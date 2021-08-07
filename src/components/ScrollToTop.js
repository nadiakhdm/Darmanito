import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import top from '../assets/Image/top.png'
export default function ScrollToTop() {
    const { y: pageYOffset } = useWindowScroll()
    const [Visible, setVisible] = useState(false)

    useEffect(() => {
        if (pageYOffset > 200) {
            setVisible(true)

        } else {
            setVisible(false)
        }

    }, [pageYOffset])
    const HandleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!Visible) {
        return null
    } else {
        return (
            <>
                <div className="fixed bottom-24 right-6">
                    <img
                        onClick={HandleScroll}
                        src={top} className="cursor-pointer" />
                </div>
            </>
        )
    }

}
