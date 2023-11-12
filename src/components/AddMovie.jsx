import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";

export default function AddMovie({ adding }) {
  let titleRef = useRef();
  let imgurlRef = useRef();
  let posurlRef = useRef();
  let descRef = useRef();
  let [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRate(newRating);
  };

  function submitted(ev) {
    ev.preventDefault();

    let movieObject = {
      title: titleRef.current.value,
      img: imgurlRef.current.value,
      description: descRef.current.value,
      posterURL: posurlRef.current.value,
      rating: rate,
    };
    adding(movieObject);

    //save all this information in localStorage
  }

  return (
    <div className="AddMovie">
      <form onSubmit={submitted}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            <h2>Title</h2>
          </label>
          <div className="col-sm-10">
            <input
              name="title"
              ref={titleRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Title"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            <h2>Image url</h2>
          </label>
          <div className="col-sm-10">
            <input
              ref={imgurlRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Image url"
            />
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            <h2> Movie url </h2>
          </span>
          <input
            ref={posurlRef}
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="Movie url"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">
            <h2>Description</h2>
          </span>
          <textarea
            ref={descRef}
            className="form-control"
            aria-label="With textarea"
            placeholder="Movie about"
          ></textarea>
        </div>

        <div className="rating">
          <h2> Rating : </h2>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={30}
            isHalf={true}
            activeColor="#3b82f6"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
}