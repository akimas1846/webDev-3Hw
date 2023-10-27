import WelcomeText from "./WelcomeText.jsx";
import Gallery from "./Gallery.jsx";

export default function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <WelcomeText />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </main>
  );
}