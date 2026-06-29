export default function HeaderCard({ invitation }) {
  return (
    <section className="card card-hero" aria-label="邀请开场">
      <div className="card-ornaments" aria-hidden="true">
        <span className="spark spark-heart">❤</span>
        <span className="spark spark-star">✦</span>
        <span className="spark spark-paw">🐾</span>
      </div>
      <p className="eyebrow">Wedding Invitation</p>
      <h1 className="hero-title">{invitation.title}</h1>
      <p className="hero-names">
        <span>{invitation.groom}</span>
        <span className="hero-separator">&amp;</span>
        <span>{invitation.bride}</span>
      </p>
      <p className="hero-subtitle">{invitation.subtitle}</p>
    </section>
  );
}
