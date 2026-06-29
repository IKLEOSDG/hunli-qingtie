export default function OpeningCover({ invitation, isOpening, onOpen }) {
  return (
    <div className={`opening-cover${isOpening ? " opening-cover--opening" : ""}`}>
      <div className="opening-envelope" aria-hidden="true">
        <div className="opening-envelope__flap" />
      </div>
      <section className="opening-card" aria-label="请帖封面">
        <p className="opening-card__eyebrow">Wedding Invitation</p>
        <h1 className="opening-card__title">{invitation.title}</h1>
        <p className="opening-card__names">
          <span>{invitation.groom}</span>
          <span className="opening-card__separator">&amp;</span>
          <span>{invitation.bride}</span>
        </p>
        <p className="opening-card__subtitle">{invitation.coverSubtitle}</p>
        <button type="button" className="primary-button opening-card__button" onClick={onOpen}>
          {invitation.coverTitle}
        </button>
      </section>
    </div>
  );
}
