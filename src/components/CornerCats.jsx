const CORNER_POSITIONS = ["top-left", "top-right", "bottom-left", "bottom-right"];

export default function CornerCats({ cats = [] }) {
  return (
    <div className="corner-cats" aria-hidden="true">
      {cats.slice(0, 4).map((cat, index) => (
        <div
          key={`${cat.src}-${index}`}
          className={`corner-cat corner-cat--${CORNER_POSITIONS[index] ?? "top-left"}`}
        >
          <img src={cat.src} alt="" loading="lazy" style={{ objectPosition: cat.objectPosition }} />
        </div>
      ))}
    </div>
  );
}
