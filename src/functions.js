function createcom (thumbnail,title,amz_Price,amz_link,flikart_price,visales_price,relia_price,bE_price){
    let html = <><div className="container-fluid  w-100 h-100 bg-light d-flex align-items-center justify-content-center">
    <img src={thumbnail} alt=""  className=" w-50  img-fluid"
    style={{

    }}
    />
    <div className=" container-fluid w-50 h-50  ">
      <p className=" text-black d-flex  ">
      ${title}
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
            <td>${amz_Price}</td>
            <td><a href={amz_link}>link</a></td>
          </tr>
          <tr>
            <td>Flipkart</td>
            <td>${flikart_price}</td>
            <td><a href="https://www.flipkart.com/apple-2020-macbook-air-m1-8-gb-256-gb-ssd-mac-os-big-sur-mgn63hn-a/p/itm3c872f9e67bc6?pid=COMFXEKMGNHZYFH9&lid=LSTCOMFXEKMGNHZYFH9P56X45&marketplace=FLIPKART&q=macbook+air+air+m1+lap&store=6bo&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=03f707fc-d36d-448d-9acb-6b8e9a94f830.COMFXEKMGNHZYFH9.SEARCH&ppt=sp&ppn=sp&qH=918e49c40ac51d16">link</a></td>
          </tr>
          <tr>
            <td>Vijay sales</td>
            <td>${visales_price}</td>
            <td><a href="https://www.vijaysales.com/apple-2020-macbook-air-m1-chip-mgn63hn-a-laptop-8gb-ram-256gb-ssd-13-3-inch-33-74-cm-display-8-core-cpu-7-core-gpu-mac-os-big-space-grey/20940">link</a></td>
          </tr>
          <tr>
            <td>RelianceDigital</td>
            <td>${relia_price}</td>
            <td><a href="https://www.reliancedigital.in/apple-mgn63hna-macbook-air-apple-m1-chip-8gb-256gb-ssd-macos-big-sur-retina-33-78-cm-13-3-inch-/p/491946461">link</a></td>
          </tr>
          <tr>
            <td>Bajaj Electronics</td>
            <td>${bE_price}</td>
            <td><a href="https://www.bajajelectronics.com/product/search?q=macbook+air+m1+256gb">link</a></td>
          </tr>
        </tbody>
      </table>
    </div>
   
  </div>
  </>

  document.getElementById("compare").innerHTML = html

}

createcom()