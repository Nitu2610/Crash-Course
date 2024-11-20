import React, { useEffect, useState } from "react";

function ScrollEventComp() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY); // Track vertical scroll
        };

        window.addEventListener("scroll", handleScroll); // Subscribe to scroll

        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div>
            <h2>Scroll Position: {scrollPosition}px</h2>
            <div style={{ height: "200vh", padding: "10px" }}>
                Scroll down to see the position update.
            </div>
        </div>
    );
}

export default ScrollEventComp;
