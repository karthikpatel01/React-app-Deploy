import "./MediaGallery.css";
import sampleImage from "../assets/sample.jpg";

function MediaGallery() {
  return (
    <div className="gallery-container">
      <h2>Media Gallery</h2>

      {/* Image using ES6 import */}
      <img src={sampleImage} alt="Sample" className="media-img" />

      {/* Video from public folder */}
      <video controls className="media-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support video tag.
      </video>

      {/* Audio from public folder */}
      <audio controls className="media-audio">
        <source src="/audio.mp3" type="audio/mp3" />
        Your browser does not support audio element.
      </audio>
    </div>
  );
}

export default MediaGallery;
