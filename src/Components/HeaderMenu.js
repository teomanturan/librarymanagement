import React from "react";

function HeaderMenu() {
  return (
    <div className="page-header-menu">
      <div className="container">
        {/* BEGIN MEGA MENU */}
        {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
        {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
        <div className="hor-menu">
          <ul className="nav navbar-nav">
            <li className="menu-dropdown classic-menu-dropdown">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                Kitap Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className="dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Kitap
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="/form-book"> Kitap Yeni Kayıt </a>
                    </li>
                    <li className=" ">
                      <a href="/list-book"> Kitap Listesi </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                Kullanıcı Yönetimi <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className="dropdown-submenu">
                  <a href=":;">
                    <i className="icon-briefcase" />
                    Ürün
                  </a>
                  <ul className="dropdown-menu">
                    <li className=" ">
                      <a href="/form-user"> Yeni Kullanıcı </a>
                    </li>
                    <li className=" ">
                      <a href="/list-user"> Kullanıcı Listesi </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-dropdown classic-menu-dropdown">
              <a
                data-hover="megamenu-dropdown"
                data-close-others="true"
                data-toggle="dropdown"
                href="javascript:;"
              >
                Search <i className="fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu pull-left">
                <li className=" ">
                  <a href="/form-user"> Yeni Kullanıcı </a>
                </li>
              </ul>
              <ul className="dropdown-menu pull-left">
                <li className=" ">
                  <a href="/search">
                    <i className="icon-briefcase" />
                    Book
                  </a>
                </li>
                <li className=" ">
                  <a href="/search">
                    <i className="icon-briefcase" />
                    Author
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* END MEGA MENU */}
      </div>
    </div>
  );
}

export default HeaderMenu;
