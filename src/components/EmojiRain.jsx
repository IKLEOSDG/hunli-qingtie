import { useLayoutEffect, useState } from "react";

const FALLBACK_EMOJIS = ["🐾", "😻", "😺", "🐥", "💗", "🎀", "✨"];

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function normalizeAsset(asset, index) {
  if (typeof asset === "string") {
    return {
      id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2)}`,
      value: asset,
      isImage: asset.startsWith("/")
    };
  }

  return {
    id: `${Date.now()}-${index}-${Math.random().toString(36).slice(2)}`,
    value: asset?.src ?? FALLBACK_EMOJIS[index % FALLBACK_EMOJIS.length],
    objectPosition: asset?.objectPosition,
    isImage: Boolean(asset?.src)
  };
}

function createRainItem(asset, index) {
  const duration = randomBetween(3000, 5000);
  const drift = randomBetween(-24, 24);
  const size = randomBetween(34, 68);
  const left = Math.random() * 100;
  const rotation = randomBetween(-28, 28);
  const delay = Math.random() * 240;
  const normalized = normalizeAsset(asset, index);

  return {
    ...normalized,
    asset: normalized.value,
    duration,
    drift,
    size,
    left,
    rotation,
    delay
  };
}

export default function EmojiRain({ triggerKey, assets }) {
  const [items, setItems] = useState([]);

  useLayoutEffect(() => {
    if (!triggerKey) {
      return undefined;
    }

    const pool = assets?.length ? assets : FALLBACK_EMOJIS;
    const count = randomBetween(25, 40);
    const burst = Array.from({ length: count }, (_, index) => {
      const selected = pool[randomBetween(0, pool.length - 1)];
      return createRainItem(selected, index);
    });

    setItems((current) => [...current, ...burst]);

    const timeoutId = window.setTimeout(() => {
      setItems((current) => current.filter((item) => !burst.some((created) => created.id === item.id)));
    }, 5600);

    return () => window.clearTimeout(timeoutId);
  }, [assets, triggerKey]);

  return (
    <div className="rain-layer" aria-hidden="true">
      {items.map((item) => (
        <span
          key={item.id}
          className="rain-item"
          data-testid="rain-item"
          style={{
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            animationDuration: `${item.duration}ms`,
            animationDelay: `${item.delay}ms`,
            "--drift": `${item.drift}px`,
            "--rotation": `${item.rotation}deg`
          }}
        >
          {item.isImage ? (
            <img
              src={item.asset}
              alt=""
              style={{ objectPosition: item.objectPosition }}
              onError={(event) => {
                const emoji = FALLBACK_EMOJIS[randomBetween(0, FALLBACK_EMOJIS.length - 1)];
                event.currentTarget.style.display = "none";
                const parent = event.currentTarget.parentElement;
                if (parent && parent.textContent === "") {
                  parent.textContent = emoji;
                }
              }}
            />
          ) : (
            item.asset
          )}
        </span>
      ))}
    </div>
  );
}
