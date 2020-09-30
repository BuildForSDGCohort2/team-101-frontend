import React from "react";
import "../stylesheets/homeScreen.css";

function Section1() {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className="mt-5 font-weight-bolder">
            Create Solutions with real data from Africa.
          </h1>
          <p className="my-2">
            Explore and accesss datasets that spans across various categories
            like banking, finance, housing, agriculture and many more...
          </p>
          <button className="btn btnClr px-5 py-2 mt-3">Discover More</button>
        </div>
        <div className="col-md-6 col-sm-12 text-center">
          <img src="images/home/Server-amico.png" alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

function Section2() {
  return (
    <section className="container py-5">
      <h1 className="font-weight-bolder mb-5">Use data to drive Innovation</h1>
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <img className="img-fluid" src="images/home/contributor.png" alt="" />
          <h4 className="font-weight-bolder">Become a contributor</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            etiam risus commodo, suscipit maecenas. Venenatis, enim in tincidunt
            mauris dolor ultricies vulputate. Tellus pellentesque aliquet.
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
          <img className="img-fluid" src="images/home/Group.png" alt="" />
          <h4 className="font-weight-bolder">Analyse and predict</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            etiam risus commodo, suscipit maecenas. Venenatis, enim in tincidunt
            mauris dolor ultricies vulputate. Tellus pellentesque aliquet.
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
          <img className="img-fluid" src="images/home/api.png" alt=" " />
          <h4 className="font-weight-bolder">Build APIs</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            etiam risus commodo, suscipit maecenas. Venenatis, enim in tincidunt
            mauris dolor ultricies vulputate. Tellus pellentesque aliquet.
          </p>
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="container text-center py-5">
      <h1 className="font-weight-bolder">With you we get bigger and better</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor etiam
        risus commodo, suscipit maecenas. Venenatis, enim in tincidunt mauris
        dolor ultricies vulputate. Tellus pellentesque aliquet.
      </p>
    </section>
  );
}

function Section4() {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1 className="font-weight-bolder mt-4">
            Explore data from local sources in 54 countries.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
            massa, iaculis morbi nisi, pulvinar. Tincidunt vitae cras nisl
            tincidunt vestibulum. Ac tempor viverra lorem lectus tristique
            rutrum. Morbi ante congue mattis malesuada pretium sapien non tempus
            a. Mauris mauris viverra urna aenean lacus vel elit.
          </p>
          <button className="btn btnClr px-5 py-2 mt-3">Discover More</button>
        </div>
        <div className="col-md-6 col-sm-12 text-center">
          <img src="images/home/africapic.png" alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

function Section5() {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src="images/home/Layer.png" alt="" className="img-fluid pb-5" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1 className="font-weight-bolder mt-5">
            Explore data from local sources in 54 countries.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
            massa, iaculis morbi nisi, pulvinar. Tincidunt vitae cras nisl
            tincidunt vestibulum. Ac tempor viverra lorem lectus tristique
            rutrum. Morbi ante congue mattis malesuada pretium sapien non tempus
            a. Mauris mauris viverra urna aenean lacus vel elit.
          </p>
          <button className="btn btnClr px-5 py-2 mt-3">Discover More</button>
        </div>
      </div>
    </section>
  );
}

function Section6() {
  return (
    <section className="py-5" style={{ background: "#344127" }}>
      <div className="container py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h4 className="text-white mt-3 mb-2">
              We know you want to subscribe to our Newsletter :){" "}
            </h4>
            <form action="">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control my-4"
                  id="inputEmail4"
                  style={{ height: "3.3rem" }}
                  placeholder="Email Address"
                />
                <button type="submit" className="btn w-100 py-3 btn_subscripte">
                  Subcription
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img src="images/home/mail.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeScrenn() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default HomeScrenn;
