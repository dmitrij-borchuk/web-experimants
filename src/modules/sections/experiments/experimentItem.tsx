type ExperimentItemProps = {
  id: string;
  preview?: { url: string; alt: string };
  title: string;
  description: string;
  link?: string;
};
export function ExperimentItem({ preview, title, link }: ExperimentItemProps) {
  return (
    <>
      <a href={link}>
        <div
          className="portfolio-item mx-auto"
          // data-bs-toggle="modal"
          // data-bs-target={`#${id}`}
          style={{
            width: "336px",
            height: "243px",
            padding: "16px",
            backgroundColor: "#ba4c63",
            ...(preview && {
              backgroundImage: `url(${preview.url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }),
          }}
        >
          <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div className="portfolio-item-caption-content text-center text-white">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>

          <h2
            className="portfolio-modal-title text-secondary text-uppercase mb-0"
            style={{
              textShadow: "#ebebeb 1px 0 1px",
              zIndex: 1,
            }}
          >
            {title}
          </h2>
        </div>
      </a>

      {/* <div
        className="portfolio-modal modal fade"
        id={id}
        tabIndex={-1}
        aria-labelledby={id}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      {title}
                    </h2>
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    <img
                      className="img-fluid rounded mb-5"
                      src={preview.url}
                      alt={preview.alt}
                    />
                    <p className="mb-4">{description}</p>
                    <Link
                      to="/experiment/$id"
                      params={{ id: "first" }}
                      className="[&.active]:font-bold"
                    >
                      About
                      <button
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        <i className="fas fa-xmark fa-fw"></i>
                        Run
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
