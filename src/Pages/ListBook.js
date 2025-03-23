import React, { useEffect } from "react";
import HeaderTop from "../Components/HeaderTop";
import HeaderMenu from "../Components/HeaderMenu";
import Prefooter from "../Components/Prefooter";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";

function ListBook() {
  const [book, setBook] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      "https://private-c20e72-librarymanagement.apiary-mock.com/book"
    );
    setBook(response.data.Books);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(book);

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
                          <th>ISBN</th>
                          <th>Book Name</th>
                          <th>Author Name</th>
                          <th>Publication Date</th>
                          <th>Language</th>
                          <th>Book Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {book.map((item) => (
                          <tr>
                            <td className="numeric">{item.ISBN}</td>
                            <td>{item.BookName}</td>
                            <td>{item.AuthorName}</td>
                            <td>{item.PublicationDate}</td>
                            <td>{item.Language}</td>
                            <td>{item.BookStatus}</td>
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

export default ListBook;
