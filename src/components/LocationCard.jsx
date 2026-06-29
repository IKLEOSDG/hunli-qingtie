import { useState } from "react";

export default function LocationCard({ invitation }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(invitation.address);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="card" aria-labelledby="location-heading">
      <div className="section-heading">
        <span className="section-icon">📍</span>
        <h2 id="location-heading">婚礼地点</h2>
      </div>
      <p className="location-venue">{invitation.venue}</p>
      <p className="supporting-text">{invitation.address}</p>
      <div className="button-row">
        <button type="button" className="secondary-button" onClick={handleCopy}>
          {copied ? "已复制" : "复制地址"}
        </button>
        {invitation.mapUrl ? (
          <a
            className="secondary-button secondary-link"
            href={invitation.mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            打开地图
          </a>
        ) : null}
      </div>
    </section>
  );
}
