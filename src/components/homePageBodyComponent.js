import React from "react";

function SearchButton() {
  return (
    <section className="mt-5">
      <div className="input-group ">
        <input
          className="form-control py-4"
          type="search"
          placeholder="Search 10,000+ datasets"
          id="search-input"
        />
        <span className="input-group-append mt-3 search_icon">
          <i className="fa fa-search"></i>
        </span>
      </div>
    </section>
  );
}

function CollapseButton() {
  return (
    <li className="list-group-item pb-0 px-0">
      <nav className="nav nav-pills nav-fill h4 nav-scrolspy">
        <a
          className="nav-item nav-link actived pb-2"
          href="#collapseOne"
          role="button"
          data-toggle="collapse"
        >
          <i className="fas fa-database pr-3"></i>Public
        </a>
        <a
          className="nav-item nav-link  pb-2"
          data-toggle="collapse"
          href="#collapseTwo"
          role="button"
        >
          <i className="fas fa-download pr-3"></i>Download
        </a>
        <a
          className="nav-item nav-link pb-2"
          data-toggle="collapse"
          href="#collapseThree"
          role="button"
        >
          <i className="far fa-heart pr-3"></i>Favorite
        </a>
        <div className="d-flex align-items-center pr-2 mb-1">
          <h4 className="mb-0 fonwel">Sort by:</h4>
          <select name="choice" className="border-0 pl-2 font-weight-bold">
            <option value="first" selected>
              Trending
            </option>
            <option value="second">Second</option>
            <option value="third">Third</option>
          </select>
        </div>
      </nav>
    </li>
  );
}

function DownloadContent() {
  return (
    <div id="collapseTwo" className="collapse" data-parent="#accordion">
      <h1 className="text-center mt-5">DOWNLOAD CONTENTE</h1>
    </div>
  );
}

function FavoriteContente() {
  return (
    <div id="collapseThree" className="collapse" data-parent="#accordion">
      <h1 className="text-center mt-5">Favorite CONTENTE</h1>
    </div>
  );
}

function PublicContente() {
  return (
    <div id="collapseOne" className="collapse show" data-parent="#accordion">
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Ibadan Urban Traffic dataset </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> Samuel001
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta1.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Lekki Housing dataset </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> Simon_Paul
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta2.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Lagos Ecommerce delivery dataset </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> databank
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta3.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Hotels in Kano dataset </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> Olusanya102
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta4.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Kwik delivery </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> Queendata
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta5.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Maize harvest 2020 </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> King_dos
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta6.png" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Abuja Food Delivery datatset </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> Pythongod
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img className="img-fluid" src="img/rect/recta7.jpg" alt="" />
          </div>
          <div className="col-11 d-flex flex-column justify-content-center">
            <h5>Lagos Accident dataset 2020 </h5>
            <div className="d-flex">
              <div className="pr-3">
                {" "}
                <i className="far fa-user pr-1"></i> Lagos_safety
              </div>
              <div className="pr-3">
                {" "}
                <i className="fas fa-download pr-1"></i>Download
              </div>
              <div className="pr-3">
                {" "}
                <i className="far fa-heart pr-1"></i>Favourite
              </div>
            </div>
          </div>
        </div>
      </li>

      <button type="button" className="btn-next">
        Next page <i className="far fa-arrow-alt-circle-right pl-2"></i>{" "}
      </button>
    </div>
  );
}

function HomePageBody() {
  return (
    <main className="mt-5">
      <div className="container">
        <SearchButton />
        <section className="mt-5">
          <ul className="list-group">
            <div id="accordion">
              <CollapseButton />
              <PublicContente />
              <DownloadContent />
              <FavoriteContente />
            </div>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default HomePageBody;
