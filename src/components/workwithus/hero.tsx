import React from 'react'
import pdm from '../../images/pdm-gradient-logo.svg'
import stats1 from '../../images/stats-card-1-image.png'
import stats2 from '../../images/stats-card-2-image.png'
import stats3 from '../../images/stats-card-3-image.png'

export default function hero() {
  return (
    <>
    <section className="work-with-us-hero ">
      <div className="work-with-us-hero__text">
        <span className="badge rounded-pill bg-dark">WORK WITH US</span>
        <div className="title">
          <h2>
            Power Digital is trusted by the world&apos;s fastest growing brands
          </h2>
        </div>
        <div className="stats-text">
          <p>A few stats we’re proud of from 2025:</p>
        </div>
        <div className="stats-cards">
          <div className="stats-cards__card bg-white">
            <div className="card-stat" style={{ flexDirection: "column" }}>
              <div className="card-stat__number">$2B+</div>
              <div
                className="card-stat__description"
                style={{ maxWidth: "100%" }}
              >
                <p>
                  <strong>revenue</strong> generated for clients
                </p>
              </div>
            </div>
            <div className="card-image" style={{ marginTop: "-0px" }}>
              <img src={stats2.src} alt="" />
            </div>
          </div>
          <div className="stats-cards__card bg-dark">
            <div className="card-stat" style={{ flexDirection: "row" }}>
              <div className="card-stat__number">24%</div>
              <div
                className="card-stat__description"
                style={{ maxWidth: "100%" }}
              >
                <p>
                  average <strong>YoY</strong>
                  <br />
                  <strong>growth</strong> clients
                </p>
              </div>
            </div>
            <div className="card-image" style={{ marginTop: "-0px" }}>
              <img src={stats1.src} alt="" />
            </div>
          </div>
          <div className="stats-cards__card bg-primary">
            <div className="card-stat" style={{ flexDirection: "column" }}>
              <div className="card-stat__number">2.6x</div>
              <div
                className="card-stat__description"
                style={{ maxWidth: "50%" }}
              >
                <p>
                  <strong>faster growth</strong> than market standard
                </p>
              </div>
            </div>
            <div className="card-image" style={{ marginTop: "-50px" }}>
              <img src={stats3.src} alt="" />
            </div>
          </div>
        </div>
        <img
          className="work-with-us-hero__text__bg_image"
          src={pdm.src}
          alt=""
        />
      </div>
      <div className="work-with-us-hero__form">
        <div className="title">
          <h3>
            Ready to take your marketing to the{" "}
            <span className="highlighted">next level?</span>
          </h3>
        </div>
        <div
  className="hubspot-form-container"
  id="hs-form-75d7810d-097e-453a-a34c-606558deaa12-5"
  data-hs-forms-root="true"
>
  <form
    id="hsForm_75d7810d-097e-453a-a34c-606558deaa12"
    method="POST"
    acceptCharset="UTF-8"
    encType="multipart/form-data"
    // noValidate=""
    action="https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/2662469/75d7810d-097e-453a-a34c-606558deaa12"
    className="hs-form-private hsForm_75d7810d-097e-453a-a34c-606558deaa12 hs-form-75d7810d-097e-453a-a34c-606558deaa12 hs-form-75d7810d-097e-453a-a34c-606558deaa12_94709159-ff0f-4c08-8eb1-e95721eab6ee hs-form stacked"
    target="target_iframe_75d7810d-097e-453a-a34c-606558deaa12"
    data-instance-id="94709159-ff0f-4c08-8eb1-e95721eab6ee"
    data-form-id="75d7810d-097e-453a-a34c-606558deaa12"
    data-portal-id={2662469}
    data-test-id="hsForm_75d7810d-097e-453a-a34c-606558deaa12"
  >
    <fieldset className="form-columns-0">
      <div className="hs-richtext hs-main-font-element">
        <h2>Ready to take your marketing to the next level?</h2>
      </div>
    </fieldset>
    <fieldset className="form-columns-2">
      <div className="hs_firstname hs-firstname hs-fieldtype-text field hs-form-field">
        <label
          id="label-firstname-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="firstname-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>First Name</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="firstname-75d7810d-097e-453a-a34c-606558deaa12"
            name="firstname"
            // required=""
            placeholder="First Name"
            type="text"
            className="hs-input"
            inputMode="text"
            autoComplete="given-name"
            defaultValue=""
            // fdprocessedid="aws5t"
          />
        </div>
      </div>
      <div className="hs_lastname hs-lastname hs-fieldtype-text field hs-form-field">
        <label
          id="label-lastname-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="lastname-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Last Name</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="lastname-75d7810d-097e-453a-a34c-606558deaa12"
            name="lastname"
            // required=""
            placeholder="Last Name"
            type="text"
            className="hs-input"
            inputMode="text"
            autoComplete="family-name"
            defaultValue=""
            // fdprocessedid="o1ntw"
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-2">
      <div className="hs_email hs-email hs-fieldtype-text field hs-form-field">
        <label
          id="label-email-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="email-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Work Email</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="email-75d7810d-097e-453a-a34c-606558deaa12"
            name="email"
            // required=""
            placeholder="Work Email"
            type="email"
            className="hs-input"
            inputMode="email"
            autoComplete="email"
            defaultValue=""
            // fdprocessedid="w8xfmm"
          />
        </div>
      </div>
      <div className="hs_phone hs-phone hs-fieldtype-phonenumber field hs-form-field">
        <label
          id="label-phone-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="phone-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Phone Number</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="phone-75d7810d-097e-453a-a34c-606558deaa12"
            name="phone"
            // required=""
            placeholder="Phone Number"
            type="tel"
            className="hs-input"
            inputMode="tel"
            autoComplete="tel"
            defaultValue=""
            // fdprocessedid="j609h"
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-2">
      <div className="hs_company hs-company hs-fieldtype-text field hs-form-field">
        <label
          id="label-company-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="company-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Company name</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="company-75d7810d-097e-453a-a34c-606558deaa12"
            name="company"
            // required=""
            placeholder="Company name"
            type="text"
            className="hs-input"
            inputMode="text"
            autoComplete="organization"
            defaultValue=""
            // fdprocessedid="lj7jei"
          />
        </div>
      </div>
      <div className="hs_website hs-website hs-fieldtype-text field hs-form-field">
        <label
          id="label-website-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="website-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Website URL</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="website-75d7810d-097e-453a-a34c-606558deaa12"
            name="website"
            // required=""
            placeholder="Website URL"
            type="text"
            className="hs-input"
            inputMode="url"
            defaultValue=""
            // fdprocessedid="63hx"
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div className="hs_jobtitle hs-jobtitle hs-fieldtype-text field hs-form-field">
        <label
          id="label-jobtitle-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="jobtitle-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Your job title</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <input
            id="jobtitle-75d7810d-097e-453a-a34c-606558deaa12"
            name="jobtitle"
            // required=""
            placeholder="Your job title"
            type="text"
            className="hs-input"
            inputMode="text"
            autoComplete="organization-title"
            defaultValue=""
            // fdprocessedid="ct0ier"
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div className="hs_how_did_you_hear_about_us__c hs-how_did_you_hear_about_us__c hs-fieldtype-textarea field hs-form-field">
        <label
          id="label-how_did_you_hear_about_us__c-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="how_did_you_hear_about_us__c-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>How did you hear about us?</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <textarea
            id="how_did_you_hear_about_us__c-75d7810d-097e-453a-a34c-606558deaa12"
            className="hs-input hs-fieldtype-textarea"
            name="how_did_you_hear_about_us__c"
            // required=""
            placeholder="How did you hear about us?"
            defaultValue={""}
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div className="hs_message hs-message hs-fieldtype-textarea field hs-form-field">
        <label
          id="label-message-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="message-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>How can we help? Tell us what you are looking for.</span>
          <span className="hs-form-required">*</span>
        </label>
        <div className="input">
          <textarea
            id="message-75d7810d-097e-453a-a34c-606558deaa12"
            className="hs-input hs-fieldtype-textarea"
            name="message"
            // required=""
            placeholder="How can we help? Tell us what you are looking for."
            defaultValue={""}
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-0">
      <div className="hs-richtext hs-main-font-element">
        <p>
          By submitting I agree that Power Digital Marketing may process my data
          in the manner described in Power Digital Marketing’s updated&nbsp;
          <a
            href="https://trust-center.powerdigitalmarketing.com/doc/trust?rid=6671a6a7daa79be4542dcf89&r=ggd678n3cmyxdjwrnhbos7&_gl=1*1sj9iw0*_gcl_aw*R0NMLjE3MjM4MTY4MzcuQ2p3S0NBanc4ZnUxQmhCc0Vpd0F3RHJzakFhcTBVTUJWX3drcC1IZ0RjRHVLS2xtd3F6YWVRNktvS2RJRWdReVM2LVpzbWFtd0R4UV9Sb0NqaUVRQXZEX0J3RQ..*_gcl_au*MzE3MjIxMDg3LjE3MjM1NTk5MTIuOTIwMzg3NTU3LjE3Mjg2NjIzODQuMTcyODY2MjM4Mw..*_ga*MTg2MDgzOTY3Mi4xNzIzNTU5OTEy*_ga_H7150FWT9R*MTczMDczMTI0OC43OS4wLjE3MzA3MzEyNTAuNTguMC4w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </p>
        <p>&nbsp;</p>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_proposal_form_submission_ hs-proposal_form_submission_ hs-fieldtype-booleancheckbox field hs-form-field"
        style={{ display: "none" }}
      >
        <div className="input">
          <input
            id="proposal_form_submission_-75d7810d-097e-453a-a34c-606558deaa12"
            name="proposal_form_submission_"
            className="hs-input"
            type="hidden"
            defaultValue="true"
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_marketing_information_opt_in hs-marketing_information_opt_in hs-fieldtype-booleancheckbox field hs-form-field"
        style={{ display: "none" }}
      >
        <div className="input">
          <input
            id="marketing_information_opt_in-75d7810d-097e-453a-a34c-606558deaa12"
            name="marketing_information_opt_in"
            className="hs-input"
            type="hidden"
            defaultValue="true"
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_utm_campaign__c hs-utm_campaign__c hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-utm_campaign__c-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="utm_campaign__c-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>utm_campaign</span>
        </label>
        <div className="input">
          <input
            id="utm_campaign__c-75d7810d-097e-453a-a34c-606558deaa12"
            name="utm_campaign__c"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_utm_term__c hs-utm_term__c hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-utm_term__c-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="utm_term__c-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>utm_term</span>
        </label>
        <div className="input">
          <input
            id="utm_term__c-75d7810d-097e-453a-a34c-606558deaa12"
            name="utm_term__c"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_utm_medium__c hs-utm_medium__c hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-utm_medium__c-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="utm_medium__c-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>utm_medium</span>
        </label>
        <div className="input">
          <input
            id="utm_medium__c-75d7810d-097e-453a-a34c-606558deaa12"
            name="utm_medium__c"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_utm_source__c hs-utm_source__c hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-utm_source__c-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="utm_source__c-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>utm_source</span>
        </label>
        <div className="input">
          <input
            id="utm_source__c-75d7810d-097e-453a-a34c-606558deaa12"
            name="utm_source__c"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_utm_content__c hs-utm_content__c hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-utm_content__c-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="utm_content__c-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>utm_content</span>
        </label>
        <div className="input">
          <input
            id="utm_content__c-75d7810d-097e-453a-a34c-606558deaa12"
            name="utm_content__c"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_clearbit_annual_revenue_range hs-clearbit_annual_revenue_range hs-fieldtype-select field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-clearbit_annual_revenue_range-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="clearbit_annual_revenue_range-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Clearbit Annual Revenue Range</span>
        </label>
        <div className="input">
          <input
            id="clearbit_annual_revenue_range-75d7810d-097e-453a-a34c-606558deaa12"
            name="clearbit_annual_revenue_range"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_clearbit_sub_industry hs-clearbit_sub_industry hs-fieldtype-select field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-clearbit_sub_industry-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="clearbit_sub_industry-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Clearbit Sub Industry</span>
        </label>
        <div className="input">
          <input
            id="clearbit_sub_industry-75d7810d-097e-453a-a34c-606558deaa12"
            name="clearbit_sub_industry"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_numberofemployees hs-numberofemployees hs-fieldtype-number field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-numberofemployees-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="numberofemployees-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Employees</span>
        </label>
        <div className="input">
          <input
            id="numberofemployees-75d7810d-097e-453a-a34c-606558deaa12"
            name="numberofemployees"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_address hs-address hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-address-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="address-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Street address</span>
        </label>
        <div className="input">
          <input
            id="address-75d7810d-097e-453a-a34c-606558deaa12"
            name="address"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_city hs-city hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-city-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="city-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>City</span>
        </label>
        <div className="input">
          <input
            id="city-75d7810d-097e-453a-a34c-606558deaa12"
            name="city"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_state hs-state hs-fieldtype-select field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-state-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="state-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>State/Region</span>
        </label>
        <div className="input">
          <input
            id="state-75d7810d-097e-453a-a34c-606558deaa12"
            name="state"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_country hs-country hs-fieldtype-select field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-country-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="country-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Country/Region</span>
        </label>
        <div className="input">
          <input
            id="country-75d7810d-097e-453a-a34c-606558deaa12"
            name="country"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_zip hs-zip hs-fieldtype-text field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-zip-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="zip-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Postal code</span>
        </label>
        <div className="input">
          <input
            id="zip-75d7810d-097e-453a-a34c-606558deaa12"
            name="zip"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_clearbit_company_tags hs-clearbit_company_tags hs-fieldtype-checkbox field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-clearbit_company_tags-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="clearbit_company_tags-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Clearbit Company Tags</span>
        </label>
        <div className="input">
          <input
            id="clearbit_company_tags-75d7810d-097e-453a-a34c-606558deaa12"
            name="clearbit_company_tags"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <fieldset className="form-columns-1">
      <div
        className="hs_annualrevenue hs-annualrevenue hs-fieldtype-number field hs-form-field"
        style={{ display: "none" }}
      >
        <label
          id="label-annualrevenue-75d7810d-097e-453a-a34c-606558deaa12"
          className=""
          htmlFor="annualrevenue-75d7810d-097e-453a-a34c-606558deaa12"
        >
          <span>Annual revenue</span>
        </label>
        <div className="input">
          <input
            id="annualrevenue-75d7810d-097e-453a-a34c-606558deaa12"
            name="annualrevenue"
            className="hs-input"
            type="hidden"
            defaultValue=""
          />
        </div>
      </div>
    </fieldset>
    <div className="hs_submit hs-submit">
      <div className="hs-field-desc" style={{ display: "none" }} />
      <div className="actions">
        <input
          type="submit"
          className="hs-button primary large"
          defaultValue="Get in Touch"
        //   fdprocessedid="b21mmi"
        />
      </div>
    </div>
    <input
      name="hs_context"
      type="hidden"
      defaultValue='{"embedAtTimestamp":"1761149497583","formDefinitionUpdatedAt":"1742916336700","lang":"en","clonedFromForm":"5829eb37-1a84-4062-a5e5-b2abfeebf02b","notifyHubSpotOwner":"true","renderRawHtml":"true","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36","pageTitle":"Work with us - Power Digital Marketing","pageUrl":"https://powerdigitalmarketing.com/work-with-us/","referrer":"https://powerdigitalmarketing.com/case-studies/","isHubSpotCmsGeneratedPage":false,"hutk":"361f5f3b4d0113df865eb850ed0d1c35","__hssc":"25046181.1.1761149324971","__hstc":"25046181.361f5f3b4d0113df865eb850ed0d1c35.1758208626191.1760987754479.1761149324971.24","formTarget":"#hs-form-75d7810d-097e-453a-a34c-606558deaa12-5","boolCheckBoxFields":"proposal_form_submission_,marketing_information_opt_in","rumScriptExecuteTime":2295.4000000953674,"rumTotalRequestTime":7289,"rumTotalRenderTime":7736.900000095367,"rumServiceResponseTime":4993.599999904633,"rumFormRenderTime":447.90000009536743,"connectionType":"4g","firstContentfulPaint":0,"largestContentfulPaint":0,"locale":"en","timestamp":1761149500370,"originalEmbedContext":{"portalId":"2662469","formId":"75d7810d-097e-453a-a34c-606558deaa12","region":"na1","target":"#hs-form-75d7810d-097e-453a-a34c-606558deaa12-5","isBuilder":false,"isTestPage":false,"isPreview":false,"isMobileResponsive":true},"correlationId":"94709159-ff0f-4c08-8eb1-e95721eab6ee","renderedFieldsIds":["firstname","lastname","email","phone","company","website","jobtitle","how_did_you_hear_about_us__c","message","proposal_form_submission_","marketing_information_opt_in","utm_campaign__c","utm_term__c","utm_medium__c","utm_source__c","utm_content__c","clearbit_annual_revenue_range","clearbit_sub_industry","numberofemployees","address","city","state","country","zip","clearbit_company_tags","annualrevenue"],"captchaStatus":"NOT_APPLICABLE","emailResubscribeStatus":"NOT_APPLICABLE","isInsideCrossOriginFrame":false,"source":"forms-embed-1.9978","sourceName":"forms-embed","sourceVersion":"1.9978","sourceVersionMajor":"1","sourceVersionMinor":"9978","allPageIds":{},"_debug_embedLogLines":[{"clientTimestamp":1761149498835,"level":"INFO","message":"Retrieved pageContext values which may be overriden by the embed context: {\"pageTitle\":\"Work with us - Power Digital Marketing\",\"pageUrl\":\"https://powerdigitalmarketing.com/work-with-us/\",\"referrer\":\"https://powerdigitalmarketing.com/case-studies/\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36\",\"isHubSpotCmsGeneratedPage\":false}"},{"clientTimestamp":1761149499915,"level":"INFO","message":"Retrieved countryCode property from normalized embed definition response: \"PK\""}]}'
    />
    <iframe
      name="target_iframe_75d7810d-097e-453a-a34c-606558deaa12"
      data-lf-form-tracking-inspected-kn9eq4rpr2x8rlvp="true"
      data-lf-yt-playback-inspected-kn9eq4rpr2x8rlvp="true"
      data-lf-vimeo-playback-inspected-kn9eq4rpr2x8rlvp="true"
      style={{ display: "none" }}
    />
  </form>
</div>

      </div>
    </section>
    </>
  )
}
