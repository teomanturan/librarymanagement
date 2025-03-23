import React, { useEffect } from "react";
import HeaderTop from "../Components/HeaderTop";
import HeaderMenu from "../Components/HeaderMenu";
import Prefooter from "../Components/Prefooter";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";

function ListUser() {
  const [user, setUser] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      "https://private-c20e72-librarymanagement.apiary-mock.com/user"
    );
    setUser(response.data.User);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(user);

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
            <div
              className="modal fade"
              id="portlet-config"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                    />
                    <h4 className="modal-title">Modal title</h4>
                  </div>
                  <div className="modal-body">
                    Widget settings form goes here
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn blue">
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.modal-dialog */}
            </div>
            {/* /.modal */}
            {/* END SAMPLE PORTLET CONFIGURATION MODAL FORM*/}
            {/* BEGIN PAGE BREADCRUMB */}

            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row">
              <div className="col-md-12">
                {/* BEGIN SAMPLE TABLE PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption">
                      <span className="caption-subject font-green-sharp bold">
                        Book List
                      </span>
                    </div>
                    <div className="tools">
                      <a href="javascript:;" className="collapse">
                        {" "}
                      </a>
                    </div>
                  </div>
                  <div className="portlet-body flip-scroll">
                    <table className="table table-bordered table-striped table-condensed flip-content">
                      <thead className="flip-content">
                        <tr>
                          <th>Name and Surname</th>
                          <th>E-Mail</th>
                          <th>GSM</th>
                          <th>Books Borrowed</th>
                          <th>Loan Period</th>
                          <th>Address</th>
                          <th>Date of Birth</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.map((item) => (
                          <tr>
                            <td>{item.UserName + " " + item.UserSurname}</td>
                            <td>{item.EMail}</td>
                            <td>{item.GSM}</td>
                            <td>{item.BooksBorrowed}</td>
                            <td>{item.LoanPeriod}</td>
                            <td>{item.Address}</td>
                            <td>{item.DateOfBirth}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
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

export default ListUser;
