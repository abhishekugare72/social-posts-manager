const Header = () => {
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start bg-dark p-3">
        <a
          href="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a
              href="#"
              className="nav-link px-2 text-secondary"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">
            Login
          </button>
          <button type="button" className="btn btn-warning">
            Sign-up
          </button>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz4fnFO9gybBogGz5o8zOe6QHg50L31/7P1BiY1HOGVy2B07Ljbq2sv7xP"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLR20xO7ipC1c4i+OW5Stl5I5l5TV5VhF6y3z8F0G8"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Header;
