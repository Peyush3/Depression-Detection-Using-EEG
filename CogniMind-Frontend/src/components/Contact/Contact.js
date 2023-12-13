import "./Contact.css";

function Contact() {
  return (
    <div className="App">
      <div className="container contact-container">
        <div className="row contact-row">
          <div className="col-4 contact-body-left">
            <h4 className="mb-3 contact-header-left">Contact Us</h4>
            <div className="d-flex flex-column">
              <div className="p-2 row">
                <div className="col-4 svg-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-signpost contact-svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0zM12.532 5l1.666 2-1.666 2H2V5h10.532z" />
                  </svg>
                </div>
                <div className="col-8 svg-right-col">
                  <span className="contact-col-left-headers">Address</span>
                  <p className="contact-col-left-headers-text">
                    PEC, Sector 12, Chandigarh, 160012
                  </p>
                </div>
              </div>
              <div className="p-2 row">
                <div className="col-4 svg-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-telephone contact-svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </div>
                <div className="col-8 svg-right-col">
                  <span className="contact-col-left-headers">Phone</span>
                  <p className="contact-col-left-headers-text"> 1234567890 </p>
                </div>
              </div>
              <div className="p-2 row">
                <div className="col-4 svg-col">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-envelope contact-svg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <div className="col-8 svg-right-col">
                  <span className="contact-col-left-headers">Mail</span>
                  <p className="contact-col-left-headers-text">sample@mail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 contact-body-right">
            <form>
              <h4 className="mb-3 contact-header-right">Get in touch</h4>
              <div className="row">
                <div className="col-md">
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label contact-labels">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      aria-describedby="fnameHelp"
                    />
                  </div>
                </div>
                <div className="col-md">
                  <div className="mb-3">
                    <label htmlFor="lname" className="form-label contact-labels">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      aria-describedby="lnameHelp"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label contact-labels"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label contact-labels">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  aria-describedby="subjectHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label contact-labels">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="button" className="btn btn-info">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
