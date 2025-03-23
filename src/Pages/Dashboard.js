import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) {
    navigate("/login");
  }
  
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div className="page-md">
      {/* BEGIN HEADER */}
      <div className="page-header">
        {/* BEGIN HEADER TOP */}
        <div className="page-header-top">
          <div className="container">
            {/* BEGIN LOGO */}
            <div className="page-logo">
              <a href="index.html">
                <img
                  src="../../assets/admin/layout3/img/logo-default.png"
                  alt="logo"
                  className="logo-default"
                />
              </a>
            </div>
            {/* END LOGO */}
            {/* BEGIN RESPONSIVE MENU TOGGLER */}
            <a href="javascript:;" className="menu-toggler" />
            {/* END RESPONSIVE MENU TOGGLER */}
            {/* BEGIN TOP NAVIGATION MENU */}
            <div className="top-menu">
              <ul className="nav navbar-nav pull-right">
                {/* BEGIN NOTIFICATION DROPDOWN */}
                <li
                  className="dropdown dropdown-extended dropdown-dark dropdown-notification"
                  id="header_notification_bar"
                >
                  <a
                    href="javascript:;"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-close-others="true"
                  >
                    <i className="icon-bell" />
                    <span className="badge badge-default">7</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="external">
                      <h3>
                        You have <strong>12 pending</strong> tasks
                      </h3>
                      <a href="javascript:;">view all</a>
                    </li>
                    <li>
                      <ul
                        className="dropdown-menu-list scroller"
                        style={{ height: "250px" }}
                        data-handle-color="#637283"
                      >
                        <li>
                          <a href="javascript:;">
                            <span className="time">just now</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-success">
                                <i className="fa fa-plus" />
                              </span>
                              New user registered.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">3 mins</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-danger">
                                <i className="fa fa-bolt" />
                              </span>
                              Server #12 overloaded.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">10 mins</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-warning">
                                <i className="fa fa-bell-o" />
                              </span>
                              Server #2 not responding.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">14 hrs</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-info">
                                <i className="fa fa-bullhorn" />
                              </span>
                              Application error.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">2 days</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-danger">
                                <i className="fa fa-bolt" />
                              </span>
                              Database overloaded 68%.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">3 days</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-danger">
                                <i className="fa fa-bolt" />
                              </span>
                              A user IP blocked.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">4 days</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-warning">
                                <i className="fa fa-bell-o" />
                              </span>
                              Storage Server #4 not responding dfdfdfd.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">5 days</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-info">
                                <i className="fa fa-bullhorn" />
                              </span>
                              System Error.
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="time">9 days</span>
                            <span className="details">
                              <span className="label label-sm label-icon label-danger">
                                <i className="fa fa-bolt" />
                              </span>
                              Storage server failed.
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* END NOTIFICATION DROPDOWN */}
                {/* BEGIN TODO DROPDOWN */}
                <li
                  className="dropdown dropdown-extended dropdown-dark dropdown-tasks"
                  id="header_task_bar"
                >
                  <a
                    href="javascript:;"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-close-others="true"
                  >
                    <i className="icon-calendar" />
                    <span className="badge badge-default">3</span>
                  </a>
                  <ul className="dropdown-menu extended tasks">
                    <li className="external">
                      <h3>
                        You have <strong>12 pending</strong> tasks
                      </h3>
                      <a href="javascript:;">view all</a>
                    </li>
                    <li>
                      <ul
                        className="dropdown-menu-list scroller"
                        style={{ height: "275px" }}
                        data-handle-color="#637283"
                      >
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">New release v1.2 </span>
                              <span className="percent">30%</span>
                            </span>
                            <span className="progress">
                              <span
                                style={{ width: "40%" }}
                                className="progress-bar progress-bar-success"
                                aria-valuenow={40}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">40% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">
                                Application deployment
                              </span>
                              <span className="percent">65%</span>
                            </span>
                            <span className="progress">
                              <span
                                style={{ width: "65%" }}
                                className="progress-bar progress-bar-danger"
                                aria-valuenow={65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">65% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">Mobile app release</span>
                              <span className="percent">98%</span>
                            </span>
                            <span className="progress">
                              <span
                                style={{ width: "98%" }}
                                className="progress-bar progress-bar-success"
                                aria-valuenow={98}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">98% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">Database migration</span>
                              <span className="percent">10%</span>
                            </span>
                            <span className="progress">
                              <span
                                style={{ width: "10%" }}
                                className="progress-bar progress-bar-warning"
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">10% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">Web server upgrade</span>
                              <span className="percent">58%</span>
                            </span>
                            <span className="progress">
                              <span
                                style={{ width: "58%" }}
                                className="progress-bar progress-bar-info"
                                aria-valuenow={58}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">58% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">Mobile development</span>
                              <span className="percent">85%</span>
                            </span>
                            <span className="progress">
                              <span
                                style={{ width: "85%" }}
                                className="progress-bar progress-bar-success"
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">85% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <span className="task">
                              <span className="desc">New UI release</span>
                              <span className="percent">38%</span>
                            </span>
                            <span className="progress progress-striped">
                              <span
                                style={{ width: "38%" }}
                                className="progress-bar progress-bar-important"
                                aria-valuenow={18}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                <span className="sr-only">38% Complete</span>
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* END TODO DROPDOWN */}
                <li className="droddown dropdown-separator">
                  <span className="separator" />
                </li>
                {/* BEGIN INBOX DROPDOWN */}
                <li
                  className="dropdown dropdown-extended dropdown-dark dropdown-inbox"
                  id="header_inbox_bar"
                >
                  <a
                    href="javascript:;"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-close-others="true"
                  >
                    <span className="circle">3</span>
                    <span className="corner" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="external">
                      <h3>
                        You have <strong>7 New</strong> Messages
                      </h3>
                      <a href="javascript:;">view all</a>
                    </li>
                    <li>
                      <ul
                        className="dropdown-menu-list scroller"
                        style={{ height: "275px" }}
                        data-handle-color="#637283"
                      >
                        <li>
                          <a href="inbox.html?a=view">
                            <span className="photo">
                              <img
                                src="../../assets/admin/layout3/img/avatar2.jpg"
                                className="img-circle"
                                alt=""
                              />
                            </span>
                            <span className="subject">
                              <span className="from"> Lisa Wong </span>
                              <span className="time">Just Now </span>
                            </span>
                            <span className="message">
                              Vivamus sed auctor nibh congue nibh. auctor nibh
                              auctor nibh...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="inbox.html?a=view">
                            <span className="photo">
                              <img
                                src="../../assets/admin/layout3/img/avatar3.jpg"
                                className="img-circle"
                                alt=""
                              />
                            </span>
                            <span className="subject">
                              <span className="from"> Richard Doe </span>
                              <span className="time">16 mins </span>
                            </span>
                            <span className="message">
                              Vivamus sed congue nibh auctor nibh congue nibh.
                              auctor nibh auctor nibh...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="inbox.html?a=view">
                            <span className="photo">
                              <img
                                src="../../assets/admin/layout3/img/avatar1.jpg"
                                className="img-circle"
                                alt=""
                              />
                            </span>
                            <span className="subject">
                              <span className="from"> Bob Nilson </span>
                              <span className="time">2 hrs </span>
                            </span>
                            <span className="message">
                              Vivamus sed nibh auctor nibh congue nibh. auctor
                              nibh auctor nibh...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="inbox.html?a=view">
                            <span className="photo">
                              <img
                                src="../../assets/admin/layout3/img/avatar2.jpg"
                                className="img-circle"
                                alt=""
                              />
                            </span>
                            <span className="subject">
                              <span className="from"> Lisa Wong </span>
                              <span className="time">40 mins </span>
                            </span>
                            <span className="message">
                              Vivamus sed auctor 40% nibh congue nibh...
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="inbox.html?a=view">
                            <span className="photo">
                              <img
                                src="../../assets/admin/layout3/img/avatar3.jpg"
                                className="img-circle"
                                alt=""
                              />
                            </span>
                            <span className="subject">
                              <span className="from"> Richard Doe </span>
                              <span className="time">46 mins </span>
                            </span>
                            <span className="message">
                              Vivamus sed congue nibh auctor nibh congue nibh.
                              auctor nibh auctor nibh...
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* END INBOX DROPDOWN */}
                {/* BEGIN USER LOGIN DROPDOWN */}
                <li className="dropdown dropdown-user dropdown-dark">
                  <a
                    href="javascript:;"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-close-others="true"
                  >
                    <img
                      alt=""
                      className="img-circle"
                      src="../../assets/admin/layout3/img/avatar9.jpg"
                    />
                    <span className="username username-hide-mobile">Nick</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-default">
                    <li>
                      <a href="extra_profile.html">
                        <i className="icon-user" /> My Profile
                      </a>
                    </li>
                    <li>
                      <a href="page_calendar.html">
                        <i className="icon-calendar" /> My Calendar
                      </a>
                    </li>
                    <li>
                      <a href="inbox.html">
                        <i className="icon-envelope-open" /> My Inbox
                        <span className="badge badge-danger"> 3 </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <i className="icon-rocket" /> My Tasks
                        <span className="badge badge-success"> 7 </span>
                      </a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="extra_lock.html">
                        <i className="icon-lock" /> Lock Screen
                      </a>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white p-2"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
                {/* END USER LOGIN DROPDOWN */}
                {/* BEGIN USER LOGIN DROPDOWN */}
                <li className="dropdown dropdown-extended quick-sidebar-toggler">
                  <span className="sr-only">Toggle Quick Sidebar</span>
                  <i className="icon-logout" />
                </li>
                {/* END USER LOGIN DROPDOWN */}
              </ul>
            </div>
            {/* END TOP NAVIGATION MENU */}
          </div>
        </div>
        {/* END HEADER TOP */}
        {/* BEGIN HEADER MENU */}
        <div className="page-header-menu">
          <div className="container">
            {/* BEGIN HEADER SEARCH BOX */}
            <form
              className="search-form"
              action="extra_search.html"
              method="GET"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="query"
                />
                <span className="input-group-btn">
                  <a href="javascript:;" className="btn submit">
                    <i className="icon-magnifier" />
                  </a>
                </span>
              </div>
            </form>
            {/* END HEADER SEARCH BOX */}
            {/* BEGIN MEGA MENU */}
            {/* DOC: Apply "hor-menu-light" class after the "hor-menu" class below to have a horizontal menu with white background */}
            {/* DOC: Remove data-hover="dropdown" and data-close-others="true" attributes below to disable the dropdown opening on mouse hover */}
            <div className="hor-menu">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="menu-dropdown mega-menu-dropdown">
                  <a
                    data-hover="megamenu-dropdown"
                    data-close-others="true"
                    data-toggle="dropdown"
                    href="javascript:;"
                    className="dropdown-toggle"
                  >
                    Features <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu" style={{ minWidth: "710px" }}>
                    <li>
                      <div className="mega-menu-content">
                        <div className="row">
                          <div className="col-md-4">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>eCommerce</h3>
                              </li>
                              <li>
                                <a
                                  href="ecommerce_index.html"
                                  className="iconify"
                                >
                                  <i className="icon-home" />
                                  eCommerce
                                </a>
                              </li>
                              <li>
                                <a
                                  href="ecommerce_orders.html"
                                  className="iconify"
                                >
                                  <i className="icon-basket" />
                                  Manage Orders
                                </a>
                              </li>
                              <li>
                                <a
                                  href="ecommerce_orders_view.html"
                                  className="iconify"
                                >
                                  <i className="icon-tag" />
                                  Order View
                                </a>
                              </li>
                              <li>
                                <a
                                  href="ecommerce_products.html"
                                  className="iconify"
                                >
                                  <i className="icon-handbag" />
                                  Manage Products
                                </a>
                              </li>
                              <li>
                                <a
                                  href="ecommerce_products_edit.html"
                                  className="iconify"
                                >
                                  <i className="icon-pencil" />
                                  Product Edit
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>Layouts</h3>
                              </li>
                              <li>
                                <a href="layout_fluid.html" className="iconify">
                                  <i className="icon-cursor-move" />
                                  Fluid Layout
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_mega_menu_fixed.html"
                                  className="iconify"
                                >
                                  <i className="icon-pin" />
                                  Fixed Mega Menu
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_top_bar_fixed.html"
                                  className="iconify"
                                >
                                  <i className="icon-bar-chart" />
                                  Fixed Top Bar
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_light_header.html"
                                  className="iconify"
                                >
                                  <i className="icon-paper-plane" />
                                  Light Header Dropdowns
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_blank_page.html"
                                  className="iconify"
                                >
                                  <i className="icon-doc" />
                                  Blank Page Layout
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>More Layouts</h3>
                              </li>
                              <li>
                                <a
                                  href="layout_click_dropdowns.html"
                                  className="iconify"
                                >
                                  <i className="icon-speech" />
                                  Click vs. Hover Dropdowns
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_fontawesome_icons.html"
                                  className="iconify"
                                >
                                  <i className="icon-link" />
                                  Layout with Fontawesome
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_glyphicons.html"
                                  className="iconify"
                                >
                                  <i className="icon-settings" />
                                  Layout with Glyphicon
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_language_bar.html"
                                  className="iconify"
                                >
                                  <i className="icon-globe" />
                                  Language Switch Bar
                                </a>
                              </li>
                              <li>
                                <a
                                  href="layout_disabled_menu.html"
                                  className="iconify"
                                >
                                  <i className="icon-lock" />
                                  Disabled Menu Links
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="menu-dropdown mega-menu-dropdown mega-menu-full">
                  <a
                    data-hover="megamenu-dropdown"
                    data-close-others="true"
                    data-toggle="dropdown"
                    href="javascript:;"
                    className="dropdown-toggle"
                  >
                    UI Components <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="mega-menu-content">
                        <div className="row">
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>UI Components</h3>
                              </li>
                              <li>
                                <a href="ui_general.html">
                                  <i className="fa fa-angle-right" />
                                  General
                                </a>
                              </li>
                              <li>
                                <a href="ui_buttons.html">
                                  <i className="fa fa-angle-right" />
                                  Buttons
                                </a>
                              </li>
                              <li>
                                <a href="ui_icons.html">
                                  <i className="fa fa-angle-right" />
                                  Font Icons
                                </a>
                              </li>
                              <li>
                                <a href="ui_colors.html">
                                  <i className="fa fa-angle-right" />
                                  Flat UI Colors
                                </a>
                              </li>
                              <li>
                                <a href="ui_typography.html">
                                  <i className="fa fa-angle-right" />
                                  Typography
                                </a>
                              </li>
                              <li>
                                <a href="ui_tabs_accordions_navs.html">
                                  <i className="fa fa-angle-right" />
                                  Tabs, Accordions &amp; Navs
                                </a>
                              </li>
                              <li>
                                <a href="ui_tree.html">
                                  <i className="fa fa-angle-right" />
                                  Tree View
                                </a>
                              </li>
                              <li>
                                <a href="ui_page_progress_style_1.html">
                                  <i className="fa fa-angle-right" />
                                  Page Progress Bar
                                  <span className="badge badge-roundless badge-warning">
                                    new
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="ui_blockui.html">
                                  <i className="fa fa-angle-right" />
                                  Block UI
                                </a>
                              </li>
                              <li>
                                <a href="ui_bootstrap_growl.html">
                                  <i className="fa fa-angle-right" />
                                  Bootstrap Growl Notifications
                                  <span className="badge badge-roundless badge-warning">
                                    new
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="ui_notific8.html">
                                  <i className="fa fa-angle-right" />
                                  Notific8 Notifications
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>More UI Components</h3>
                              </li>
                              <li>
                                <a href="ui_toastr.html">
                                  <i className="fa fa-angle-right" />
                                  Toastr Notifications
                                </a>
                              </li>
                              <li>
                                <a href="ui_alert_dialog_api.html">
                                  <i className="fa fa-angle-right" />
                                  Alerts &amp; Dialogs API
                                  <span className="badge badge-roundless badge-danger">
                                    new
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="ui_session_timeout.html">
                                  <i className="fa fa-angle-right" />
                                  Session Timeout
                                </a>
                              </li>
                              <li>
                                <a href="ui_idle_timeout.html">
                                  <i className="fa fa-angle-right" />
                                  User Idle Timeout
                                </a>
                              </li>
                              <li>
                                <a href="ui_modals.html">
                                  <i className="fa fa-angle-right" />
                                  Modals
                                </a>
                              </li>
                              <li>
                                <a href="ui_extended_modals.html">
                                  <i className="fa fa-angle-right" />
                                  Extended Modals
                                </a>
                              </li>
                              <li>
                                <a href="ui_tiles.html">
                                  <i className="fa fa-angle-right" />
                                  Tiles
                                </a>
                              </li>
                              <li>
                                <a href="ui_datepaginator.html">
                                  <i className="fa fa-angle-right" />
                                  Date Paginator
                                </a>
                              </li>
                              <li>
                                <a href="ui_nestable.html">
                                  <i className="fa fa-angle-right" />
                                  Nestable List
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>Form Stuff</h3>
                              </li>
                              <li>
                                <a href="form_controls_md.html">
                                  <i className="fa fa-angle-right" />
                                  Material Design
                                  <br />
                                  Form Controls
                                </a>
                              </li>
                              <li>
                                <a href="form_controls.html">
                                  <i className="fa fa-angle-right" />
                                  Bootstrap
                                  <br />
                                  Form Controls
                                </a>
                              </li>
                              <li>
                                <a href="form_icheck.html">
                                  <i className="fa fa-angle-right" />
                                  iCheck Controls
                                </a>
                              </li>
                              <li>
                                <a href="form_layouts.html">
                                  <i className="fa fa-angle-right" />
                                  Form Layouts
                                </a>
                              </li>
                              <li>
                                <a href="form_editable.html">
                                  <i className="fa fa-angle-right" />
                                  Form X-editable
                                  <span className="badge badge-roundless badge-success">
                                    new
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="form_wizard.html">
                                  <i className="fa fa-angle-right" />
                                  Form Wizard
                                </a>
                              </li>
                              <li>
                                <a href="form_validation.html">
                                  <i className="fa fa-angle-right" />
                                  Form Validation
                                </a>
                              </li>
                              <li>
                                <a href="form_image_crop.html">
                                  <i className="fa fa-angle-right" />
                                  Image Cropping
                                </a>
                              </li>
                              <li>
                                <a href="form_fileupload.html">
                                  <i className="fa fa-angle-right" />
                                  Multiple File Upload
                                </a>
                              </li>
                              <li>
                                <a href="form_dropzone.html">
                                  <i className="fa fa-angle-right" />
                                  Dropzone File Upload
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>Form Components</h3>
                              </li>
                              <li>
                                <a href="components_pickers.html">
                                  <i className="fa fa-angle-right" />
                                  Date &amp; Time Pickers
                                </a>
                              </li>
                              <li>
                                <a href="components_context_menu.html">
                                  <i className="fa fa-angle-right" />
                                  Context Menu
                                </a>
                              </li>
                              <li>
                                <a href="components_dropdowns.html">
                                  <i className="fa fa-angle-right" />
                                  Custom Dropdowns
                                </a>
                              </li>
                              <li>
                                <a href="components_form_tools.html">
                                  <i className="fa fa-angle-right" />
                                  Form Widgets &amp; Tools
                                </a>
                              </li>
                              <li>
                                <a href="components_form_tools2.html">
                                  <i className="fa fa-angle-right" />
                                  Form Widgets &amp; Tools 2
                                </a>
                              </li>
                              <li>
                                <a href="components_editors.html">
                                  <i className="fa fa-angle-right" />
                                  Markdown &amp; WYSIWYG Editors
                                </a>
                              </li>
                              <li>
                                <a href="components_ion_sliders.html">
                                  <i className="fa fa-angle-right" />
                                  Ion Range Sliders
                                </a>
                              </li>
                              <li>
                                <a href="components_noui_sliders.html">
                                  <i className="fa fa-angle-right" />
                                  NoUI Range Sliders
                                </a>
                              </li>
                              <li>
                                <a href="components_jqueryui_sliders.html">
                                  <i className="fa fa-angle-right" />
                                  jQuery UI Sliders
                                </a>
                              </li>
                              <li>
                                <a href="components_knob_dials.html">
                                  <i className="fa fa-angle-right" />
                                  Knob Circle Dials
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
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
                    Extra <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu pull-left">
                    <li className="dropdown-submenu">
                      <a href=":;">
                        <i className="icon-briefcase" />
                        Data Tables
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <a href="table_basic.html"> Basic Datatables </a>
                        </li>
                        <li className=" ">
                          <a href="table_tree.html"> Tree Datatables </a>
                        </li>
                        <li className=" ">
                          <a href="table_responsive.html">
                            Responsive Datatables
                          </a>
                        </li>
                        <li className=" ">
                          <a href="table_managed.html"> Managed Datatables </a>
                        </li>
                        <li className=" ">
                          <a href="table_editable.html">
                            {" "}
                            Editable Datatables{" "}
                          </a>
                        </li>
                        <li className=" ">
                          <a href="table_advanced.html">
                            {" "}
                            Advanced Datatables{" "}
                          </a>
                        </li>
                        <li className=" ">
                          <a href="table_ajax.html"> Ajax Datatables </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href=":;">
                        <i className="icon-wallet" />
                        Portlets
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <a href="portlet_general.html"> General Portlets </a>
                        </li>
                        <li className=" ">
                          <a href="portlet_general2.html">
                            New Portlets #1
                            <span className="badge badge-roundless badge-danger">
                              new
                            </span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="portlet_general3.html">
                            New Portlets #2
                            <span className="badge badge-roundless badge-danger">
                              new
                            </span>
                          </a>
                        </li>
                        <li className=" ">
                          <a href="portlet_ajax.html"> Ajax Portlets </a>
                        </li>
                        <li className=" ">
                          <a href="portlet_draggable.html">
                            Draggable Portlets
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href=":;">
                        <i className="icon-bar-chart" />
                        Charts
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <a href="charts_amcharts.html"> amChart </a>
                        </li>
                        <li className=" ">
                          <a href="charts_flotcharts.html"> Flotchart </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href=":;">
                        <i className="icon-pointer" />
                        Maps
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <a href="maps_google.html"> Google Maps </a>
                        </li>
                        <li className=" ">
                          <a href="maps_vector.html"> Vector Maps </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <a href=":;">
                        <i className="icon-puzzle" />
                        Multi Level
                      </a>
                      <ul className="dropdown-menu">
                        <li className=" ">
                          <a href="javascript:;">
                            <i className="icon-settings" />
                            Item 1
                          </a>
                        </li>
                        <li className=" ">
                          <a href="javascript:;">
                            <i className="icon-user" />
                            Item 2
                          </a>
                        </li>
                        <li className=" ">
                          <a href="javascript:;">
                            <i className="icon-globe" />
                            Item 3
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a href="#">
                            <i className="icon-folder" />
                            Sub Items
                          </a>
                          <ul className="dropdown-menu">
                            <li className=" ">
                              <a href="javascript:;"> Item 1 </a>
                            </li>
                            <li className=" ">
                              <a href="javascript:;"> Item 2 </a>
                            </li>
                            <li className=" ">
                              <a href="javascript:;"> Item 3 </a>
                            </li>
                            <li className=" ">
                              <a href="javascript:;"> Item 4 </a>
                            </li>
                          </ul>
                        </li>
                        <li className=" ">
                          <a href="javascript:;">
                            <i className="icon-share" />
                            Item 4
                          </a>
                        </li>
                        <li className=" ">
                          <a href="javascript:;">
                            <i className="icon-bar-chart" />
                            Item 5
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="menu-dropdown mega-menu-dropdown mega-menu-full">
                  <a
                    data-hover="megamenu-dropdown"
                    data-close-others="true"
                    data-toggle="dropdown"
                    href="javascript:;"
                    className="dropdown-toggle"
                  >
                    Pages <i className="fa fa-angle-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="mega-menu-content">
                        <div className="row">
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>User Pages</h3>
                              </li>
                              <li>
                                <a href="page_timeline.html">
                                  <i className="fa fa-angle-right" />
                                  New Timeline
                                  <span className="badge badge-warning">2</span>
                                </a>
                              </li>
                              <li>
                                <a href="extra_profile.html">
                                  <i className="fa fa-angle-right" />
                                  New User Profile
                                  <span className="badge badge-success badge-roundless">
                                    new
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="page_todo.html">
                                  <i className="fa fa-angle-right" />
                                  Todo &amp; Tasks
                                  <span className="badge badge-danger">4</span>
                                </a>
                              </li>
                              <li>
                                <a href="inbox.html">
                                  <i className="fa fa-angle-right" />
                                  User Inbox
                                  <span className="badge badge-success">4</span>
                                </a>
                              </li>
                              <li>
                                <a href="page_calendar.html">
                                  <i className="fa fa-angle-right" />
                                  User Calendar
                                  <span className="badge badge-warning">
                                    14
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="page_timeline_old.html">
                                  <i className="fa fa-angle-right" />
                                  Old Timeline
                                  <span className="badge badge-warning">2</span>
                                </a>
                              </li>
                              <li>
                                <a href="extra_profile_old.html">
                                  <i className="fa fa-angle-right" />
                                  Old User Profile
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>General Pages</h3>
                              </li>
                              <li>
                                <a href="extra_faq.html">
                                  <i className="fa fa-angle-right" />
                                  FAQ Page
                                </a>
                              </li>
                              <li>
                                <a href="page_portfolio.html">
                                  <i className="fa fa-angle-right" />
                                  Portfolio
                                </a>
                              </li>
                              <li>
                                <a href="page_timeline.html">
                                  <i className="fa fa-angle-right" />
                                  Timeline
                                  <span className="badge badge-info">4</span>
                                </a>
                              </li>
                              <li>
                                <a href="page_coming_soon.html">
                                  <i className="fa fa-angle-right" />
                                  Coming Soon
                                </a>
                              </li>
                              <li>
                                <a href="extra_invoice.html">
                                  <i className="fa fa-angle-right" />
                                  Invoice
                                </a>
                              </li>
                              <li>
                                <a href="page_blog.html">
                                  <i className="fa fa-angle-right" />
                                  Blog
                                </a>
                              </li>
                              <li>
                                <a href="page_blog_item.html">
                                  <i className="fa fa-angle-right" />
                                  Blog Post
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>Custom Pages</h3>
                              </li>
                              <li>
                                <a href="page_news.html">
                                  <i className="fa fa-angle-right" />
                                  News
                                  <span className="badge badge-success">9</span>
                                </a>
                              </li>
                              <li>
                                <a href="page_news_item.html">
                                  <i className="fa fa-angle-right" />
                                  News View
                                </a>
                              </li>
                              <li>
                                <a href="page_about.html">
                                  <i className="fa fa-angle-right" />
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a href="page_contact.html">
                                  <i className="fa fa-angle-right" />
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a href="extra_search.html">
                                  <i className="fa fa-angle-right" />
                                  Search Results
                                </a>
                              </li>
                              <li>
                                <a href="extra_pricing_table.html">
                                  <i className="fa fa-angle-right" />
                                  Pricing Tables
                                </a>
                              </li>
                              <li>
                                <a href="login.html">
                                  <i className="fa fa-angle-right" />
                                  Login Form 1
                                </a>
                              </li>
                              <li>
                                <a href="login_2.html">
                                  <i className="fa fa-angle-right" />
                                  Login Form 2
                                </a>
                              </li>
                              <li>
                                <a href="login_3.html">
                                  <i className="fa fa-angle-right" />
                                  Login Form 3
                                </a>
                              </li>
                              <li>
                                <a href="login_soft.html">
                                  <i className="fa fa-angle-right" />
                                  Login Form 4
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-3">
                            <ul className="mega-menu-submenu">
                              <li>
                                <h3>Miscellaneous</h3>
                              </li>
                              <li>
                                <a href="extra_lock.html">
                                  <i className="fa fa-angle-right" />
                                  Lock Screen 1
                                </a>
                              </li>
                              <li>
                                <a href="extra_lock2.html">
                                  <i className="fa fa-angle-right" />
                                  Lock Screen 2
                                </a>
                              </li>
                              <li>
                                <a href="extra_404_option1.html">
                                  <i className="fa fa-angle-right" />
                                  404 Page Option 1
                                </a>
                              </li>
                              <li>
                                <a href="extra_404_option2.html">
                                  <i className="fa fa-angle-right" />
                                  404 Page Option 2
                                </a>
                              </li>
                              <li>
                                <a href="extra_404_option3.html">
                                  <i className="fa fa-angle-right" />
                                  404 Page Option 3
                                </a>
                              </li>
                              <li>
                                <a href="extra_500_option1.html">
                                  <i className="fa fa-angle-right" />
                                  500 Page Option 1
                                </a>
                              </li>
                              <li>
                                <a href="extra_500_option2.html">
                                  <i className="fa fa-angle-right" />
                                  500 Page Option 2
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="menu-dropdown">
                  <a
                    href="angularjs"
                    target="_blank"
                    className="tooltips"
                    data-container="body"
                    data-placement="bottom"
                    data-html="true"
                    data-original-title="AngularJS version demo"
                  >
                    AngularJS Version
                  </a>
                </li>
              </ul>
            </div>
            {/* END MEGA MENU */}
          </div>
        </div>
        {/* END HEADER MENU */}
      </div>
      {/* END HEADER */}
      {/* BEGIN PAGE CONTAINER */}
      <div className="page-container">
        {/* BEGIN PAGE HEAD */}
        <div className="page-head">
          <div className="container">
            {/* BEGIN PAGE TITLE */}
            <div className="page-title">
              <h1>
                Dashboard <small>statistics &amp; reports</small>
              </h1>
            </div>
            {/* END PAGE TITLE */}
            {/* BEGIN PAGE TOOLBAR */}
            <div className="page-toolbar">
              {/* BEGIN THEME PANEL */}
              <div className="btn-group btn-theme-panel">
                <a
                  href="javascript:;"
                  className="btn dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="icon-settings" />
                </a>
                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <h3>THEME COLORS</h3>
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-default"
                              data-theme="default"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Default</span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-hoki"
                              data-theme="blue-hoki"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Hoki
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-blue-steel"
                              data-theme="blue-steel"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Blue Steel
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-orange"
                              data-theme="yellow-orange"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">Orange</span>
                            </li>
                            <li
                              className="theme-color theme-color-yellow-crusta"
                              data-theme="yellow-crusta"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Yellow Crusta
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                          <ul className="theme-colors">
                            <li
                              className="theme-color theme-color-green-haze"
                              data-theme="green-haze"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Green Haze
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-sunglo"
                              data-theme="red-sunglo"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Sunglo
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-red-intense"
                              data-theme="red-intense"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Red Intense
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-plum"
                              data-theme="purple-plum"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Plum
                              </span>
                            </li>
                            <li
                              className="theme-color theme-color-purple-studio"
                              data-theme="purple-studio"
                            >
                              <span className="theme-color-view" />
                              <span className="theme-color-name">
                                Purple Studio
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                      <h3>LAYOUT</h3>
                      <ul className="theme-settings">
                        <li>
                          Theme Style
                          <select
                            className="theme-setting theme-setting-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change theme style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Square corners
                            </option>
                            <option value="rounded">Rounded corners</option>
                          </select>
                        </li>
                        <li>
                          Layout
                          <select
                            className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change layout type"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="boxed" selected="selected">
                              Boxed
                            </option>
                            <option value="fluid">Fluid</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Style
                          <select
                            className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change top menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Top Menu Mode
                          <select
                            className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) top menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed">Fixed</option>
                            <option value="not-fixed" selected="selected">
                              Not Fixed
                            </option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Style
                          <select
                            className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips"
                            data-original-title="Change mega menu dropdowns style"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="dark" selected="selected">
                              Dark
                            </option>
                            <option value="light">Light</option>
                          </select>
                        </li>
                        <li>
                          Mega Menu Mode
                          <select
                            className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips"
                            data-original-title="Enable fixed(sticky) mega menu"
                            data-container="body"
                            data-placement="left"
                          >
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="not-fixed">Not Fixed</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END THEME PANEL */}
            </div>
            {/* END PAGE TOOLBAR */}
          </div>
        </div>
        {/* END PAGE HEAD */}
        {/* BEGIN PAGE CONTENT */}
        <div className="page-content">
          <div className="container">
            {/* BEGIN PAGE BREADCRUMB */}
            <ul className="page-breadcrumb breadcrumb">
              <li>
                <a href="#">Home</a>
                <i className="fa fa-circle" />
              </li>
              <li className="active">Dashboard</li>
            </ul>
            {/* END PAGE BREADCRUMB */}
            {/* BEGIN PAGE CONTENT INNER */}
            <div className="row margin-top-10">
              <div className="col-md-6 col-sm-12">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption caption-md">
                      <i className="icon-bar-chart theme-font hide" />
                      <span className="caption-subject theme-font bold uppercase">
                        Sales Summary
                      </span>
                      <span className="caption-helper hide">
                        weekly stats...
                      </span>
                    </div>
                    <div className="actions">
                      <div
                        className="btn-group btn-group-devided"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                          <input
                            type="radio"
                            name="options"
                            className="toggle"
                            id="option1"
                          />
                          Today
                        </label>
                        <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                          <input
                            type="radio"
                            name="options"
                            className="toggle"
                            id="option2"
                          />
                          Week
                        </label>
                        <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                          <input
                            type="radio"
                            name="options"
                            className="toggle"
                            id="option2"
                          />
                          Month
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div className="row list-separated">
                      <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="font-grey-mint font-sm">
                          Total Sales
                        </div>
                        <div className="uppercase font-hg font-red-flamingo">
                          13,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="font-grey-mint font-sm">Revenue</div>
                        <div className="uppercase font-hg theme-font">
                          4,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="font-grey-mint font-sm">Expenses</div>
                        <div className="uppercase font-hg font-purple">
                          11,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-6">
                        <div className="font-grey-mint font-sm">Growth</div>
                        <div className="uppercase font-hg font-blue-sharp">
                          9,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-separated list-inline-xs hide">
                      <li>
                        <div className="font-grey-mint font-sm">
                          Total Sales
                        </div>
                        <div className="uppercase font-hg font-red-flamingo">
                          13,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </li>
                      <li />
                      <li className="border">
                        <div className="font-grey-mint font-sm">Revenue</div>
                        <div className="uppercase font-hg theme-font">
                          4,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </li>
                      <li className="divider" />
                      <li>
                        <div className="font-grey-mint font-sm">Expenses</div>
                        <div className="uppercase font-hg font-purple">
                          11,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </li>
                      <li className="divider" />
                      <li>
                        <div className="font-grey-mint font-sm">Growth</div>
                        <div className="uppercase font-hg font-blue-sharp">
                          9,760{" "}
                          <span className="font-lg font-grey-mint">$</span>
                        </div>
                      </li>
                    </ul>
                    <div
                      id="sales_statistics"
                      className="portlet-body-morris-fit morris-chart"
                      style={{ height: "260px" }}
                    />
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
              <div className="col-md-6 col-sm-12">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption caption-md">
                      <i className="icon-bar-chart theme-font hide" />
                      <span className="caption-subject theme-font bold uppercase">
                        Member Activity
                      </span>
                      <span className="caption-helper hide">
                        weekly stats...
                      </span>
                    </div>
                    <div className="actions">
                      <div
                        className="btn-group btn-group-devided"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                          <input
                            type="radio"
                            name="options"
                            className="toggle"
                            id="option1"
                          />
                          Today
                        </label>
                        <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                          <input
                            type="radio"
                            name="options"
                            className="toggle"
                            id="option2"
                          />
                          Week
                        </label>
                        <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                          <input
                            type="radio"
                            name="options"
                            className="toggle"
                            id="option2"
                          />
                          Month
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div className="row number-stats margin-bottom-30">
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="stat-left">
                          <div className="stat-chart">
                            {/* do not line break "sparkline_bar" div. sparkline chart has an issue when the container div has line break */}
                            <div id="sparkline_bar" />
                          </div>
                          <div className="stat-number">
                            <div className="title">Total</div>
                            <div className="number">2460</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <div className="stat-right">
                          <div className="stat-chart">
                            {/* do not line break "sparkline_bar" div. sparkline chart has an issue when the container div has line break */}
                            <div id="sparkline_bar2" />
                          </div>
                          <div className="stat-number">
                            <div className="title">New</div>
                            <div className="number">719</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-scrollable table-scrollable-borderless">
                      <table className="table table-hover table-light">
                        <thead>
                          <tr className="uppercase">
                            <th colSpan={2}>MEMBER</th>
                            <th>Earnings</th>
                            <th>CASES</th>
                            <th>CLOSED</th>
                            <th>RATE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="fit">
                              <img
                                className="user-pic"
                                src="../../assets/admin/layout3/img/avatar4.jpg"
                              />
                            </td>
                            <td>
                              <a href="javascript:;" className="primary-link">
                                Brain
                              </a>
                            </td>
                            <td>$345</td>
                            <td>45</td>
                            <td>124</td>
                            <td>
                              <span className="bold theme-font">80%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="fit">
                              <img
                                className="user-pic"
                                src="../../assets/admin/layout3/img/avatar5.jpg"
                              />
                            </td>
                            <td>
                              <a href="javascript:;" className="primary-link">
                                Nick
                              </a>
                            </td>
                            <td>$560</td>
                            <td>12</td>
                            <td>24</td>
                            <td>
                              <span className="bold theme-font">67%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="fit">
                              <img
                                className="user-pic"
                                src="../../assets/admin/layout3/img/avatar6.jpg"
                              />
                            </td>
                            <td>
                              <a href="javascript:;" className="primary-link">
                                Tim
                              </a>
                            </td>
                            <td>$1,345</td>
                            <td>450</td>
                            <td>46</td>
                            <td>
                              <span className="bold theme-font">98%</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="fit">
                              <img
                                className="user-pic"
                                src="../../assets/admin/layout3/img/avatar7.jpg"
                              />
                            </td>
                            <td>
                              <a href="javascript:;" className="primary-link">
                                Tom
                              </a>
                            </td>
                            <td>$645</td>
                            <td>50</td>
                            <td>89</td>
                            <td>
                              <span className="bold theme-font">58%</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                {/* BEGIN PORTLET*/}
                <div className="portlet light tasks-widget">
                  <div className="portlet-title">
                    <div className="caption caption-md">
                      <i className="icon-bar-chart theme-font hide" />
                      <span className="caption-subject theme-font bold uppercase">
                        TASKS
                      </span>
                      <span className="caption-helper">16 pending</span>
                    </div>
                    <div className="inputs">
                      <div className="portlet-input input-small input-inline">
                        <div className="input-icon right">
                          <i className="icon-magnifier" />
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="search..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div className="task-content">
                      <div
                        className="scroller"
                        style={{ height: "282px" }}
                        data-always-visible={1}
                        data-rail-visible1={0}
                        data-handle-color="#D7DCE2"
                      >
                        {/* START TASK LIST */}
                        <ul className="task-list">
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="hidden"
                                defaultValue={1}
                                name="test"
                              />
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue={2}
                                name="test"
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Present 2013 Year IPO Statistics at Board
                                Meeting
                              </span>
                              <span className="label label-sm label-success">
                                Company
                              </span>
                              <span className="task-bell">
                                <i className="fa fa-bell-o" />
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Hold An Interview for Marketing Manager Position
                              </span>
                              <span className="label label-sm label-danger">
                                Marketing
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                AirAsia Intranet System Project Internal Meeting
                              </span>
                              <span className="label label-sm label-success">
                                AirAsia
                              </span>
                              <span className="task-bell">
                                <i className="fa fa-bell-o" />
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Technical Management Meeting
                              </span>
                              <span className="label label-sm label-warning">
                                Company
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Kick-off Company CRM Mobile App Development
                              </span>
                              <span className="label label-sm label-info">
                                Internal Products
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Prepare Commercial Offer For SmartVision Website
                                Rewamp
                              </span>
                              <span className="label label-sm label-danger">
                                SmartVision
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Sign-Off The Comercial Agreement With AutoSmart
                              </span>
                              <span className="label label-sm label-default">
                                AutoSmart
                              </span>
                              <span className="task-bell">
                                <i className="fa fa-bell-o" />
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                Company Staff Meeting
                              </span>
                              <span className="label label-sm label-success">
                                Cruise
                              </span>
                              <span className="task-bell">
                                <i className="fa fa-bell-o" />
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                          <li className="last-line">
                            <div className="task-checkbox">
                              <input
                                type="checkbox"
                                className="liChild"
                                defaultValue
                              />
                            </div>
                            <div className="task-title">
                              <span className="task-title-sp">
                                KeenThemes Investment Discussion
                              </span>
                              <span className="label label-sm label-warning">
                                KeenThemes
                              </span>
                            </div>
                            <div className="task-config">
                              <div className="task-config-btn btn-group">
                                <a
                                  className="btn btn-xs default"
                                  href="javascript:;"
                                  data-toggle="dropdown"
                                  data-hover="dropdown"
                                  data-close-others="true"
                                >
                                  <i className="fa fa-cog" />
                                  <i className="fa fa-angle-down" />
                                </a>
                                <ul className="dropdown-menu pull-right">
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-check" /> Complete
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-pencil" /> Edit
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:;">
                                      <i className="fa fa-trash-o" /> Cancel
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* END START TASK LIST */}
                      </div>
                    </div>
                    <div className="task-footer">
                      <div className="btn-arrow-link pull-right">
                        <a href="javascript:;">See All Tasks</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
              <div className="col-md-6 col-sm-12">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption caption-md">
                      <i className="icon-bar-chart theme-font hide" />
                      <span className="caption-subject theme-font bold uppercase">
                        Customer Support
                      </span>
                      <span className="caption-helper">45 pending</span>
                    </div>
                    <div className="inputs">
                      <div className="portlet-input input-inline input-small">
                        <div className="input-icon right">
                          <i className="icon-magnifier" />
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder="search..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div
                      className="scroller"
                      style={{ height: "305px" }}
                      data-always-visible={1}
                      data-rail-visible1={0}
                      data-handle-color="#D7DCE2"
                    >
                      <div className="general-item-list">
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar4.jpg"
                              />
                              <a href className="item-name primary-link">
                                Nick Larson
                              </a>
                              <span className="item-label">3 hrs ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-success" />
                              Open
                            </span>
                          </div>
                          <div className="item-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar3.jpg"
                              />
                              <a href className="item-name primary-link">
                                Mark
                              </a>
                              <span className="item-label">5 hrs ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-warning" />
                              Pending
                            </span>
                          </div>
                          <div className="item-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat tincidunt
                            ut laoreet.
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar6.jpg"
                              />
                              <a href className="item-name primary-link">
                                Nick Larson
                              </a>
                              <span className="item-label">8 hrs ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-primary" />
                              Closed
                            </span>
                          </div>
                          <div className="item-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh.
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar7.jpg"
                              />
                              <a href className="item-name primary-link">
                                Nick Larson
                              </a>
                              <span className="item-label">12 hrs ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-danger" />
                              Pending
                            </span>
                          </div>
                          <div className="item-body">
                            Consectetuer adipiscing elit Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat.
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar9.jpg"
                              />
                              <a href className="item-name primary-link">
                                Richard Stone
                              </a>
                              <span className="item-label">2 days ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-danger" />
                              Open
                            </span>
                          </div>
                          <div className="item-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, ut laoreet dolore magna aliquam erat volutpat.
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar8.jpg"
                              />
                              <a href className="item-name primary-link">
                                Dan
                              </a>
                              <span className="item-label">3 days ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-warning" />
                              Pending
                            </span>
                          </div>
                          <div className="item-body">
                            Lorem ipsum dolor sit amet, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat.
                          </div>
                        </div>
                        <div className="item">
                          <div className="item-head">
                            <div className="item-details">
                              <img
                                className="item-pic"
                                src="../../assets/admin/layout3/img/avatar2.jpg"
                              />
                              <a href className="item-name primary-link">
                                Larry
                              </a>
                              <span className="item-label">4 hrs ago</span>
                            </div>
                            <span className="item-status">
                              <span className="badge badge-empty badge-success" />
                              Open
                            </span>
                          </div>
                          <div className="item-body">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6">
                {/* BEGIN REGIONAL STATS PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title">
                    <div className="caption caption-md">
                      <i className="icon-bar-chart theme-font hide" />
                      <span className="caption-subject theme-font bold uppercase">
                        Regional Stats
                      </span>
                    </div>
                    <div className="actions">
                      <a
                        className="btn btn-circle btn-icon-only btn-default"
                        href="javascript:;"
                      >
                        <i className="icon-cloud-upload" />
                      </a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default"
                        href="javascript:;"
                      >
                        <i className="icon-wrench" />
                      </a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default fullscreen"
                        href="javascript:;"
                      ></a>
                      <a
                        className="btn btn-circle btn-icon-only btn-default"
                        href="javascript:;"
                      >
                        <i className="icon-trash" />
                      </a>
                    </div>
                  </div>
                  <div className="portlet-body">
                    <div id="region_statistics_loading">
                      <img
                        src="../../assets/admin/layout/img/loading.gif"
                        alt="loading"
                      />
                    </div>
                    <div
                      id="region_statistics_content"
                      className="display-none"
                    >
                      <div className="btn-toolbar margin-bottom-10">
                        <div
                          className="btn-group btn-group-circle"
                          data-toggle="buttons"
                        >
                          <a href className="btn grey-salsa btn-sm active">
                            Users
                          </a>
                          <a href className="btn grey-salsa btn-sm">
                            {" "}
                            Orders{" "}
                          </a>
                        </div>
                        <div className="btn-group pull-right">
                          <a
                            href
                            className="btn btn-circle grey-salsa btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                            data-hover="dropdown"
                            data-close-others="true"
                          >
                            Select Region{" "}
                            <span className="fa fa-angle-down"> </span>
                          </a>
                          <ul className="dropdown-menu pull-right">
                            <li>
                              <a href="javascript:;" id="regional_stat_world">
                                World
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;" id="regional_stat_usa">
                                USA
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;" id="regional_stat_europe">
                                Europe
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;" id="regional_stat_russia">
                                Russia
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;" id="regional_stat_germany">
                                Germany
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="vmap_world" className="vmaps display-none" />
                      <div id="vmap_usa" className="vmaps display-none" />
                      <div id="vmap_europe" className="vmaps display-none" />
                      <div id="vmap_russia" className="vmaps display-none" />
                      <div id="vmap_germany" className="vmaps display-none" />
                    </div>
                  </div>
                </div>
                {/* END REGIONAL STATS PORTLET*/}
              </div>
              <div className="col-md-6 col-sm-6">
                {/* BEGIN PORTLET*/}
                <div className="portlet light">
                  <div className="portlet-title tabbable-line">
                    <div className="caption caption-md">
                      <i className="icon-globe theme-font hide" />
                      <span className="caption-subject theme-font bold uppercase">
                        Feeds
                      </span>
                    </div>
                    <ul className="nav nav-tabs">
                      <li className="active">
                        <a href="#tab_1_1" data-toggle="tab">
                          {" "}
                          System{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#tab_1_2" data-toggle="tab">
                          {" "}
                          Activities{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="portlet-body">
                    {/*BEGIN TABS*/}
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_1_1">
                        <div
                          className="scroller"
                          style={{ height: "337px" }}
                          data-always-visible={1}
                          data-rail-visible1={0}
                          data-handle-color="#D7DCE2"
                        >
                          <ul className="feeds">
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-success">
                                      <i className="fa fa-bell-o" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      You have 4 pending tasks.
                                      <span className="label label-sm label-info">
                                        Take action{" "}
                                        <i className="fa fa-share" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">Just now</div>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New version v1.4 just lunched!
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">20 mins</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-danger">
                                      <i className="fa fa-bolt" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Database server #12 overloaded. Please fix
                                      the issue.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">24 mins</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New order received and pending for
                                      process.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">30 mins</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-success">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New payment refund and pending approval.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">40 mins</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-warning">
                                      <i className="fa fa-plus" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New member registered. Pending approval.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">1.5 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-success">
                                      <i className="fa fa-bell-o" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Web server hardware needs to be upgraded.
                                      <span className="label label-sm label-default">
                                        Overdue
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">2 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Prod01 database server is overloaded 90%.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">3 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-warning">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New group created. Pending manager review.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">5 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Order payment failed.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">18 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New application received.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">21 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Dev90 web server restarted. Pending
                                      overall system check.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">22 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New member registered. Pending approval
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">21 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      L45 Network failure. Schedule maintenance.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">22 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Order canceled with failed payment.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">21 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Web-A2 clound instance created. Schedule
                                      full scan.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">22 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-default">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Member canceled. Schedule account review.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">21 hours</div>
                              </div>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-info">
                                      <i className="fa fa-bullhorn" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      New order received. Please take care of
                                      it.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">22 hours</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane" id="tab_1_2">
                        <div
                          className="scroller"
                          style={{ height: "337px" }}
                          data-always-visible={1}
                          data-rail-visible1={0}
                          data-handle-color="#D7DCE2"
                        >
                          <ul className="feeds">
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New order received
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">10 mins</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <div className="col1">
                                <div className="cont">
                                  <div className="cont-col1">
                                    <div className="label label-sm label-danger">
                                      <i className="fa fa-bolt" />
                                    </div>
                                  </div>
                                  <div className="cont-col2">
                                    <div className="desc">
                                      Order #24DOP4 has been rejected.
                                      <span className="label label-sm label-danger">
                                        Take action{" "}
                                        <i className="fa fa-share" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col2">
                                <div className="date">24 mins</div>
                              </div>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="javascript:;">
                                <div className="col1">
                                  <div className="cont">
                                    <div className="cont-col1">
                                      <div className="label label-sm label-success">
                                        <i className="fa fa-bell-o" />
                                      </div>
                                    </div>
                                    <div className="cont-col2">
                                      <div className="desc">
                                        New user registered
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col2">
                                  <div className="date">Just now</div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*END TABS*/}
                  </div>
                </div>
                {/* END PORTLET*/}
              </div>
            </div>
            {/* END PAGE CONTENT INNER */}
          </div>
          {/* BEGIN QUICK SIDEBAR */}
          <a href="javascript:;" className="page-quick-sidebar-toggler">
            <i className="icon-login" />
          </a>
          <div className="page-quick-sidebar-wrapper">
            <div className="page-quick-sidebar">
              <div className="nav-justified">
                <ul className="nav nav-tabs nav-justified">
                  <li className="active">
                    <a href="#quick_sidebar_tab_1" data-toggle="tab">
                      Users <span className="badge badge-danger">2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#quick_sidebar_tab_2" data-toggle="tab">
                      Alerts <span className="badge badge-success">7</span>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="javascript:;"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      More
                      <i className="fa fa-angle-down" />
                    </a>
                    <ul className="dropdown-menu pull-right" role="menu">
                      <li>
                        <a href="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-bell" /> Alerts
                        </a>
                      </li>
                      <li>
                        <a href="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-info" /> Notifications
                        </a>
                      </li>
                      <li>
                        <a href="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-speech" /> Activities
                        </a>
                      </li>
                      <li className="divider" />
                      <li>
                        <a href="#quick_sidebar_tab_3" data-toggle="tab">
                          <i className="icon-settings" /> Settings
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane active page-quick-sidebar-chat"
                    id="quick_sidebar_tab_1"
                  >
                    <div
                      className="page-quick-sidebar-chat-users"
                      data-rail-color="#ddd"
                      data-wrapper-class="page-quick-sidebar-list"
                    >
                      <h3 className="list-heading">Staff</h3>
                      <ul className="media-list list-items">
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-success">8</span>
                          </div>
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar3.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Bob Nilson</h4>
                            <div className="media-heading-sub">
                              Project Manager
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar1.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Nick Larson</h4>
                            <div className="media-heading-sub">
                              Art Director
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-danger">3</span>
                          </div>
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar4.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Deon Hubert</h4>
                            <div className="media-heading-sub">CTO</div>
                          </div>
                        </li>
                        <li className="media">
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar2.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Ella Wong</h4>
                            <div className="media-heading-sub">CEO</div>
                          </div>
                        </li>
                      </ul>
                      <h3 className="list-heading">Customers</h3>
                      <ul className="media-list list-items">
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-warning">2</span>
                          </div>
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar6.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Lara Kunis</h4>
                            <div className="media-heading-sub">
                              CEO, Loop Inc
                            </div>
                            <div className="media-heading-small">
                              Last seen 03:10 AM
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="label label-sm label-success">
                              new
                            </span>
                          </div>
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar7.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Ernie Kyllonen</h4>
                            <div className="media-heading-sub">
                              Project Manager,
                              <br />
                              SmartBizz PTL
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar8.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Lisa Stone</h4>
                            <div className="media-heading-sub">
                              CTO, Keort Inc
                            </div>
                            <div className="media-heading-small">
                              Last seen 13:10 PM
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-success">7</span>
                          </div>
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar9.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Deon Portalatin</h4>
                            <div className="media-heading-sub">
                              CFO, H&amp;D LTD
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar10.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Irina Savikova</h4>
                            <div className="media-heading-sub">
                              CEO, Tizda Motors Inc
                            </div>
                          </div>
                        </li>
                        <li className="media">
                          <div className="media-status">
                            <span className="badge badge-danger">4</span>
                          </div>
                          <img
                            className="media-object"
                            src="../../assets/admin/layout/img/avatar11.jpg"
                            alt="..."
                          />
                          <div className="media-body">
                            <h4 className="media-heading">Maria Gomez</h4>
                            <div className="media-heading-sub">
                              Manager, Infomatic Inc
                            </div>
                            <div className="media-heading-small">
                              Last seen 03:10 AM
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="page-quick-sidebar-item">
                      <div className="page-quick-sidebar-chat-user">
                        <div className="page-quick-sidebar-nav">
                          <a
                            href="javascript:;"
                            className="page-quick-sidebar-back-to-list"
                          >
                            <i className="icon-arrow-left" />
                            Back
                          </a>
                        </div>
                        <div className="page-quick-sidebar-chat-user-messages">
                          <div className="post out">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar3.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Bob Nilson
                              </a>
                              <span className="datetime">20:15</span>
                              <span className="body">
                                When could you send me the report ?
                              </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar2.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Ella Wong
                              </a>
                              <span className="datetime">20:15</span>
                              <span className="body">
                                Its almost done. I will be sending it shortly
                              </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar3.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Bob Nilson
                              </a>
                              <span className="datetime">20:15</span>
                              <span className="body">
                                {" "}
                                Alright. Thanks! :){" "}
                              </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar2.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Ella Wong
                              </a>
                              <span className="datetime">20:16</span>
                              <span className="body">
                                You are most welcome. Sorry for the delay.
                              </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar3.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Bob Nilson
                              </a>
                              <span className="datetime">20:17</span>
                              <span className="body">
                                No probs. Just take your time :)
                              </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar2.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Ella Wong
                              </a>
                              <span className="datetime">20:40</span>
                              <span className="body">
                                Alright. I just emailed it to you.
                              </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar3.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Bob Nilson
                              </a>
                              <span className="datetime">20:17</span>
                              <span className="body">
                                Great! Thanks. Will check it right away.
                              </span>
                            </div>
                          </div>
                          <div className="post in">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar2.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Ella Wong
                              </a>
                              <span className="datetime">20:40</span>
                              <span className="body">
                                Please let me know if you have any comment.
                              </span>
                            </div>
                          </div>
                          <div className="post out">
                            <img
                              className="avatar"
                              alt=""
                              src="../../assets/admin/layout/img/avatar3.jpg"
                            />
                            <div className="message">
                              <span className="arrow" />
                              <a href="javascript:;" className="name">
                                Bob Nilson
                              </a>
                              <span className="datetime">20:17</span>
                              <span className="body">
                                Sure. I will check and buzz you if anything
                                needs to be corrected.
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="page-quick-sidebar-chat-user-form">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Type a message here..."
                            />
                            <div className="input-group-btn">
                              <button type="button" className="btn blue">
                                <i className="icon-paper-clip" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane page-quick-sidebar-alerts"
                    id="quick_sidebar_tab_2"
                  >
                    <div className="page-quick-sidebar-alerts-list">
                      <h3 className="list-heading">General</h3>
                      <ul className="feeds list-items">
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-shopping-cart" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  New order received with
                                  <span className="label label-sm label-danger">
                                    Reference Number: DR23923
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">30 mins</div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-success">
                                  <i className="fa fa-user" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  You have 5 pending membership that requires a
                                  quick review.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">24 mins</div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-danger">
                                  <i className="fa fa-bell-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  Web server hardware needs to be upgraded.
                                  <span className="label label-sm label-warning">
                                    Overdue
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">2 hours</div>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div className="col1">
                              <div className="cont">
                                <div className="cont-col1">
                                  <div className="label label-sm label-default">
                                    <i className="fa fa-briefcase" />
                                  </div>
                                </div>
                                <div className="cont-col2">
                                  <div className="desc">
                                    IPO Report for year 2013 has been released.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <div className="date">20 mins</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                      <h3 className="list-heading">System</h3>
                      <ul className="feeds list-items">
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-info">
                                  <i className="fa fa-shopping-cart" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  New order received with
                                  <span className="label label-sm label-success">
                                    Reference Number: DR23923
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">30 mins</div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-success">
                                  <i className="fa fa-user" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  You have 5 pending membership that requires a
                                  quick review.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">24 mins</div>
                          </div>
                        </li>
                        <li>
                          <div className="col1">
                            <div className="cont">
                              <div className="cont-col1">
                                <div className="label label-sm label-warning">
                                  <i className="fa fa-bell-o" />
                                </div>
                              </div>
                              <div className="cont-col2">
                                <div className="desc">
                                  Web server hardware needs to be upgraded.
                                  <span className="label label-sm label-default">
                                    Overdue
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col2">
                            <div className="date">2 hours</div>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div className="col1">
                              <div className="cont">
                                <div className="cont-col1">
                                  <div className="label label-sm label-info">
                                    <i className="fa fa-briefcase" />
                                  </div>
                                </div>
                                <div className="cont-col2">
                                  <div className="desc">
                                    IPO Report for year 2013 has been released.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col2">
                              <div className="date">20 mins</div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="tab-pane page-quick-sidebar-settings"
                    id="quick_sidebar_tab_3"
                  >
                    <div className="page-quick-sidebar-settings-list">
                      <h3 className="list-heading">General Settings</h3>
                      <ul className="list-items borderless">
                        <li>
                          Enable Notifications
                          <input
                            type="checkbox"
                            className="make-switch"
                            defaultChecked
                            data-size="small"
                            data-on-color="success"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                        <li>
                          Allow Tracking
                          <input
                            type="checkbox"
                            className="make-switch"
                            data-size="small"
                            data-on-color="info"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                        <li>
                          Log Errors
                          <input
                            type="checkbox"
                            className="make-switch"
                            defaultChecked
                            data-size="small"
                            data-on-color="danger"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                        <li>
                          Auto Sumbit Issues
                          <input
                            type="checkbox"
                            className="make-switch"
                            data-size="small"
                            data-on-color="warning"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                        <li>
                          Enable SMS Alerts
                          <input
                            type="checkbox"
                            className="make-switch"
                            defaultChecked
                            data-size="small"
                            data-on-color="success"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                      </ul>
                      <h3 className="list-heading">System Settings</h3>
                      <ul className="list-items borderless">
                        <li>
                          Security Level
                          <select className="form-control input-inline input-sm input-small">
                            <option value={1}>Normal</option>
                            <option value={2} selected>
                              Medium
                            </option>
                            <option value="e">High</option>
                          </select>
                        </li>
                        <li>
                          Failed Email Attempts
                          <input
                            className="form-control input-inline input-sm input-small"
                            defaultValue={5}
                          />
                        </li>
                        <li>
                          Secondary SMTP Port
                          <input
                            className="form-control input-inline input-sm input-small"
                            defaultValue={3560}
                          />
                        </li>
                        <li>
                          Notify On System Error
                          <input
                            type="checkbox"
                            className="make-switch"
                            defaultChecked
                            data-size="small"
                            data-on-color="danger"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                        <li>
                          Notify On SMTP Error
                          <input
                            type="checkbox"
                            className="make-switch"
                            defaultChecked
                            data-size="small"
                            data-on-color="warning"
                            data-on-text="ON"
                            data-off-color="default"
                            data-off-text="OFF"
                          />
                        </li>
                      </ul>
                      <div className="inner-content">
                        <button className="btn btn-success">
                          <i className="icon-settings" /> Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END QUICK SIDEBAR */}
        </div>
        {/* END PAGE CONTENT */}
      </div>
      {/* END PAGE CONTAINER */}
      {/* BEGIN PRE-FOOTER */}
      <div className="page-prefooter">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
              <h2>About</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam dolore.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 col-xs12 footer-block">
              <h2>Subscribe Email</h2>
              <div className="subscribe-form">
                <form action="javascript:;">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="mail@email.com"
                      className="form-control"
                    />
                    <span className="input-group-btn">
                      <button className="btn" type="submit">
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
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="rss"
                    className="rss"
                  />
                </li>
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="facebook"
                    className="facebook"
                  />
                </li>
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="twitter"
                    className="twitter"
                  />
                </li>
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="googleplus"
                    className="googleplus"
                  />
                </li>
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="linkedin"
                    className="linkedin"
                  />
                </li>
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="youtube"
                    className="youtube"
                  />
                </li>
                <li>
                  <a
                    href="javascript:;"
                    data-original-title="vimeo"
                    className="vimeo"
                  />
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 footer-block">
              <h2>Contacts</h2>
              <address className="margin-bottom-40">
                Phone: 800 123 3456
                <br />
                Email: <a href="mailto:info@metronic.com">info@metronic.com</a>
              </address>
            </div>
          </div>
        </div>
      </div>
      {/* END PRE-FOOTER */}
      {/* BEGIN FOOTER */}
      <div className="page-footer">
        <div className="container">
          2014 © Metronic by keenthemes.
          <a
            href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
            title="Purchase Metronic just for 27$ and get lifetime updates for free"
            target="_blank"
          >
            Purchase Metronic!
          </a>
        </div>
      </div>
      <div className="scroll-to-top">
        <i className="icon-arrow-up" />
      </div>
      {/* END FOOTER */}
    </div>
  );
}

export default Dashboard;
