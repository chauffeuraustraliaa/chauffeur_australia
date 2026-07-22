function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export function CitySkyline({ seed }: { seed: number }) {
  const random = seededRandom(seed + 1);
  const buildingCount = 9;
  const buildings = Array.from({ length: buildingCount }, () => {
    const width = 20 + random() * 14;
    const height = 40 + random() * 90;
    return { width, height, lit: random() > 0.45 };
  });

  let x = -10;
  const positioned = buildings.map((building) => {
    const rect = { ...building, x };
    x += building.width + 4;
    return rect;
  });

  return (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 size-full"
      aria-hidden
    >
      <defs>
        <radialGradient id={`sky-${seed}`} cx="80%" cy="15%" r="70%">
          <stop offset="0%" stopColor="var(--brand-gold)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--brand-navy-deep)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="var(--brand-navy-deep)" />
      <rect width="400" height="260" fill={`url(#sky-${seed})`} />
      <circle cx="330" cy="46" r="20" fill="var(--brand-gold)" opacity="0.9" />
      {positioned.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={200 - b.height}
          width={b.width}
          height={b.height}
          fill="var(--brand-navy)"
          stroke="rgba(255,255,255,0.06)"
        />
      ))}
      {positioned.map((b, i) =>
        b.lit ? (
          <rect
            key={`w-${i}`}
            x={b.x + b.width * 0.3}
            y={200 - b.height + 10}
            width={b.width * 0.18}
            height={b.height * 0.14}
            fill="var(--brand-gold-light)"
            opacity="0.7"
          />
        ) : null
      )}
      <rect x="0" y="200" width="400" height="60" fill="var(--brand-navy-deep)" />
      <rect x="0" y="214" width="400" height="3" fill="var(--brand-gold)" opacity="0.5" />
    </svg>
  );
}
