import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";

const Hero1 = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up" data-aos-delay="500">
              <div className="title-box">
                <h3>
                  There Are <span className="colored">93,178</span> Postings Here
                  <br /> For you!
                </h3>
                <div className="text">
                  Find Jobs, Employment & Career Opportunities
                </div>
              </div>
              <div className="job-search-form">
                <SearchForm />
              </div>
              <PopularSearch />
            </div>
          </div>
          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
