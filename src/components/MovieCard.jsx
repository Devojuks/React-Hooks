export default function MovieCard({ ele }) {
  return (
    <div className="MovieCard">
      <div>
        <div>
          <img width="350" src={ele.img} alt="movie" />
        </div>
        <div>
          <h2>{ele.title}</h2>
          <p>{ele.description}</p>
          <h2>Rate : {ele.rating}</h2>
          <h3>{ele.posterURL}</h3>
        </div>
      </div>
    </div>
  );
}