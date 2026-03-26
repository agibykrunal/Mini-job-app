import { useEffect } from "react";

export default function Toast({ msg, onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3200); return () => clearTimeout(t); }, [onDone]);
  return (
    <div className="toast">
      <div className="tdot" />
      <span className="ttxt">{msg}</span>
    </div>
  );
}
