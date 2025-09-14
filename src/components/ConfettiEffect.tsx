import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default function ConfettiEffect() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return <Confetti width={windowSize.width} height={windowSize.height} />;
}
