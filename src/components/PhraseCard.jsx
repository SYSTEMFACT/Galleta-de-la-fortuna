import { useState, useEffect } from "react";

function PhraseCard({ phrase, author }) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(false);
    const timer = setTimeout(() => setFade(true), 100);
    return () => clearTimeout(timer);
  }, [phrase]);

  return (
    <article className={`phrase-card ${fade ? "fade-in" : "fade-out"}`}>
      <q>{phrase}</q>
      <p>-<strong>{author}</strong></p>
    </article>
  );
}

export default PhraseCard;