import React from "react";
// import kImage from '/assets/k.png';

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid nav">
          <a className="navbar-brand  ps-2" href="#">
            Shopsmart
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Profile
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

function Home() {
  return (
    <>
      <section style={{ height: "70vh" }}>
        <div
          id="carouselId"
          className="carousel slide h-100 m-3"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner h-100" role="listbox">
            <div className="carousel-item active h-100">
              <img
                src="https://plus.unsplash.com/premium_photo-1672883552341-eaebc9240719?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid w-100 h-100 d-block"
                alt="First slide"
                style={{ objectFit: "cover" }}
              />
              {/* Caption */}
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100 w-100 "
                style={{
                  top: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <h2 className="text-white">Welcome to Shopsmart</h2>
                <p className="text-white">Your one-stop shop for everything</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: "100%" }}>
        <div className="container mt-5">
          <div className="row ">
            <div className="col-sm-4 my-3  d-flex">
              <div className="card p-4 d-flex flex-column">
                <img
                  src="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg"
                  className="card-img-top"
                  alt="Card Image"
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                    
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Apple MacBook Air Laptop</h5>
                  <p className="card-text">
                    Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm
                    Retina Display, 8GB RAM, 256GB SSD Storage, Backlit
                    Keyboard, FaceTime HD Camera, Touch ID. Works with
                  </p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Know Best Price
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 my-3 d-flex">
              <div className="card p-4 d-flex flex-column">
                <img
                  src="https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z9.jpg"
                  className="card-img-top"
                  alt="Card Image"
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">IQOO Z9</h5>
                  <p className="card-text">
                    iQOO Z9 5G (Brushed Green, 8GB RAM, 128GB Storage) |
                    Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 120Hz
                    AMOLED with 1800 nits Local Peak Brightness | 44W Charger in
                    The Box
                  </p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Know Best Price
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 my-3 d-flex">
              <div className="card p-4 d-flex flex-column">
                <img
                  src="https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UL480_FMwebp_QL65_.jpg"
                  className="card-img-top"
                  alt="Card Image"
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Apple iPhone 15 Pro Max</h5>
                  <p className="card-text">
                    Apple iPhone 15 Pro Max (256 GB) - Black Titanium
                  </p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Know Best Price
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 my-3 d-flex">
              <div className="card p-4 d-flex flex-column">
                <img
                  src="https://m.media-amazon.com/images/I/51gHGxAfg1L._AC_UL480_FMwebp_QL65_.jpg"
                  className="card-img-top"
                  alt="Card Image"
                  style={{
                    objectFit: "contain",
                    height: "200px",
                    width: "100%",
                  }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Havells 1200 Watts Foldable Hair Dryer
                  </h5>
                  <p className="card-text">
                    Havells 1200 Watts Foldable Hair Dryer; 3 Heat Settings With
                    Cool Shot (Hot/Cool/ Warm), Heat Balance Technology|Cool
                    Turquoise|Your Perfect Blow Dry Companion For Effortless
                    Hair Styling|Hd3151
                  </p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Know Best Price
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 my-3 d-flex">
              <div className="card p-4 d-flex flex-column">
                <a href="">
                  <li className="  list-unstyled">
                    <img
                      src="https://rukminim2.flixcart.com/image/832/832/xif0q/liquid-detergent/p/p/1/-original-imahf4mpkkcewcfx.jpeg?q=70&crop=false"
                      className="card-img-top"
                      alt="Card Image"
                      style={{
                        objectFit: "contain",
                        height: "200px",
                        width: "100%",
                      }}
                    />
                  </li>
                </a>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    Ariel Front Load Liquid Detergent
                  </h5>
                  <p className="card-text">
                    Ariel front load liquid detergent, 4 Ltr, Removes Tough
                    Stains, Specially designed for
                  </p>
                  <a href="#" className="btn btn-primary mt-auto">
                    Know Best Price
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <section
        style={{ height: "10vh", backgroundColor: "orange" }}
        className="mt-auto"
      >
        <div className="container-fluid h-100">
          <ul className="list-unstyled d-flex justify-content-center align-items-center h-100 m-0">
            <li className="list-item text-black-50">@Shop Smart</li>
          </ul>
        </div>
      </section>
    </>
  );
}




function Comparision(){
  return (
    <>
    <div className="container-fluid mt-5 d-flex flex-column" id="compare"
    style={{height : "70vh"}}>
      <div className="container-fluid  w-100 h-100 bg-light d-flex align-items-center justify-content-center">
        <img src="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY327_FMwebp_QL65_.jpg" alt=""  className=" w-50  img-fluid"
        style={{

        }}
        />
        <div className=" container-fluid w-50 h-50  ">
          <p className=" text-black d-flex  ">
          Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey
          </p>

        </div>

      </div>
      <div className="container-fluid mt-3">
       
        <div class="table-responsive">
          <table class="table table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th rowSpan={2}>website name</th>
                <th>price</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amazon</td>
                <td>₹58,990 </td>
                <td><a href="https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_1_sspa?crid=VYXQ9VT0UFI9&dib=eyJ2IjoiMSJ9.dWH1OrW0wP6rd-rDYUcSzq-BizwZwJG7-86FQG3-mY1rAZwNhzbMKMbhOZEeykl1i59NB_XxwSCsng-SoUwyA973lcMhLq9Nvklo1rBSEqfJXxbX5-shH6dJK6VC7TAaGz_AJhesBBtQVbxB8P2eu-s-O0yuCRMDJ3a2gnepKH3NqxbdJ1Pgvd92if1sg7-uC70aEW629Lpw_sPSnjbYuG--wrDKCopaiECWKAFIdyY.-U_PqtFDrbXX_DyIzWjo8j8ecjzdFuevJMLhL9ANoqU&dib_tag=se&keywords=macbook&qid=1727704248&sprefix=macbook%2Caps%2C253&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1">link</a></td>
              </tr>
              <tr>
                <td>Flipkart</td>
                <td>₹71,990</td>
                <td><a href="https://www.flipkart.com/apple-2020-macbook-air-m1-8-gb-256-gb-ssd-mac-os-big-sur-mgn63hn-a/p/itm3c872f9e67bc6?pid=COMFXEKMGNHZYFH9&lid=LSTCOMFXEKMGNHZYFH9P56X45&marketplace=FLIPKART&q=macbook+air+air+m1+lap&store=6bo&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=03f707fc-d36d-448d-9acb-6b8e9a94f830.COMFXEKMGNHZYFH9.SEARCH&ppt=sp&ppn=sp&qH=918e49c40ac51d16">link</a></td>
              </tr>
              <tr>
                <td>Vijay sales</td>
                <td>₹72,590</td>
                <td><a href="https://www.vijaysales.com/apple-2020-macbook-air-m1-chip-mgn63hn-a-laptop-8gb-ram-256gb-ssd-13-3-inch-33-74-cm-display-8-core-cpu-7-core-gpu-mac-os-big-space-grey/20940">link</a></td>
              </tr>
              <tr>
                <td>RelianceDigital</td>
                <td>₹74,689</td>
                <td><a href="https://www.reliancedigital.in/apple-mgn63hna-macbook-air-apple-m1-chip-8gb-256gb-ssd-macos-big-sur-retina-33-78-cm-13-3-inch-/p/491946461">link</a></td>
              </tr>
              <tr>
                <td>Bajaj Electronics</td>
                <td>₹ 92,900</td>
                <td><a href="https://www.bajajelectronics.com/product/search?q=macbook+air+m1+256gb">link</a></td>
              </tr>
            </tbody>
          </table>
        </div>
       
      </div>

    </div>
    
    
    
    
    
    </>
  )
}







export { Nav, Home,Footer,Comparision};
