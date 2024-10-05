export function Footer() {
  return (
    <>
      {/* <!-- Footer--> */}
      <footer className="footer text-center" id="footer">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-12 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Around the Web</h4>
              {/* <!-- <a className="btn btn-outline-light btn-social mx-1" href="#!"
              ><i className="fab fa-fw fa-facebook-f"></i
            ></a> --> */}
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://twitter.com/dborchuk"
                target="_blank"
              >
                <i className="fab fa-fw fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social mx-1"
                href="https://www.linkedin.com/in/dmytro-borchuk-b2814643/"
                target="_blank"
              >
                <i className="fab fa-fw fa-linkedin-in"></i>
              </a>
              {/* <!-- <a className="btn btn-outline-light btn-social mx-1" href="#!"
              ><i className="fab fa-fw fa-dribbble"></i
            ></a> --> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>
            Copyright &copy; Dmytro Borchuk {new Date().getFullYear()}
          </small>
        </div>
      </div>
    </>
  );
}
