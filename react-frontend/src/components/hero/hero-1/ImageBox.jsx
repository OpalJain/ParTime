import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase, faFile, faCheck } from '@fortawesome/free-solid-svg-icons';

const ImageBox = () => {
  return (
    <div className="image-box">
      <figure className="main-image" data-aos="fade-in" data-aos-delay="500">
        <img width={486} height={589} src="src/assets/images/resource/banner-img-8.png" alt="hero image" />
      </figure>
      <div className="info_block" data-aos="fade-in" data-aos-delay="1000">
        <span className="fas fa-envelope"></span> {/* Font Awesome icon */}
        <p>
          Work Inquiry From <br />
          Ali Tufan
        </p>
      </div>
      <div className="info_block_two" data-aos="fade-in" data-aos-delay="2000">
        <p>10k+ Candidates</p>
        <div className="image">
          <img width={206} height={53} src="src/assets/images/resource/multi-peoples.png" alt="multiple people" />
        </div>
      </div>
      <div className="info_block_three" data-aos="fade-in" data-aos-delay="1500">
      <FontAwesomeIcon icon={faBriefcase} /> {/* Font Awesome icon */}
        <p>Creative Agency</p>
        <span className="sub-text">Startup</span>
        <FontAwesomeIcon icon={faCheck} className="right_icon" />
      </div>
      <div className="info_block_four" data-aos="fade-in" data-aos-delay="2500">
        <FontAwesomeIcon icon={faFile} /> {/* Font Awesome icon */}
        <div className="inner">
          <p>Upload Your CV</p>
          <span className="sub-text">It only takes a few seconds</span>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
