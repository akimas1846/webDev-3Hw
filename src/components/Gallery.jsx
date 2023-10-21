import Image from "./Image";

export default function Gallery() {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
      <h2>Favourite photos</h2>
        <Image />
      </div>
    </div>
  );
}