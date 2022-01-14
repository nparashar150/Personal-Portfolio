import { useEffect, useRef } from "react";
import "./Mouse.scss";

const Mouse = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
    return () => {};
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
    </>
  );
};

export default Mouse;
