import WelcomeText from "./WelcomeText.jsx";
import Gallery from "./Gallery.jsx";

export default function Main() {
  return (
    <main>
      <section className="section">
        <div className="container">
            <WelcomeText />
            <Gallery />
        </div>
      </section>
    </main>
  );
}