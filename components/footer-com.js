function footer(){

  return `
  <button class="accordion">Footnotes</button>

    <div class="panel">
      <hr />

      <ol>
        <li>
          Quoted MRP is for 1 unit of the product. Prices are subject to change
          without prior notice.
        </li>
        <li>Applicable with A9, A7RM3, A7M3, A7SM2, A7RM2, A7M2 only.</li>
        <li>
          2 Year Standard Warranty + 1 Year Additional Warranty only upon
          registration. Conditions Apply.
        </li>
        <li>
          While efforts have been placed to provide accurate information, there
          could be human errors which may crept in. In the event of discrepancy,
          the product operating instructions supplied with product shall be the
          authentic reference point.
        </li>
        <li>
          Features, Specification, weight & price are subject to change without
          prior notice.
        </li>
        <li>
          Actual product may differ slightly in appearance to illustrations/
          picture provided.
        </li>
      </ol>
    </div>

    <div id="foot">
      <div id="footer">
        <div id="store">
          <h4>Find a store</h4>
          <div id="box1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt=""
              width="20px"
            />
            <input type="text" placeholder="Location" />

            <button>
              <a
                href="https://www.sony.co.in/microsite/retailshops/?cid=gwt:footer:location"
              >
                Search</a
              >
            </button>
          </div>
          <a
            href="https://www.sony.co.in/microsite/retailshops/?cid=gwt:footer:location"
            >See Our location</a
          >
        </div>
        <div id="support">
          <h4>Support</h4>
          <p>Online Help</p>
          <p>Track Repair Status</p>
          <p>Locate Service Centers</p>
        </div>
        <div id="news">
          <h4>In The News</h4>
          <p>Press Center</p>
        </div>
        <div id="contect">
          <h4>Contect Us</h4>
          <p>Live Chat</p>
          <p>Newsletter Subscription</p>
          <p>Contect Us</p>
        </div>
      </div>
      <div id="scroll">
        <div class="accordio">
          <div>
            <input
              type="radio"
              name="example_accordion"
              id="section1"
              class="accordion__input"
            />
            <label for="section1" class="accordion__label">Find a Store</label>
            <div class="accordion__content">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                  alt=""
                  width="20px"
                />
                <input type="text" placeholder="Location" />
                <button>
                  <a
                    href="https://www.sony.co.in/microsite/retailshops/?cid=gwt:footer:location"
                  >
                    Search</a
                  >
                </button>
              </div>
              <a
                href="https://www.sony.co.in/microsite/retailshops/?cid=gwt:footer:location"
                >See Our location</a
              >
            </div>
          </div>
          <div>
            <input
              type="radio"
              name="example_accordion"
              id="section2"
              class="accordion__input"
            />
            <label for="section2" class="accordion__label">Support</label>
            <div class="accordion__content">
              <p>Online Help</p>
              <p>Track Repair Status</p>
              <p>Locate Service Centers</p>
            </div>
          </div>
          <div>
            <input
              type="radio"
              name="example_accordion"
              id="section3"
              class="accordion__input"
            />
            <label for="section3" class="accordion__label">In The News</label>
            <div class="accordion__content">
              <p>Press Center</p>
            </div>
          </div>

          <div>
            <input
              type="radio"
              name="example_accordion"
              id="section4"
              class="accordion__input"
            />
            <label for="section4" class="accordion__label">Contect Us</label>
            <div class="accordion__content">
              <p>Live Chat</p>
              <p>Newsletter Subscription</p>
              <p>Contect Us</p>
            </div>
          </div>
        </div>
      </div>

      <div id="lastbox">
        <div id="moreinfo">
          <p>Company Info</p>
          <p>E-Waste Management</p>
          <p>Corporate Social Responsibilities</p>
          <p>Career</p>
          <p>Professional Products & Solutions</p>
          <p>Site Map</p>
        </div>
        <div id="logo">
          <div id="ind">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1350px-Flag_of_India.svg.png"
              alt=""
              width="30px"
              height="20px"
            />
            <p>India</p>
          </div>
          <div id="social">
            <div id="twitter">
              <a href="https://twitter.com/sony">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384049.png"
                  alt=""
                  width="30px"
              /></a>
            </div>
            <div id="youtube">
              <a href="https://youtube.com/sony">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384044.png"
                  alt=""
                  width="30px"
              /></a>
            </div>

            <div id="fb">
              <a href="https://fb.com/sony">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
                  alt=""
                  width="30px"
              /></a>
            </div>
            <div id="insta">
              <a href="https://instagram.com/sony"
                ><img
                  src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/66_Instagram-128.png"
                  alt=""
                  width="30px"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div id="copy">
        <p>COPYRIGHT © 2022 SONY INDIA ALL RIGHT RESERVED</p>
        <div>
          <p>
            <a
              href="https://www.sony.co.in/microsite/termsofuse/?cid=gwt%3Afooter%3Aterms"
              >TERMS AND CONDITIONS OF WEBSITE USE</a
            >
          </p>
          <p>
            <a
              href="https://www.sony.co.in/microsite/privacypolicy/?cid=gwt:footer:privacy"
            >
              PRIVICY POLICY</a
            >
          </p>
        </div>
      </div>
    </div>`
}

export default footer;