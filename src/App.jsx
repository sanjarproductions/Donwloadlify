import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      window.fnames = new Array();
      window.ftypes = new Array();
      window.fnames[0] = 'EMAIL';
      window.ftypes[0] = 'email';
      window.fnames[1] = 'FNAME';
      window.ftypes[1] = 'text';
      window.fnames[2] = 'LNAME';
      window.ftypes[2] = 'text';
      window.fnames[3] = 'ADDRESS';
      window.ftypes[3] = 'address';
      window.fnames[4] = 'PHONE';
      window.ftypes[4] = 'phone';
      window.fnames[5] = 'BIRTHDAY';
      window.ftypes[5] = 'birthday';
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="flex">
            <strong className="logo">DOWNLOADLIFY</strong>
            <p className="year__made">© 2024</p>
            {/* <button className="menu__btn" id="openBtn">MENU</button> */}
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="container">
          <h1>Download <span>Anything</span> From YouTube</h1>
          <p>Without Annoying & Spammy Ads</p>
        </div>
      </div>
      <div className="form">
        <div className="container">
          <div id="mc_embed_shell">
            <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
            <div id="mc_embed_signup">
              <form action="https://gmail.us13.list-manage.com/subscribe/post?u=61c49ab960dddaff5686f818b&amp;id=7093136cbd&amp;f_id=004660e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" style={{ margin: "0px" }}>
                <div id="mc_embed_signup_scroll">
                  <h2>Join Waitlist</h2>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                  </div>
                  <div id="mce-responses" className="clear foot" style={{ margin: "0px", padding: "0px" }}>
                    <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                    <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                  </div>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                    <input type="text" name="b_61c49ab960dddaff5686f818b_7093136cbd" tabIndex="-1" />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                      <p style={{ margin: "0px auto" }}>
                        <a href="http://eepurl.com/iSFBgg" title="Mailchimp - email marketing made easy and fun">
                          <span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">

          <div>
            <a className="content__link" href="mailto:sanjarkama26@gmail.com">FEEDBACK</a>
            <a className="content__link" href="https://buymeacoffee.com/sanjar">DONATE</a>
          </div>

          <div className="links flex-direct flex-direct__links">
            <a href="https://www.instagram.com/downloadlify">INSTAGRAM</a>
            <a href="https://www.youtube.com/downloadlify">YOUTUBE</a>
            <a href="https://www.x.com/downloadlify">X</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;