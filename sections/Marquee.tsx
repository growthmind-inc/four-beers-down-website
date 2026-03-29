const items = [
  "Game Nights",
  "Pre-Games",
  "Bachelorette Parties",
  "First Dates (brave)",
  "Road Trips",
  "Team Building",
  "Family Reunions (chaotic)",
  "Friendsgiving",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="dot" /> {item}
          </span>
        ))}
      </div>
    </div>
  );
}
