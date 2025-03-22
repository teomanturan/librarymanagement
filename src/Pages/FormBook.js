import React, { use, useEffect } from "react";
import HeaderTop from "../Components/HeaderTop";
import HeaderMenu from "../Components/HeaderMenu";
import Prefooter from "../Components/Prefooter";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";

function FormBook() {
  const [ISBN, setISBN] = useState("");
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState([]);
  const [publicationDate, setPublicationDate] = useState("");
  const [language, setLanguage] = useState([]);
  const [bookStatus, setBookStatus] = useState([]);
  const [bookCategory, setBookCategory] = useState([]);
  const [selectedBookStatus, setSelectedBookStatus] = useState("");
  const [selectedAuthorName, setSelectedAuthorName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedBookCategory, setSelectedBookCategory] = useState("");

  const myButtonClick = async (event) => {
    event.preventDefault();
    let requestBody = {
      ISBN: ISBN,
      BookName: bookName,
      AuthorName: selectedAuthorName,
      PublicationDate: publicationDate,
      Language: selectedLanguage,
      BookCategory: selectedBookCategory,
      BookStatus: selectedBookStatus,
    };

    console.log("Gönderilen veri:", requestBody);

    try {
      const response = await axios.post(
        "https://private-c20e72-librarymanagement.apiary-mock.com/book",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("API Yanıtı:", response.data.Result);
    } catch (error) {
      console.error("API hatası:", error);
    }
  };

  async function fetchBookCategory() {
    const response = await axios.get(
      "https://private-c20e72-librarymanagement.apiary-mock.com/category"
    );
    setBookCategory(response.data.BookCategory);
  }
  async function fetchBookStatusData() {
    const response = await axios.get(
      "https://private-c20e72-librarymanagement.apiary-mock.com/bookstatus"
    );
    setBookStatus(response.data.BookStatus);
  }
  async function fetchAuthorName() {
    const response = await axios.get(
      "https://private-c20e72-librarymanagement.apiary-mock.com/author"
    );
    setAuthorName(response.data.Author);
  }

  async function fetchLanguage() {
    const response = await axios.get(
      "https://private-c20e72-librarymanagement.apiary-mock.com/language"
    );
    setLanguage(response.data.Languages);
  }

  useEffect(() => {
    fetchBookStatusData();
    fetchAuthorName();
    fetchLanguage();
    fetchBookCategory();
  }, []);

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
                        Book Registration Form
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
                          <label className="col-md-3 control-label">ISBN</label>
                          <div className="col-md-9">
                            <input
                              type="number"
                              name="strISBN"
                              id="strISBN"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write the ISBN of the book..."
                              onChange={(e) => setISBN(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Book Name
                          </label>
                          <div className="col-md-9">
                            <input
                              type="text"
                              name="strBookName"
                              id="strBookName"
                              className="form-control input-sm"
                              maxLength={50}
                              autoComplete="off"
                              placeholder="Write the name of the book..."
                              onChange={(e) => setBookName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-md-3">
                            Publication Date
                          </label>
                          <div className="col-md-9">
                            <input
                              className="form-control input-medium date-picker"
                              size={16}
                              type="date"
                              name="dtPublicationDate"
                              id="dtPublicationDate"
                              autoComplete="off"
                              defaultValue
                              onChange={(e) =>
                                setPublicationDate(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Book Status
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbBookStatus"
                              name="cmbBookStatus"
                              value={selectedBookStatus} // Controlled input state
                              onChange={(e) =>
                                setSelectedBookStatus(e.target.value)
                              } // Update the selected value
                            >
                              <option value="0">...</option>
                              {bookStatus && bookStatus.length > 0 ? (
                                bookStatus.map((item) => (
                                  <option
                                    key={item.BookStatus}
                                    value={item.BookStatus}
                                  >
                                    {item.BookStatusName}
                                  </option>
                                ))
                              ) : (
                                <option value="0">Loading...</option> // If the data is still being fetched
                              )}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Author Name
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbAuthorName"
                              name="cmbAuthorName"
                              value={selectedAuthorName} // Controlled input state
                              onChange={(e) =>
                                setSelectedAuthorName(e.target.value)
                              }
                            >
                              <option>...</option>
                              {authorName.map((item) => (
                                <option
                                  key={item.AuthorID}
                                  value={item.AuthorID}
                                >
                                  {item.AuthorName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Language
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbLanguage"
                              name="cmbLanguage"
                              value={selectedLanguage} // Controlled input state
                              onChange={(e) =>
                                setSelectedLanguage(e.target.value)
                              } // Update the selected value
                            >
                              <option>...</option>
                              {language.map((item) => (
                                <option
                                  key={item.LanguageID}
                                  value={item.LanguageID}
                                >
                                  {item.LanguageName}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="col-md-3 control-label">
                            Category
                          </label>
                          <div className="col-md-9">
                            <select
                              className="form-control"
                              id="cmbBookCategory"
                              name="cmbBookCategory"
                              value={selectedBookCategory} // Controlled input state
                              onChange={(e) =>
                                setSelectedBookCategory(e.target.value)
                              } // Update the selected value
                            >
                              <option>...</option>
                              {bookCategory.map((item) => (
                                <option
                                  key={item.BookCategoryID}
                                  value={item.BookCategoryID}
                                >
                                  {item.BookCategoryName}
                                </option>
                              ))}
                            </select>
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
