import React, { useEffect, useRef, useContext } from "react";
import shortid from "shortid";
import Clavis from "../lib/clavis";
import { store } from "../store";

export default function Preview() {
  const clavis = new Clavis();
  const canvasRef = useRef();
  const { state } = useContext(store);

  useEffect(() => {
    if (canvasRef.current) {
      clavis.configure(canvasRef.current, state.preview, 120);
      clavis.draw();
    }
  }, [state.preview, clavis]);

  if (!state.preview || state.previewllength === 0) {
    return null;
  }

  return (
    <div className="layer">
      <canvas
        id={shortid.generate()}
        ref={canvasRef}
        width={640}
        height={425}
      />
      <p className="Preview">Pré-visualização</p>
    </div>
  );
}
