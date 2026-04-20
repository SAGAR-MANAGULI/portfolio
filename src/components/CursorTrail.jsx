import { useEffect } from "react";
import "../styles/CursorTrail.css";

export default function CursorTrail() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        // track mouse (this works with scroll also)
        const move = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", move);

        // smooth follow
        const animate = () => {
            currentX += (mouseX - currentX) * 0.2;
            currentY += (mouseY - currentY) * 0.2;

            cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return <div className="cursor"></div>;
}