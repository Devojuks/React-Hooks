import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";

export default function Filter({ filter }) {
  let searchRef = useRef();
  const [rate, setRate] = useState(0);

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  function submitted(ev) {
    ev.preventDefault();
    filter(searchRef.current.value, rate);
  }

  return (
    <form className="searchform" onSubmit={submitted}>
      <h2> FILTER BAR </h2>
      <input
        ref={searchRef}
        className="form-control form-control-lg searching"
        type="text"
        placeholder="Search ...."
        aria-label=".form-control-lg example"
      />
      <button className="btn btn-primary searchbtn" type="submit">
        Search
      </button>

      <ReactStars
        count={10}
        onChange={ratingChanged}
        size={50}
        isHalf={true}
        activeColor="#3b82f6"
      />
    </form>
  );
}