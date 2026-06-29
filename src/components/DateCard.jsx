import { useEffect, useState } from "react";

function getCountdownParts(targetDate) {
  const difference = targetDate.getTime() - Date.now();
  if (difference <= 0) {
    return null;
  }

  const totalMinutes = Math.floor(difference / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
}

export default function DateCard({ invitation }) {
  const targetDate = new Date(invitation.weddingDate);
  const [countdown, setCountdown] = useState(() => getCountdownParts(targetDate));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCountdown(getCountdownParts(targetDate));
    }, 60_000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return (
    <section className="card date-card" aria-labelledby="date-heading">
      <div className="section-heading">
        <span className="section-icon">📅</span>
        <h2 id="date-heading">婚礼日期</h2>
      </div>
      <div className="calendar-panel">
        <p className="date-display">{invitation.displayDate}</p>
        <div className="date-meta">
          <span>{invitation.weekDay}</span>
          <span>{invitation.time}</span>
          <span>{invitation.lunarDate}</span>
        </div>
      </div>
      <p className="countdown-text">
        {countdown
          ? `距离婚礼还有 ${countdown.days} 天 ${countdown.hours} 小时 ${countdown.minutes} 分钟`
          : "幸福已开启"}
      </p>
    </section>
  );
}
