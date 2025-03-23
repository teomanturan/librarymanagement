import HeaderTop from "../Components/HeaderTop";
import HeaderMenu from "../Components/HeaderMenu";
import Prefooter from "../Components/Prefooter";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";

function FormBook() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gsm, setGsm] = useState("");
  const [booksBorrowed, setBooksBorrowed] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const myButtonClick = async (event) => {
    event.preventDefault();
    let requestBody = {
      UserName: name,
      UserSurname: surname,
      EMail: email,
      GSM: gsm,
      BooksBorrowed: booksBorrowed,
      LoanPeriod: loanPeriod,
      Address: address,
      DateOfBirth: dateOfBirth,
    };

    console.log("Gönderilen veri:", requestBody);

    try {
      const response = await axios.post(
        "https://private-c20e72-librarymanagement.apiary-mock.com/user",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("API Yanıtı:", response.data.Result);
    } catch (error) {
      console.error("API hatası:", error);
    }
  };

  return (
    <div className="page-md">
      {/* BEGIN HEADER */}
      <div className="page-header">
        {/* BEGIN HEADER TOP */}
        <HeaderTop />
        {/* END HEADER TOP */}
        {/* BEGIN HEADER MENU */}
        <HeaderMenu />
        {/* END HEADER MENU */}
      </div>
      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                {/* BEGIN SAMPLE FORM PORTLET*/}
                <div className="portlet light margin-top-20">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        User Registration Form
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse">
                        {" "}
                      </a>
                    </div>
                  </div>
                  <div className="portlet-body form">
                    <form
                      className="form-horizontal"
                      role="form"
                      method="post"
                      name="form1"
                      id="form1"
                    >
                      <div className="form-body">
                        <div className="form-group">
                          <label className="col-md-3 control-label">Name</label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strUserName"
                              id="strUserName"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write your name..."
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Surname
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strUserSurname"
                              id="strUserSurname"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write your surname..."
                              onChange={(e) => setSurname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            E-Mail Address
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strEmail"
                              id="strEmail"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write your e-mail..."
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            GSM Number
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strGSM"
                              id="strGSM"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write your GSM number..."
                              onChange={(e) => setGsm(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Books Borrowed
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strBooksBorrowed"
                              id="strBooksBorrowed"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write how many books you borrowed..."
                              onChange={(e) => setBooksBorrowed(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Loan Period
                          </label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strLoanPeriod"
                              id="strLoanPeriod"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write your loan period for the books..."
                              onChange={(e) => setLoanPeriod(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Address
                          </label>
                          <div className="col-md-9">
                            <textarea
                              className="form-control input-sm"
                              rows={3}
                              name="strAddress"
                              id="strAddress"
                              autoComplete="off"
                              placeholder="Write your address..."
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Date of Birth
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control input-medium date-picker"
                              size={16}
                              type="date"
                              name="dtDateOfBirth"
                              id="dtDateOfBirth"
                              autoComplete="off"
                              defaultValue
                              onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="form-actions right">
                          <button
                            type="submit"
                            className="btn green"
                            onClick={myButtonClick}
                          >
                            Kaydet
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* END SAMPLE FORM PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <Prefooter />
      {/* END PRE-FOOTER */}
      {/* BEGIN FOOTER */}
      <Footer />
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
    </div>
  );
}

export default FormBook;
