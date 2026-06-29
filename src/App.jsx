import { useEffect, useRef, useState } from "react";
import HeaderCard from "./components/HeaderCard";
import CoupleCard from "./components/CoupleCard";
import DateCard from "./components/DateCard";
import LocationCard from "./components/LocationCard";
import Timeline from "./components/Timeline";
import CatBlessing from "./components/CatBlessing";
import EmojiRain from "./components/EmojiRain";
import OpeningCover from "./components/OpeningCover";
import { invitation } from "./invitationConfig";

const COVER_EXIT_MS = 900;

function tryPlay(audio) {
  try {
    const result = audio.play();
    if (result && typeof result.catch === "function") {
      result.catch(() => {});
    }
  } catch {}
}

function tryPause(audio) {
  try {
    audio.pause();
  } catch {}
}

export default function App() {
  const [isOpening, setIsOpening] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [showCover, setShowCover] = useState(true);
  const [rainTrigger, setRainTrigger] = useState(0);
  const [musicEnabled, setMusicEnabled] = useState(invitation.bgmEnabled);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!hasOpened) {
      return undefined;
    }

    setRainTrigger((current) => current + 1);

    const audio = audioRef.current;
    if (audio && musicEnabled) {
      tryPlay(audio);
    }

    const timeoutId = window.setTimeout(() => {
      setShowCover(false);
      setIsOpening(false);
    }, COVER_EXIT_MS);

    return () => window.clearTimeout(timeoutId);
  }, [hasOpened, musicEnabled]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (musicEnabled && hasOpened) {
      tryPlay(audio);
      return;
    }

    tryPause(audio);
  }, [hasOpened, musicEnabled]);

  const handleOpen = () => {
    setHasOpened(true);
    setIsOpening(true);
  };

  const triggerRain = () => {
    setRainTrigger((current) => current + 1);
  };

  return (
    <div className="page-shell">
      <EmojiRain triggerKey={rainTrigger} assets={invitation.catImages} />
      <audio ref={audioRef} src={invitation.bgmSrc} loop preload="none" />
      {showCover ? (
        <OpeningCover invitation={invitation} isOpening={isOpening} onOpen={handleOpen} />
      ) : null}
      {hasOpened ? (
        <>
          <button
            type="button"
            className="music-toggle"
            onClick={() => setMusicEnabled((current) => !current)}
            aria-label={musicEnabled ? "关闭背景音乐" : "开启背景音乐"}
          >
            {musicEnabled ? "♫ BGM" : "♪ 静音"}
          </button>
          <main className="invitation-page">
            <HeaderCard invitation={invitation} />
            <CoupleCard invitation={invitation} />
            <DateCard invitation={invitation} />
            <LocationCard invitation={invitation} />
            <Timeline schedule={invitation.schedule} />
            <CatBlessing invitation={invitation} onTriggerRain={triggerRain} />
            <section className="card action-card">
              <button type="button" className="primary-button" onClick={triggerRain}>
                点击召唤猫猫祝福雨
              </button>
            </section>
            <footer className="footer-card">
              <p>{invitation.footerText}</p>
              <span>Wedding Invitation</span>
            </footer>
          </main>
        </>
      ) : null}
    </div>
  );
}
