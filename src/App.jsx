import { useLayoutEffect, useState } from "react";
import HeaderCard from "./components/HeaderCard";
import CoupleCard from "./components/CoupleCard";
import DateCard from "./components/DateCard";
import LocationCard from "./components/LocationCard";
import Timeline from "./components/Timeline";
import CatBlessing from "./components/CatBlessing";
import EmojiRain from "./components/EmojiRain";
import { invitation } from "./invitationConfig";

export default function App() {
  const [rainTrigger, setRainTrigger] = useState(0);

  useLayoutEffect(() => {
    setRainTrigger(1);
  }, []);

  const triggerRain = () => {
    setRainTrigger((current) => current + 1);
  };

  return (
    <div className="page-shell">
      <EmojiRain triggerKey={rainTrigger} assets={invitation.catImages} />
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
    </div>
  );
}
