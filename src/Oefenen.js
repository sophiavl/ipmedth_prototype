import arrowRight from "./images/arrowRight.png";
import ProgressBar from "./components/ProgressBar";
import Card from "./components/Card";
import banaan from "./images/banaan.png";
import ei from "./images/ei.png";
import pan from "./images/pan.png";
import map from "./images/map.png";
import melk from "./images/melk.png";
import mes from "./images/mes.png";
import pen from "./images/pen.png";
import tas from "./images/tas.png";
import snoep from "./images/snoep.png";
import glas from "./images/glas.png";
import melkAudio from "./audio/melk.mp3";
import eiAudio from "./audio/ei.mp3";
import banaanAudio from "./audio/banaan.mp3";
import penAudio from "./audio/pen.mp3";
import tasAudio from "./audio/tas.mp3";
import mapAudio from "./audio/map.mp3";
import mesAudio from "./audio/mes.mp3";
import panAudio from "./audio/pan.mp3";
import glasAudio from "./audio/glas.mp3";
import whiteArrow from "./images/whiteArrow.png";
import snoepAudio from "./audio/snoep.mp3";
import check from "./images/check.svg";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Oefenen = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/end");
  };
  const objects = [
    { name: "snoep", img: snoep, categorie: "supermarkt", audio: snoepAudio },
    { name: "melk", img: melk, categorie: "supermarkt", audio: melkAudio },
    { name: "ei", img: ei, categorie: "supermarkt", audio: eiAudio },
    {
      name: "banaan",
      img: banaan,
      categorie: "supermarkt",
      audio: banaanAudio,
    },
    { name: "pen", img: pen, categorie: "school", audio: penAudio },
    { name: "tas", img: tas, categorie: "school", audio: tasAudio },
    { name: "map", img: map, categorie: "school", audio: mapAudio },
    { name: "mes", img: mes, categorie: "keuken", audio: mesAudio },
    { name: "glas", img: glas, categorie: "keuken", audio: glasAudio },
    { name: "pan", img: pan, categorie: "keuken", audio: panAudio },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  // Handle start click
  const handleStartClick = () => {
    setStarted(true);
  };

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.src = objects[currentIndex].audio;
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  }, [started, currentIndex]);

  const handleRightClick = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pauzeer de huidige audio
      audioRef.current.currentTime = 0; // Reset naar het begin van de huidige audio
    }

    const newIndex = currentIndex === objects.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    // Stel de nieuwe audio in en laad deze
    if (audioRef.current) {
      audioRef.current.src = objects[newIndex].audio;

      // Voeg een event listener toe die wacht tot het audio-element klaar is om af te spelen
      audioRef.current.addEventListener(
        "canplaythrough",
        () => {
          audioRef.current.play();
        },
        { once: true }
      );
    }
    setIsAudioPlaying(true);

    setTimeout(() => {
      setIsAudioPlaying(false);
    }, 2000);
  };

  const handleAudioEnded = () => {
    const minDuration = 2000;
    const elapsed = audioRef.current.currentTime * 1000;

    if (elapsed < minDuration) {
      const remainingTime = minDuration - elapsed;
      setTimeout(() => {
        setIsAudioPlaying(false);
      }, remainingTime);
    } else {
      setIsAudioPlaying(false);
    }
  };

  const getBackground = (categorie) => {
    switch (categorie) {
      case "supermarkt":
        return "bg-supermarkt";
      case "school":
        return "bg-school";
      case "keuken":
        return "bg-keuken";
      default:
        return "bg-supermarkt";
    }
  };

  return (
    <main className='App'>
      <article className='relative'>
        <wrapper
          className={`absolute inset-0 ${
            started
              ? getBackground(objects[currentIndex].categorie)
              : "bg-green-400"
          } opacity-70 z-0 bg-cover`}
        />

        <section className='relative z-10 h-screen opacity-100 flex flex-col items-center justify-start'>
          {!started && (
            <button
              className='flex justify-center items-center w-52 h-52 mt-64 rounded-xl bg-green-500 text-card'
              onClick={handleStartClick}
            >
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl'>Start</h1>
                <img src={whiteArrow} className='h-16 w-16 mt-4'></img>
              </div>
            </button>
          )}

          {started && (
            <>
              <ProgressBar
                currentIndex={currentIndex + 1}
                totalItems={objects.length}
              ></ProgressBar>

              <div className='invisible'>
                <audio
                  ref={audioRef}
                  controls
                  onEnded={handleAudioEnded}
                ></audio>
              </div>

              {/* card met pijltjes */}
              <section className='flex flex-col justify-center items-center mt-18'>
                <Card objects={objects} currentIndex={currentIndex}></Card>

                {currentIndex < objects.length - 1 ? (
                  <button
                    className={`flex justify-center items-center w-96 h-16 mt-6 rounded-lg ${
                      isAudioPlaying ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      filter: "drop-shadow(0px 3px 6px rgba(28, 27, 27, 0.50))",
                    }}
                    onClick={!isAudioPlaying ? handleRightClick : null}
                    disabled={isAudioPlaying} // Voegt de disabled functionaliteit toe
                  >
                    <img src={arrowRight} alt='arrow' className='max-w-14' />
                  </button>
                ) : (
                  <button
                    className='flex justify-center items-center w-96 h-16 mt-6 rounded-lg border-green-500 border-2 bg-card text-green-500'
                    onClick={handleNavigate}
                  >
                    <img src={check} className='h-12' />
                  </button>
                )}
              </section>
            </>
          )}
        </section>
      </article>
    </main>
  );
};

export default Oefenen;
