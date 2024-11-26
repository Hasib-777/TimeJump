import 'boxicons/css/boxicons.min.css';
import './MoviePoster.css';
import PropTypes from "prop-types";

export default function MoviePoster(props) {
  return (
    <div className='movie-poster'>

      <div id="movie-poster-img">
        {/* Movie poster image */}
        <img src={props.posterUrl} alt={`${props.movieName} poster`} />

        <p className='play-text'>
          {/* Icon with boxicons */}
          <i className='bx bx-lg bx-play'></i>
        </p>
      </div>

      {/* Movie name */}
      <div><p>{props.movieName}</p></div>

    </div>
  );
}

MoviePoster.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
};
