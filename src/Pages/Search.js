import React, { use, useEffect } from "react";
import HeaderTop from "../Components/HeaderTop";
import HeaderMenu from "../Components/HeaderMenu";
import Prefooter from "../Components/Prefooter";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";

function Search() {
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
              <div className="col-md-12" style={{ marginTop: "30px" }}>
                <div className="tabbable tabbable-custom tabbable-noborder">
                  <ul className="nav nav-tabs">
                    <li className="active" style={{ backgroundColor: "red" }}>
                      <a data-toggle="tab" href="#tab_2_2">
                        {" "}
                        Book Search{" "}
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/*end tab-pane*/}

                    {/*end tab-pane*/}

                    {/*end tab-pane*/}
                    <div id="tab_1_5" className="tab-pane active">
                      <div className="row">
                        <div className="col-md-12">
                          <form
                            action="javascript:;"
                            className="alert alert-danger alert-borderless"
                          >
                            <div className="input-group">
                              <div className="input-cont">
                                <input
                                  type="text"
                                  placeholder="Search..."
                                  className="form-control"
                                />
                              </div>
                              <span className="input-group-btn">
                                <button
                                  type="button"
                                  className="btn green-haze"
                                >
                                  Search &nbsp;
                                  <i className="m-icon-swapright m-icon-white" />
                                </button>
                              </span>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered table-advance table-hover">
                          <thead>
                            <tr>
                              <th>Photo</th>
                              <th>Fullname</th>
                              <th>Username</th>
                              <th>Joined</th>
                              <th>Points</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar1.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Mark Nilson</td>
                              <td>makr124</td>
                              <td>19 Jan 2012</td>
                              <td>1245</td>
                              <td>
                                <span className="label label-sm label-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs red-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar2.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Filip Rolton</td>
                              <td>jac123</td>
                              <td>09 Feb 2012</td>
                              <td>15</td>
                              <td>
                                <span className="label label-sm label-info">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs blue-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar3.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Colin Fox</td>
                              <td>col</td>
                              <td>19 Jan 2012</td>
                              <td>245</td>
                              <td>
                                <span className="label label-sm label-warning">
                                  Suspended
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs green-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar2.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Nick Stone</td>
                              <td>sanlim</td>
                              <td>11 Mar 2012</td>
                              <td>565</td>
                              <td>
                                <span className="label label-sm label-danger">
                                  Blocked
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs red-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar1.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Edward Cook</td>
                              <td>sanlim</td>
                              <td>11 Mar 2012</td>
                              <td>45245</td>
                              <td>
                                <span className="label label-sm label-danger">
                                  Blocked
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs green-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar2.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Nick Stone</td>
                              <td>sanlim</td>
                              <td>11 Mar 2012</td>
                              <td>24512</td>
                              <td>
                                <span className="label label-sm label-danger">
                                  Blocked
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs blue-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar1.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Elis Lim</td>
                              <td>makr124</td>
                              <td>11 Mar 2012</td>
                              <td>145</td>
                              <td>
                                <span className="label label-sm label-success">
                                  Approved
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs red-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar2.jpg"
                                  alt=""
                                />
                              </td>
                              <td>King Paul</td>
                              <td>king123</td>
                              <td>11 Mar 2012</td>
                              <td>456</td>
                              <td>
                                <span className="label label-sm label-info">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs blue-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar3.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Filip Larson</td>
                              <td>fil</td>
                              <td>11 Mar 2012</td>
                              <td>12453</td>
                              <td>
                                <span className="label label-sm label-warning">
                                  Suspended
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs green-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar2.jpg"
                                  alt=""
                                />
                              </td>
                              <td>Martin Larson</td>
                              <td>larson12</td>
                              <td>01 Apr 2011</td>
                              <td>2453</td>
                              <td>
                                <span className="label label-sm label-danger">
                                  Blocked
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs red-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="../../assets/admin/pages/media/profile/avatar1.jpg"
                                  alt=""
                                />
                              </td>
                              <td>King Paul</td>
                              <td>sanlim</td>
                              <td>11 Mar 2012</td>
                              <td>905</td>
                              <td>
                                <span className="label label-sm label-danger">
                                  Blocked
                                </span>
                              </td>
                              <td>
                                <a
                                  className="btn default btn-xs green-stripe"
                                  href="javascript:;"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="margin-top-20">
                        <ul className="pagination pagination-circle">
                          <li>
                            <a href="javascript:;"> Prev </a>
                          </li>
                          <li>
                            <a href="javascript:;"> 1 </a>
                          </li>
                          <li>
                            <a href="javascript:;"> 2 </a>
                          </li>
                          <li className="active">
                            <a href="javascript:;"> 3 </a>
                          </li>
                          <li>
                            <a href="javascript:;"> 4 </a>
                          </li>
                          <li>
                            <a href="javascript:;"> 5 </a>
                          </li>
                          <li>
                            <a href="javascript:;"> Next </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*end tab-pane*/}
                  </div>
                </div>
              </div>
              {/*end tabbable*/}
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

export default Search;
