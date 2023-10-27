import Image from "./Image";

export default function Gallery() {
  return (
    <div className="columns is-vcentered is-multiline">
      <div className="column is-3">
        <h2>Favourite photos</h2>
        <figure>
          <Image />
        </figure>
      </div>
    </div>
  );
}