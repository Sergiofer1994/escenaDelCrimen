// src/components/HeroCarousel/HeroCarousel.jsx
import { useState, useEffect, useRef } from "react";
import "./HeroCarrousel.css";

const HeroCarousel = ({ featuredMovies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const timeoutRef = useRef(null);
    const videoRef = useRef(null);
    const progressBarRef = useRef(null);

    const currentMovie = featuredMovies[currentIndex];

    
    useEffect(() => {
        if (!isPlaying) return;

        timeoutRef.current = setTimeout(() => {
            handleNext();
        }, 10000);

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, isPlaying]);

    
    useEffect(() => {
        setIsMuted(true);
        setIsPlaying(true);
        setProgress(0);

        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.muted = true;
            videoRef.current.play().catch(err => console.log("Error playing video:", err));
        }
    }, [currentIndex]);

    
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateProgress = () => {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent || 0);
        };

        video.addEventListener("timeupdate", updateProgress);
        return () => video.removeEventListener("timeupdate", updateProgress);
    }, [currentIndex]);

    const handleNext = () => {
        if (isTransitioning || featuredMovies.length < 2) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const handlePrev = () => {
        if (isTransitioning || featuredMovies.length < 2) return;
        setIsTransitioning(true);
        setCurrentIndex(
            (prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length
        );
        setTimeout(() => setIsTransitioning(false), 500);
    };

    
    const handleProgressBarClick = (e) => {
        const video = videoRef.current;
        const progressBar = progressBarRef.current;
        
        if (!video || !progressBar) return;

        
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percentage = clickX / rect.width;
        
        
        const newTime = percentage * video.duration;
        video.currentTime = newTime;
        
        
        setProgress(percentage * 100);
    };

    if (!currentMovie) return null;

    return (
        <div className="heroCarousel">
            <div className="heroVideo">
                <video
                    ref={videoRef}
                    className="heroVideoElement"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    src={`/${currentMovie.trailer}`}
                    poster={`/${currentMovie.img}`}
                />

                <div className="heroOverlay" />
            </div>

            
            <button
                className="heroSoundButton"
                onClick={() => {
                    const newMuted = !isMuted;
                    if (videoRef.current) {
                        videoRef.current.muted = newMuted;
                    }
                    setIsMuted(newMuted);
                }}
            >
                {isMuted ? "🔇" : "🔊"}
            </button>

            {/* ⏯ Play / Pause */}
            <button
                className="heroPlayButton"
                onClick={() => {
                    if (videoRef.current) {
                        if (isPlaying) {
                            videoRef.current.pause();
                        } else {
                            videoRef.current.play().catch(err => console.log("Error:", err));
                        }
                    }
                    setIsPlaying(!isPlaying);
                }}
            >
                {isPlaying ? "⏸" : "▶"}
            </button>

            
            <div 
                ref={progressBarRef}
                className="heroProgressBar"
                onClick={handleProgressBarClick}
            >
                <div
                    className="heroProgressFill"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="heroContent">
                <button
                    className="heroArrow heroArrowLeft"
                    onClick={handlePrev}
                >
                    ‹
                </button>

                <button
                    className="heroArrow heroArrowRight"
                    onClick={handleNext}
                >
                    ›
                </button>
            </div>
        </div>
    );
};

export default HeroCarousel;