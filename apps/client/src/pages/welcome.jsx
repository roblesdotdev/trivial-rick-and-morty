import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "96vh",
      }}
    >
      <h1>Rick & Morty</h1>
      <div className="card">
        <Link to="/characters">Explore Characters</Link>
        <p>Simple app created for demo purposes.</p>
      </div>
      <footer>
        <p>roblesdotdev</p>
      </footer>
    </div>
  );
}
