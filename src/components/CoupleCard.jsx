export default function CoupleCard({ invitation }) {
  return (
    <section className="card" aria-labelledby="couple-heading">
      <div className="section-heading">
        <span className="section-icon">💍</span>
        <h2 id="couple-heading">新郎新娘</h2>
      </div>
      <div className="couple-grid">
        <div className="couple-person">
          <span className="couple-label">新郎</span>
          <strong>{invitation.groom}</strong>
        </div>
        <div className="couple-link">❤</div>
        <div className="couple-person">
          <span className="couple-label">新娘</span>
          <strong>{invitation.bride}</strong>
        </div>
      </div>
      {invitation.introText ? <p className="supporting-text">{invitation.introText}</p> : null}
    </section>
  );
}
