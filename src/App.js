import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(() => {
    // Intentar recuperar el valor desde localStorage al cargar la app
    const saved = localStorage.getItem("contador");
    return saved !== null ? Number(saved) : 0;
  });

  // Cada vez que cambie el contador, actualizar localStorage
  useEffect(() => {
    localStorage.setItem("contador", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador con localStorage</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <br />
      <button onClick={() => setCount(0)} style={{ marginTop: "10px" }}>
        Reiniciar
      </button>
    </div>
  );
}