import "./App.css";

function App() {
  return (
    <>
      <div ng-app="bootstrpConf">
        <div
          id="signup_form_modal"
          className="modal fade"
          aria-hidden="true"
          role="dialog"
          aria-labelledby="modal_label"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="modal_label">
                  Sign Up Today!
                </h4>
              </div>
              <div className="modal-body">
                <form id="signup_form" action="">
                  <fieldset className="form-group">
                    <label htmlFor="first_name">First Name:</label>
                    <input
                      className="form-control"
                      id="first_name"
                      placeholder="First Name"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                      className="form-control"
                      id="last_name"
                      placeholder="Last Name"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <small className="text-muted">
                      Your email will be used as your username.
                    </small>
                  </fieldset>
                  <fieldset className="form-group">
                    <label htmlFor="profession">You're:</label>
                    <select id="profession" className="c-select">
                      <option>---</option>
                      <option>Javascript Developer</option>
                      <option>Ruby developer</option>
                      <option>Python developer</option>
                      <option>Web Designer</option>
                    </select>
                  </fieldset>
                  <fieldset className="form-group">
                    <label className="c-input c-radio">
                      <input
                        type="radio"
                        name="age"
                        id="age1"
                        value="under21"
                      />
                      <span className="c-indicator"></span>I am &lt;21
                    </label>
                    <label className="c-input c-radio">
                      <input
                        type="radio"
                        name="age"
                        id="age2"
                        value="over21"
                        checked
                      />
                      <span className="c-indicator"></span>I am &gt;21
                    </label>
                  </fieldset>
                  <fieldset className="form-group m-t-2">
                    <button className="btn btn-danger" type="submit">
                      Sign Up
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          id="speakers_modal"
          className="modal fade"
          aria-hidden="true"
          role="dialog"
          aria-labelledby="modal_label"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="modal_label">
                  Speakers
                </h4>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <span>Jason Node</span>{" "}
                    <a href="#" className="btn btn-sm btn-danger">
                      Details
                    </a>
                  </li>
                  <li className="list-group-item">
                    <span>Alice Sass</span>{" "}
                    <a href="#" className="btn btn-sm btn-danger">
                      Details
                    </a>
                  </li>
                  <li className="list-group-item">
                    <span>Carl Ruby</span>{" "}
                    <a href="#" className="btn btn-sm btn-danger">
                      Details
                    </a>
                  </li>
                  <li className="list-group-item">
                    <span>Frank Script</span>{" "}
                    <a href="#" className="btn btn-sm btn-danger">
                      Details
                    </a>
                  </li>
                  <li className="list-group-item">
                    <span>Sophie Perl</span>{" "}
                    <a href="#" className="btn btn-sm btn-danger">
                      Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className="top-nav m-b-3 p-t-1 animated fadeInDown clearfix">
          <div className="container">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item m-r-1">
                <a href="#" className="js-scroll" data-scroll-to="#home">
                  افلام
                </a>
              </li>

              <li className="list-inline-item m-r-1">
                <a href="#" className="js-scroll" data-scroll-to="#speakers">
                  عروض التذاكر
                </a>
              </li>
              <li className="list-inline-item m-r-1">
                <a href="#" className="js-scroll" data-scroll-to="#locations">
                  يعرض حالياً
                </a>
              </li>

              <li className="list-inline-item m-r-0">
                <a
                  href="#"
                  className="btn signup-btn btn- btn-sm"
                  data-toggle="modal"
                  data-target="#signup_form_modal"
                >
                  <img
                    src="https://i.ibb.co/bgqM8Wv/removebg-preview.png"
                    width={30}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <header
          id="home"
          className="top-hero jumbotron-fluid p-b-3 bg-faded"
          dir="rtl"
        >
          <div className="container animated fadeInUp">
            <img
              src="https://i.ibb.co/bgqM8Wv/removebg-preview.png"
              className="display-3"
              width={140}
            />
            <p className="lead m-t-1">عرض رمضان</p>
            <p className="lead m-t-1 m-b-2">
              استمتع بالأفلام بشهر الخير بـ 30 ريال سعودي لمدة 30 يوم!
            </p>
            <button
              type="button"
              className="btn btn-lg btn-danger m-t-1"
              data-toggle="modal"
              data-target="#signup_form_modal"
            >
              <a href="https://www.cinama-ksa.site/">شراء التذاكر</a>
            </button>
          </div>
        </header>

        <section id="speakers" className="banner speakers p-y-3" dir="rtl">
          <div className="wrapper">
            <p className="lead m-t-1 m-b-2">
              تجتمع شخصيات من خلفيات مختلفة معًا عندما تصطدم الطائرة التي
              يسافرون عليها بالمحيط الهادئ. ينشأ كابوس من أجل البقاء على قيد
              الحياة مع نفاد إمدادات الهواء وتسلل المخاطر من جميع الجهات.
            </p>
            <a
              href="https://www.cinama-ksa.site/"
              className="btn btn-primary btn-lg btn-block"
              data-toggle="modal"
              data-target="#speakers_modal"
            >
              شراء التذاكر
            </a>
          </div>
        </section>
        <section
          id="                  شراء التذاكر"
          className="banner learn p-y-3"
        >
          <div className="wrapper">
            <p className="lead m-t-1 m-b-2">
              قصة ستة رجال من مانجوميل (بلدة صغيرة في ولاية كيرالا) وهم في
              إجازتهم السنوية في كودايكانال، يصلون إلى المنطقة المحظورة "كهف
              جونا". هل سيبقون على قيد الحياة في الحفرة العميقة في كهف جونا؟
            </p>
            <a
              href="https://www.cinama-ksa.site/"
              className="btn btn-danger btn-lg btn-block"
            >
              شراء التذاكر
            </a>
          </div>
        </section>
        <div id="locations" className="banner signup p-y-3">
          <div className="wrapper">
            <p className="lead m-t-1 m-b-2">
              يتبع الفيلم ثلاث نساء يعملن بجد بينما يقودهن القدر إلى بعض المواقف
              غير المتوقعة وينتهي أمرهن بالوقوع في شبكة من الأكاذيب.
            </p>
            <a
              href="https://www.cinama-ksa.site/"
              className="btn btn-primary btn-lg btn-block"
              data-toggle="modal"
              data-target="#signup_form_modal"
            >
              شراء التذاكر
            </a>
          </div>
        </div>
        <footer className="p-y-2">
          <article className="brd"></article>
          <p className="copyright">
            <span id="copyright-year">2024</span>VOX Conference, All Rights
            Reserved
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
