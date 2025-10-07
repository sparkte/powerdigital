import Image from "next/image";
import LogoWhiteSvg from "../../images/logo-white.svg";
import FadeUp from "./FadeUp";
export default function footer() {
  return (
    <>
    
    <footer className="footer">
    <section className="interested-form">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="interested-form__content">
             <FadeUp> <h2 className="fade-up">
                Ready to be <span>undeniable?</span>
              </h2></FadeUp>
              
              <div className="interested-form__two-columns">
                <FadeUp>
                <div className="text fade-up">
                  <p>
                    For brands and enterprise companies that demand digital
                    marketing strategies with proven impact, Power is ready to
                    be your partner in business growth.
                  </p>
                  <div className="text-form">
                    <p>Request your free marketing audit to get started.</p>
                  </div>
                  <a href="#" className="btn btn-secondary" id="interestedForm">
                    <div className="icon">
                      <span>Get in touch</span>
                      <i className="icon-arrow-up-right" />
                    </div>
                  </a>
                </div></FadeUp>
                <div className="form-suscribe">
                  <div
                    className="hubspot-form-container"
                    id="hs-form-75d7810d-097e-453a-a34c-606558deaa12-2"
                  ></div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer__content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4">
            <div className="footer__content__logo">
              <a href="">
                <Image
                  src={LogoWhiteSvg}
                  alt="Power Digital Marketing"
                />
              </a>
              <p>
                A leading, privately held growth marketing agency helping brands
                ignite revenue and brand recognition.
              </p>
            </div>
            <div className="footer__content__addres d-none d-lg-block">
              <div className="gfooter__addresses">
                <div className="address-container">
                  <a
                    href="https://powerdigitalmarketing.com/san-diego/"
                    className="address-link"
                  >
                    <p>San Diego</p>
                  </a>
                  <address>
                    2251 San Diego Ave.
                    <br />
                    San Diego, CA 92110
                  </address>
                </div>
                <div className="address-container">
                  <a
                    href="https://powerdigitalmarketing.com/new-york/"
                    className="address-link"
                  >
                    <p>New York</p>
                  </a>
                  <address>
                    407 Broome St
                    <br />
                    New York, NY 10013
                  </address>
                </div>
                <div className="address-container">
                  <a
                    href="https://powerdigitalmarketing.com/medellin/"
                    className="address-link"
                  >
                    <p>Medellín</p>
                  </a>
                  <address>
                    Cra. 43A #5A - 113
                    <br />
                    One Plaza Business Center
                    <br />
                    Medellín, Colombia
                  </address>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="footer__content__services">
              <h3>Learn About Power</h3>
              <ul>
                <li>
                  <a href="https://powerdigitalmarketing.com/approach/">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="https://powerdigitalmarketing.com/services/">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/case-studies/">Results</a>
                </li>
                <li>
                  <a href="/nova/">Technology</a>
                </li>
                <li>
                  <a href="https://powerdigitalmarketing.com/company/">
                    Company
                  </a>
                </li>
                <li>
                  <a href="/company/careers/">Careers</a>
                </li>
                <li>
                  <a href="https://powerdigitalmarketing.com/blog/">Blog</a>
                </li>
                <li>
                  <a href="/work-with-us/">Work With Us</a>
                </li>
                <li>
                  <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?id=661f051741dd1fbb4536c04d&r=ggd678n3cmyxdjwrnhbos7&_gl=1*1o7bths*_gcl_au*MTI5MTkwMzE1MC4xNzMyNTY0Mzg4*_ga*MTI1MTU5NTg5MC4xNzMyNTY0Mzg4*_ga_H7150FWT9R*MTczMzQyMzUyNC4yOC4xLjE3MzM0MzYyOTkuNTIuMC4w">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?rid=6671a6a7daa79be4542dcf89&r=ggd678n3cmyxdjwrnhbos7&_gl=1*1wrlvuk*_gcl_au*MTI5MTkwMzE1MC4xNzMyNTY0Mzg4*_ga*MTI1MTU5NTg5MC4xNzMyNTY0Mzg4*_ga_H7150FWT9R*MTczMzQyMzUyNC4yOC4xLjE3MzM0MzYyMzcuMzEuMC4w">
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="footer__content__newsletter">
              <div className="client-cta">
                <h3>Already a client?</h3>
                <a
                  href="https://prod-nova.us.auth0.com/u/login"
                  className="btn btn-secondary"
                >
                  <div className="icon">
                    <span>Login</span>
                    <i className="icon-arrow-up-right" />
                  </div>
                </a>
              </div>
              <div className="form-newsletter">
                <h3>Newsletter</h3>
                <p>
                  Learn with us as we help clients grow their customers and
                  build their brands.
                </p>
                <div className="container-form">
                  <label className="form-label">Your email</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 d-block d-lg-none">
            <div className="footer__content__addres">
              <div className="gfooter__addresses">
                <div className="address-container">
                  <p>San Diego</p>
                  <address>
                    2251 San Diego Ave,
                    <br />
                    San Diego, CA 92110
                  </address>
                </div>
                <div className="address-container">
                  <p>New York</p>
                  <address>
                    407 Broome St
                    <br />
                    New York, NY 10013
                  </address>
                </div>
                <div className="address-container">
                  <p>Boston</p>
                  <address>
                    134 Turnpike Road
                    <br />
                    Suite 100
                    <br />
                    Southborough, MA 01772
                  </address>
                </div>
                <div className="address-container">
                  <p>Columbus</p>
                  <address>
                    6631 Commerce Pkwy
                    <br />
                    Suite A
                    <br />
                    Dublin, OH 43017
                  </address>
                </div>
                <div className="address-container">
                  <p>Washington, D.C.</p>
                  <address>
                    1201 Wilson Blvd
                    <br />
                    Ste 28-111
                    <br />
                    Arlington, VA 22209
                  </address>
                </div>
                <div className="address-container">
                  <p>Medellín</p>
                  <address>
                    Cra. 43A #5A - 113
                    <br />
                    One Plaza Business Center
                    <br />
                    Medellín, Colombia
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__content__terms">
              <p>
                © 2024 Power Digital Marketing. All rights reserved.{" "}
                <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?rid=6671a6a7daa79be4542dcf89&r=ggd678n3cmyxdjwrnhbos7&_gl=1*qamdhs*_gcl_au*MTMyODEwODAzLjE3MjgzMjU4MTA.*_ga*MTEwMTQyMTg0MC4xNjg5MDI1NTI5*_ga_H7150FWT9R*MTczMzI2MTg3OC4yMTYuMC4xNzMzMjYxODgwLjU4LjAuMA..">
                  Privacy policy.
                </a>{" "}
                <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?id=661f051741dd1fbb4536c04d&r=ggd678n3cmyxdjwrnhbos7&_gl=1*n622g1*_gcl_au*MTMyODEwODAzLjE3MjgzMjU4MTA.*_ga*MTEwMTQyMTg0MC4xNjg5MDI1NTI5*_ga_H7150FWT9R*MTczMzI2MTg3OC4yMTYuMC4xNzMzMjYxODgzLjU1LjAuMA..">
                  Cookie policy.
                </a>{" "}
                <a href="https://trust-center.powerdigitalmarketing.com/doc/trust?id=6615d2cf8c676175f232105e&r=ggd678n3cmyxdjwrnhbos7&_gl=1*yx4rrb*_gcl_au*MTMyODEwODAzLjE3MjgzMjU4MTA.*_ga*MTEwMTQyMTg0MC4xNjg5MDI1NTI5*_ga_H7150FWT9R*MTczMzI2MTg3OC4yMTYuMC4xNzMzMjYxODkwLjQ4LjAuMA..">
                  Terms of use.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Begin Accessible Web A11Y Center Button Snippet */}
    {/* End Accessible Web A11Y Center Button Snippet */}
    {/* Consent Management powered by Complianz | GDPR/CCPA Cookie Consent https://wordpress.org/plugins/complianz-gdpr */}
    <div id="cmplz-cookiebanner-container">
      <div
        className="cmplz-cookiebanner cmplz-hidden banner-1 banner-a optout cmplz-bottom-right cmplz-categories-type-view-preferences"
        aria-modal="true"
        data-nosnippet="true"
        role="dialog"
        aria-live="polite"
        aria-labelledby="cmplz-header-1-optout"
        aria-describedby="cmplz-message-1-optout"
      >
        <div className="cmplz-header">
          <div className="cmplz-logo" />
          <div className="cmplz-title" id="cmplz-header-1-optout">
            Manage Consent
          </div>
          <div
            className="cmplz-close"
            tabIndex={0}
            role="button"
            aria-label="Close dialog"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className="svg-inline--fa fa-times fa-w-11"
              role="Image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              />
            </svg>
          </div>
        </div>
        <div className="cmplz-divider cmplz-divider-header" />
        <div className="cmplz-body">
          <div className="cmplz-message" id="cmplz-message-1-optout">
            To provide the best experiences, we use technologies like cookies to
            store and/or access device information. Consenting to these
            technologies will allow us to process data such as browsing behavior
            or unique IDs on this site. Not consenting or withdrawing consent,
            may adversely affect certain features and functions.
          </div>
          {/* categories start */}
          <div className="cmplz-categories">
            <details className="cmplz-category cmplz-functional">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Functional</span>
                  <span className="cmplz-always-active">
                    <span className="cmplz-banner-checkbox">
                      <input
                        type="checkbox"
                        id="cmplz-functional-optout"
                        data-category="cmplz_functional"
                        className="cmplz-consent-checkbox cmplz-functional"
                        size={40}
                        defaultValue={1}
                      />
                      <label
                        className="cmplz-label"
                        htmlFor="cmplz-functional-optout"
                        tabIndex={0}
                      >
                        <span className="screen-reader-text">Functional</span>
                      </label>
                    </span>
                    Always active{" "}
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-functional">
                  The technical storage or access is strictly necessary for the
                  legitimate purpose of enabling the use of a specific service
                  explicitly requested by the subscriber or user, or for the
                  sole purpose of carrying out the transmission of a
                  communication over an electronic communications network.
                </span>
              </div>
            </details>
            <details className="cmplz-category cmplz-preferences">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Preferences</span>
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-preferences-optout"
                      data-category="cmplz_preferences"
                      className="cmplz-consent-checkbox cmplz-preferences"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-preferences-optout"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Preferences</span>
                    </label>
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-preferences">
                  The technical storage or access is necessary for the
                  legitimate purpose of storing preferences that are not
                  requested by the subscriber or user.
                </span>
              </div>
            </details>
            <details className="cmplz-category cmplz-statistics">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Statistics</span>
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-statistics-optout"
                      data-category="cmplz_statistics"
                      className="cmplz-consent-checkbox cmplz-statistics"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-statistics-optout"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Statistics</span>
                    </label>
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-statistics">
                  The technical storage or access that is used exclusively for
                  statistical purposes.
                </span>
                <span className="cmplz-description-statistics-anonymous">
                  The technical storage or access that is used exclusively for
                  anonymous statistical purposes. Without a subpoena, voluntary
                  compliance on the part of your Internet Service Provider, or
                  additional records from a third party, information stored or
                  retrieved for this purpose alone cannot usually be used to
                  identify you.
                </span>
              </div>
            </details>
            <details className="cmplz-category cmplz-marketing">
              <summary>
                <span className="cmplz-category-header">
                  <span className="cmplz-category-title">Marketing</span>
                  <span className="cmplz-banner-checkbox">
                    <input
                      type="checkbox"
                      id="cmplz-marketing-optout"
                      data-category="cmplz_marketing"
                      className="cmplz-consent-checkbox cmplz-marketing"
                      size={40}
                      defaultValue={1}
                    />
                    <label
                      className="cmplz-label"
                      htmlFor="cmplz-marketing-optout"
                      tabIndex={0}
                    >
                      <span className="screen-reader-text">Marketing</span>
                    </label>
                  </span>
                  <span className="cmplz-icon cmplz-open">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={18}
                    >
                      <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
                    </svg>
                  </span>
                </span>
              </summary>
              <div className="cmplz-description">
                <span className="cmplz-description-marketing">
                  The technical storage or access is required to create user
                  profiles to send advertising, or to track the user on a
                  website or across several websites for similar marketing
                  purposes.
                </span>
              </div>
            </details>
          </div>
          {/* categories end */}
        </div>
        <div className="cmplz-links cmplz-information">
          <a
            className="cmplz-link cmplz-manage-options cookie-statement"
            href="#"
            data-relative_url="#cmplz-manage-consent-container"
          >
            Manage options
          </a>
          <a
            className="cmplz-link cmplz-manage-third-parties cookie-statement"
            href="#"
            data-relative_url="#cmplz-cookies-overview"
          >
            Manage services
          </a>
          <a
            className="cmplz-link cmplz-manage-vendors tcf cookie-statement"
            href="#"
            data-relative_url="#cmplz-tcf-wrapper"
          >
            Manage {"{"}vendor_count{"}"} vendors
          </a>
          <a
            className="cmplz-link cmplz-external cmplz-read-more-purposes tcf"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://cookiedatabase.org/tcf/purposes/"
          >
            Read more about these purposes
          </a>
        </div>
        <div className="cmplz-divider cmplz-footer" />
        <div className="cmplz-buttons">
          <button className="cmplz-btn cmplz-accept">Accept</button>
          <button className="cmplz-btn cmplz-deny">Deny</button>
          <button className="cmplz-btn cmplz-view-preferences">
            View preferences
          </button>
          <button className="cmplz-btn cmplz-save-preferences">
            Save preferences
          </button>
          <a
            className="cmplz-btn cmplz-manage-options tcf cookie-statement"
            href="#"
            data-relative_url="#cmplz-manage-consent-container"
          >
            View preferences
          </a>
        </div>
        <div className="cmplz-links cmplz-documents">
          <a
            className="cmplz-link cookie-statement"
            href="#"
            data-relative_url=""
          >
            {"{"}title{"}"}
          </a>
          <a
            className="cmplz-link privacy-statement"
            href="#"
            data-relative_url=""
          >
            {"{"}title{"}"}
          </a>
          <a className="cmplz-link impressum" href="#" data-relative_url="">
            {"{"}title{"}"}
          </a>
        </div>
      </div>
    </div>
    <div id="cmplz-manage-consent" data-nosnippet="true">
      <button className="cmplz-btn cmplz-hidden cmplz-manage-consent manage-consent-1">
        Manage consent
      </button>
    </div>
    {/* Clearbit Tag */}
    {/* End Clearbit Tag */}
    {/* Chilipiper Script Start */}
    {/* Chilipiper Script END */}
  </footer>
    </>
  )
}
