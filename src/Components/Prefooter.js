import React from "react";

function Prefooter() {
  return (
    <div className="page-prefooter">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h2>About</h2>
            <p>
              "📚 Welcome to our library – Your gateway to knowledge and
              discovery. Explore our vast collection of books, digital
              resources, and community programs. 📖 Happy reading!"
            </p>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h2>Subscribe Email</h2>
            <div className="subscribe-form">
              <form action="#">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="mail@email.com"
                    className="form-control"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h2>Follow Us On</h2>
            <ul className="social-icons">
              {["facebook", "twitter", "linkedin", "youtube"].map(
                (platform) => (
                  <li key={platform}>
                    <a href="#" className={platform}></a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
            <h2>Contacts</h2>
            <address>
              Phone: 800 123 3456
              <br />
              Email: <a href="mailto:info@metronic.com">info@metronic.com</a>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prefooter;
