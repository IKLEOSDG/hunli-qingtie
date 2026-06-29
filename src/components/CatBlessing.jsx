export default function CatBlessing({ invitation, onTriggerRain }) {
  return (
    <section className="card cat-card" aria-labelledby="cat-heading">
      <div className="section-heading">
        <span className="section-icon">🐱</span>
        <h2 id="cat-heading">猫猫祝福</h2>
      </div>
      <div className="cat-layout">
        <button
          type="button"
          className="cat-portrait-button"
          onClick={onTriggerRain}
          aria-label="点击猫猫照片触发祝福雨"
        >
          <img src={invitation.mainCatImage} alt="猫猫祝福照" />
        </button>
        <div className="cat-copy">
          <p className="cat-text">{invitation.catText}</p>
          <div className="cat-bubble">{invitation.catBubble}</div>
        </div>
      </div>
    </section>
  );
}
