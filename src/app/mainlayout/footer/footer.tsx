"use client"
export default function FooterLayout() {
    return (
        <>
            <style>
                {`
            
            .footer__content__badges__images img {
                max-height: 60px;
                max-width: 300px;
            }
            `}
            </style>
            <footer className="footer">
                <section className="footer__content">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-4">
                                {" "}
                                {/* logo */}
                                <div className="footer__content__logo">
                                    <a href="">
                                        <img
                                            src="https://powerdigitalmarketing.com/wp-content/uploads/2024/10/logo-white.svg"
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
                                {" "}
                                {/* services */}
                                <div className="footer__content__services">
                                    <h3>Learn About Power</h3>
                                    <ul>
                                        <li>
                                            <a href="https://powerdigitalmarketing.com/approach/">Approach</a>
                                        </li>
                                        <li>
                                            <a href="https://powerdigitalmarketing.com/services/">Services</a>
                                        </li>
                                        <li>
                                            <a href="/case-studies/">Results</a>
                                        </li>
                                        <li>
                                            <a href="/nova/">Technology</a>
                                        </li>
                                        <li>
                                            <a href="https://powerdigitalmarketing.com/company/">Company</a>
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
                                {" "}
                                {/* newsletter */}
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
                                            Learn with us as we help clients grow their customers and build
                                            their brands.
                                        </p>
                                        <div className="container-form">
                                            <label className="form-label">Your email</label>
                                            <div
                                                id="hbspt-form-fcecea86-f1b1-4c22-aa17-2a43d073f3d0"
                                                className="hbspt-form"
                                                data-hs-forms-root="true"
                                            >
                                                <form
                                                    id="hsForm_eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                    method="POST"
                                                    acceptCharset="UTF-8"
                                                    encType="multipart/form-data"
                                                    noValidate={false}
                                                    action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/2662469/eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                    className="hs-form-private hsForm_eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d hs-form-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d hs-form-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d_fcecea86-f1b1-4c22-aa17-2a43d073f3d0 hs-form stacked"
                                                    target="target_iframe_eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                    data-instance-id="fcecea86-f1b1-4c22-aa17-2a43d073f3d0"
                                                    data-form-id="eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                    data-portal-id={2662469}
                                                    data-test-id="hsForm_eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                    data-hs-cf-bound="true"
                                                >
                                                    <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
                                                        <label
                                                            id="label-email-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                            className=""
                                                            htmlFor="email-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        >
                                                            <span />
                                                        </label>
                                                        <div className="input">
                                                            <input
                                                                id="email-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="email"
                                                                required={false}
                                                                placeholder="Your email address*"
                                                                type="email"
                                                                className="hs-input"
                                                                inputMode="email"
                                                                autoComplete="email"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="hs-richtext hs-main-font-element">
                                                            <p>
                                                                By submitting I agree that Power Digital Marketing may
                                                                process my data in the manner described in Power Digital
                                                                Marketing’s updated&nbsp;
                                                                <a
                                                                    href="https://trust-center.powerdigitalmarketing.com/doc/trust?rid=6671a6a7daa79be4542dcf89&r=ggd678n3cmyxdjwrnhbos7&_gl=1*1sj9iw0*_gcl_aw*R0NMLjE3MjM4MTY4MzcuQ2p3S0NBanc4ZnUxQmhCc0Vpd0F3RHJzakFhcTBVTUJWX3drcC1IZ0RjRHVLS2xtd3F6YWVRNktvS2RJRWdReVM2LVpzbWFtd0R4UV9Sb0NqaUVRQXZEX0J3RQ..*_gcl_au*MzE3MjIxMDg3LjE3MjM1NTk5MTIuOTIwMzg3NTU3LjE3Mjg2NjIzODQuMTcyODY2MjM4Mw..*_ga*MTg2MDgzOTY3Mi4xNzIzNTU5OTEy*_ga_H7150FWT9R*MTczMDczMTI0OC43OS4wLjE3MzA3MzEyNTAuNTguMC4w"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    Privacy Policy
                                                                </a>
                                                                .
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="hs_marketing_information_opt_in hs-marketing_information_opt_in hs-fieldtype-booleancheckbox field hs-form-field"
                                                        style={{ display: "none" }}
                                                    >
                                                        <div className="input">
                                                            <input
                                                                id="marketing_information_opt_in-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="marketing_information_opt_in"
                                                                className="hs-input"
                                                                type="hidden"
                                                                defaultValue="true"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="hs_utm_campaign__c hs-utm_campaign__c hs-fieldtype-text field hs-form-field"
                                                        style={{ display: "none" }}
                                                    >
                                                        <label
                                                            id="label-utm_campaign__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                            className=""
                                                            htmlFor="utm_campaign__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        >
                                                            <span>utm_campaign</span>
                                                        </label>
                                                        <div className="input">
                                                            <input
                                                                id="utm_campaign__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="utm_campaign__c"
                                                                className="hs-input"
                                                                type="hidden"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="hs_utm_medium__c hs-utm_medium__c hs-fieldtype-text field hs-form-field"
                                                        style={{ display: "none" }}
                                                    >
                                                        <label
                                                            id="label-utm_medium__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                            className=""
                                                            htmlFor="utm_medium__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        >
                                                            <span>utm_medium</span>
                                                        </label>
                                                        <div className="input">
                                                            <input
                                                                id="utm_medium__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="utm_medium__c"
                                                                className="hs-input"
                                                                type="hidden"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="hs_utm_source__c hs-utm_source__c hs-fieldtype-text field hs-form-field"
                                                        style={{ display: "none" }}
                                                    >
                                                        <label
                                                            id="label-utm_source__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                            className=""
                                                            htmlFor="utm_source__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        >
                                                            <span>utm_source</span>
                                                        </label>
                                                        <div className="input">
                                                            <input
                                                                id="utm_source__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="utm_source__c"
                                                                className="hs-input"
                                                                type="hidden"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="hs_utm_content__c hs-utm_content__c hs-fieldtype-text field hs-form-field"
                                                        style={{ display: "none" }}
                                                    >
                                                        <label
                                                            id="label-utm_content__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                            className=""
                                                            htmlFor="utm_content__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        >
                                                            <span>utm_content</span>
                                                        </label>
                                                        <div className="input">
                                                            <input
                                                                id="utm_content__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="utm_content__c"
                                                                className="hs-input"
                                                                type="hidden"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="hs_utm_term__c hs-utm_term__c hs-fieldtype-text field hs-form-field"
                                                        style={{ display: "none" }}
                                                    >
                                                        <label
                                                            id="label-utm_term__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                            className=""
                                                            htmlFor="utm_term__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        >
                                                            <span>utm_term</span>
                                                        </label>
                                                        <div className="input">
                                                            <input
                                                                id="utm_term__c-eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                                name="utm_term__c"
                                                                className="hs-input"
                                                                type="hidden"
                                                                defaultValue=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="hs_submit hs-submit">
                                                        <div
                                                            className="hs-field-desc"
                                                            style={{ display: "none" }}
                                                        />
                                                        <div className="actions">
                                                            <input
                                                                type="submit"
                                                                className="hs-button primary large"
                                                                defaultValue="Submit"
                                                            />
                                                        </div>
                                                    </div>
                                                    <input
                                                        name="hs_context"
                                                        type="hidden"
                                                        defaultValue='{"embedAtTimestamp":"1759956156635","formDefinitionUpdatedAt":"1742337431176","lang":"en","embedType":"REGULAR","renderRawHtml":"true","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36","pageTitle":"Marketing Services for Amazon | Power Digital","pageUrl":"https://powerdigitalmarketing.com/services/amazon-marketing/","referrer":"https://powerdigitalmarketing.com/","isHubSpotCmsGeneratedPage":false,"hutk":"89ec52d5abb5ed9b2145500f12ba4496","__hsfp":840546931,"__hssc":"25046181.2.1759956140440","__hstc":"25046181.89ec52d5abb5ed9b2145500f12ba4496.1759956140440.1759956140440.1759956140440.1","formTarget":"#hbspt-form-fcecea86-f1b1-4c22-aa17-2a43d073f3d0","boolCheckBoxFields":"marketing_information_opt_in","rumScriptExecuteTime":201.79999999701977,"rumTotalRequestTime":650.7999999970198,"rumTotalRenderTime":681.8999999985099,"rumServiceResponseTime":449,"rumFormRenderTime":31.100000001490116,"connectionType":"4g","firstContentfulPaint":0,"largestContentfulPaint":0,"locale":"en","timestamp":1759956159315,"originalEmbedContext":{"portalId":"2662469","formId":"eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d","region":"na1","target":"#hbspt-form-fcecea86-f1b1-4c22-aa17-2a43d073f3d0","isBuilder":false,"isTestPage":false,"isPreview":false,"isMobileResponsive":true},"correlationId":"fcecea86-f1b1-4c22-aa17-2a43d073f3d0","renderedFieldsIds":["email","marketing_information_opt_in","utm_campaign__c","utm_medium__c","utm_source__c","utm_content__c","utm_term__c"],"captchaStatus":"NOT_APPLICABLE","emailResubscribeStatus":"NOT_APPLICABLE","isInsideCrossOriginFrame":false,"source":"forms-embed-1.9949","sourceName":"forms-embed","sourceVersion":"1.9949","sourceVersionMajor":"1","sourceVersionMinor":"9949","allPageIds":{},"_debug_embedLogLines":[{"clientTimestamp":1759956157336,"level":"INFO","message":"Retrieved pageContext values which may be overriden by the embed context: {\"pageTitle\":\"Marketing Services for Amazon | Power Digital\",\"pageUrl\":\"https://powerdigitalmarketing.com/services/amazon-marketing/\",\"referrer\":\"https://powerdigitalmarketing.com/\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36\",\"isHubSpotCmsGeneratedPage\":false}"},{"clientTimestamp":1759956157337,"level":"INFO","message":"Retrieved countryCode property from normalized embed definition response: \"PK\""},{"clientTimestamp":1759956159311,"level":"INFO","message":"Retrieved analytics values from API response which may be overriden by the embed context: {\"hutk\":\"89ec52d5abb5ed9b2145500f12ba4496\"}"}]}'
                                                    />
                                                    <iframe
                                                        name="target_iframe_eeab47c3-dfd3-4f88-9dfa-01d68f3ad42d"
                                                        data-lf-form-tracking-inspected-kn9eq4rpr2x8rlvp="true"
                                                        data-lf-yt-playback-inspected-kn9eq4rpr2x8rlvp="true"
                                                        data-lf-vimeo-playback-inspected-kn9eq4rpr2x8rlvp="true"
                                                        style={{ display: "none" }}
                                                    />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 d-block d-lg-none">
                                {" "}
                                {/* adresses */}
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
                                <div className="footer__content__badges">
                                    <h3>Some Of Our Partners</h3>
                                    <div className="footer__content__badges__images">
                                        <img src="https://powerdigitalmarketing.com/wp-content/uploads/2025/10/tiktok-partner_white.svg" />
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

            </footer>
        </>
    )
}