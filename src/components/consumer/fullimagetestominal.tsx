import RenewalByAndersen from '../../images/Renewal-By-Andersen.avif';
export default function fullimagetestominal() {
  return (
     <section className="full-image-testimonial bg-dark  section-inner">
          <img
            className="full-image-testimonial__image"
            src={RenewalByAndersen.src}
            alt=""
            style={{ maxHeight: "px" }}
          />
          <article className="2 note fade-up is-article-inner ">
            <div className="note__text">
              <p>
                <em>
                  “Since making the decision to partner with Power Digital,
                  performance has been on a high performance trajectory and seen now
                  as the new standard. The entire Power team truly understands our
                  business and the consumer decision and lifecycle for our Renewal
                  by Andersen prospects. It is this business knowledge that has
                  elevated our leads, appointments and close rates to the highest
                  levels we have ever seen. Power genuinely cares about our business
                  and objectives, they are always looking for new ways together to
                  continue to expand and accelerate performance even further.”
                </em>
              </p>
            </div>
            <div className="testimonial-person">
              <div className="person-info">
                <div className="person-photo">
                  <img src="img" alt="" srcSet="" />
                </div>
                <div className="person-details">
                  <h3 className="person-name interface-small">Jason Troupin </h3>
                  <p className="person-title">
                    Digital Marketing Supervisor @ Renewal by Andersen
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>
  )
}
