import arrowRight from "./images/arrowRight.png";
import ProgressBar from "./components/ProgressBar";
import Card from "./components/Card";
import banaan from "./images/banaan.png";
import bord from "./images/bord.png";
import ei from "./images/ei.png";
import pan from "./images/pan.png";
import map from "./images/map.png";
import melk from "./images/melk.png";
import mes from "./images/mes.png";
import pen from "./images/pen.png";
import tas from "./images/tas.png";
import melkAudio from "./mp3/melk.mp3";
import eiAudio from "./mp3/ei.mp3";
import banaanAudio from "./mp3/banaan.mp3";
import penAudio from "./mp3/pen.mp3";
import tasAudio from "./mp3/tas.mp3";
import mapAudio from "./mp3/map.mp3";
import mesAudio from "./mp3/mes.mp3";
import bordAudio from "./mp3/bord.mp3";
import panAudio from "./mp3/pan.mp3";
import React, { useState, useRef, useEffect } from "react";

const Oefenen = () => {
  const objects = [
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
    { name: "bord", img: bord, categorie: "keuken", audio: bordAudio },
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

    // Zet de audio playing state terug
    setIsAudioPlaying(true);

    // Maak de knop pas 2 seconden na het klikken weer actief
    setTimeout(() => {
      setIsAudioPlaying(false);
    }, 2000); // 2 seconden wachttijd
  };

  const handleAudioEnded = () => {
    setIsAudioPlaying(false); // Enable the button when audio ends
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
    <div className='App'>
      <div className='relative'>
        <div
          className={`absolute inset-0 ${getBackground(
            objects[currentIndex].categorie
          )} opacity-40 z-0 bg-cover`}
        />

        <div className='relative z-10 h-screen opacity-100 flex flex-col items-center justify-start'>
          {!started && (
            <button
              className='h-28 w-36 mt-48 bg-green-400 rounded-lg'
              onClick={handleStartClick}
            >
              <h1 className='text-2xl'>Start</h1>
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
              <div className='flex flex-col justify-center items-center mt-36'>
                <Card objects={objects} currentIndex={currentIndex}></Card>
                <div
                  className={`flex justify-center items-center w-28 h-14 mt-8 rounded-lg cursor-pointer ${
                    isAudioPlaying ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    filter: "drop-shadow(0px 3px 6px rgba(28, 27, 27, 0.50))",
                  }}
                  onClick={!isAudioPlaying ? handleRightClick : null}
                >
                  <img src={arrowRight} alt='arrow' className='max-w-14'></img>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Oefenen;
