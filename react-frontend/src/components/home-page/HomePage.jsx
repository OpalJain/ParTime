import About from "../about/About";
import AppSection from "../app-section/AppSection";
import Blog from "../blog/Blog";
import CallToAction from "../call-to-action/CallToAction";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import FooterDefault from "../footer/common-footer";
import Funfact from "../fun-fact-counter/Funfact"
import DefaulHeader2 from "../header/DefaulHeader2"
import MobileMenu from "../header/MobileMenu";
import Hero1 from "../hero/hero-1";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobFeatured1 from "../job-featured/JobFeatured1";
import Testimonial from "../testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <LoginPopup />
      <DefaulHeader2 />
      <MobileMenu />
      <Hero1 />
      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Popular Job Categories</h2>
            <div className="text">2020 jobs live - 293 added today.</div>
          </div>
          <div className="row " data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <JobCategorie1 />
          </div>
        </div>
      </section>
      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Featured Jobs</h2>
            <div className="text">Know your worth and find the job that qualifies your life</div>
          </div>
          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>
          <div className="btn-box">
            {/* Load More Button */}
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container-fluid">
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">Lorem ipsum dolor sit amet elit, sed do eiusmod tempo</div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section>
      <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <About />
          </div>
          <div className="fun-fact-section">
            <div className="row">
              <Funfact/>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">Fresh job-related news content posted each day.</div>
          </div>
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section>
      <section className="app-section">
        <div className="auto-container">
          <AppSection />
        </div>
      </section>
      <CallToAction />
      <FooterDefault />
    </>
  );
};

export default HomePage;
