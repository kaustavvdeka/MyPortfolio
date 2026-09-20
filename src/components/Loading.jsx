import { useEffect, useState, useRef } from "react";
import "./styles/Loading.css";
import { useProgress } from "@react-three/drei";

const Loading = ({ onFinish }) => {
  const { progress: dreiProgress } = useProgress();
  const [percent, setPercent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);
  const wrapRef = useRef(null);

  // Smoothly increment percent up to 100% based on 3D progress & simulated timer
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Step up smoothly
      const target = Math.max(dreiProgress, current + Math.floor(Math.random() * 8) + 3);
      current = Math.min(100, target);
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoaded(true);
          // Auto trigger portal transition after brief Welcome display
          setTimeout(() => {
            setClicked(true);
            setTimeout(() => {
              if (onFinish) onFinish();
            }, 800);
          }, 900);
        }, 400);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [dreiProgress, onFinish]);

  function handleMouseMove(e) {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    wrapRef.current.style.setProperty("--mouse-x", `${x}px`);
    wrapRef.current.style.setProperty("--mouse-y", `${y}px`);
  }

  function handleManualClick() {
    if (loaded && !clicked) {
      setClicked(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 800);
    }
  }

  return (
    <>
      <div className="loading-header">
        <span className="loader-title">KMD</span>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        {/* Background Marquee Text */}
        <div className="loading-marquee">
          <div className="loading-marquee-track">
            <span>Full Stack Developer</span>
            <span>Software Engineer</span>
            <span>3D Web Specialist</span>
            <span>Creative Technologist</span>
            <span>Full Stack Developer</span>
            <span>Software Engineer</span>
            <span>3D Web Specialist</span>
            <span>Creative Technologist</span>
          </div>
        </div>

        {/* Center Loading Button */}
        <div
          ref={wrapRef}
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
          onClick={handleManualClick}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
