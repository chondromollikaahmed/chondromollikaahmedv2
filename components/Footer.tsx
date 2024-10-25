const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://bento.me/chondromollikaahmed"
                >
                  <i aria-hidden="true" className="fab fa-readme" />
                </a>

                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.pinterest.com/chandramallikaahmed/"
                >
                  <i aria-hidden="true" className="fab fa-pinterest" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.linkedin.com/in/chondromollikaahmed/"
                >
                  <i aria-hidden="true" className="fab fa-linkedin" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://twitter.com/chondromollika_"
                >
                  <i aria-hidden="true" className="fab fa-twitter" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://dribbble.com/ChondromollikaAhmed"
                >
                  <i aria-hidden="true" className="fab fa-dribbble" />
                </a>
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://www.behance.net/chondromollikaahmed"
                >
                  <i aria-hidden="true" className="fab fa-behance" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © {currentYear}
                <strong>Chondromollika</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by{" "}
                <strong>
                  {" "}
                  <a href="https://cyarm.cyou" target="_blank">
                    CA{" "}
                  </a>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
