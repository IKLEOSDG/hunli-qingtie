const CORNER_POSITIONS = ["top-left", "top-right", "bottom-left", "bottom-right"];

export default function CornerCats({ cats = [] }) {
  return (
    <div className="corner-cats" aria-hidden="true">
      {cats.slice(0, 4).map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`corner-cat corner-cat--${CORNER_POSITIONS[index] ?? "top-left"}`}
        >
          <img src={src} alt="" loading="lazy" />
        </div>
      ))}
    </div>
  );
}
