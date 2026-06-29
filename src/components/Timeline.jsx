export default function Timeline({ schedule }) {
  return (
    <section className="card" aria-labelledby="timeline-heading">
      <div className="section-heading">
        <span className="section-icon">🎉</span>
        <h2 id="timeline-heading">婚礼流程</h2>
      </div>
      <ol className="timeline-list">
        {schedule.map((item) => (
          <li key={`${item.time}-${item.title}`} className="timeline-item">
            <span className="timeline-dot">❤</span>
            <div>
              <strong>{item.time}</strong>
              <p>{item.title}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
