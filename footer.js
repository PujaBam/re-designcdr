class Myfooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `


      <section class="footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4">
            <img
              height="90px"
              width="90px"
              src="img/CDR Report Writer.png"
              alt=""
            />
            <p class="mt-3">
              Our boundless imagination helps us to help business solve their
              problem with technology in an innovative way.
            </p>
            <div class="icons mt-5">
              <a class="b1" href="#"><i class="bi bi-facebook"></i></a>
              <a class="b1" href="#"><i class="bi bi-instagram"></i></a>
              <a class="b1" href="#"><i class="bi bi-youtube"></i></a>
              <a class="b1" href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <h4 class="text-center">Quick Link</h4>
            <ul class="text-center mt-4">
              <li>Home</li>
              <li>Services</li>
              <li>CDR Samples</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div class="col-12 col-lg-3">
            <h4 class="text-center">Services</h4>
            <ul class="text-center mt-4">
              <li>CDR review</li>
              <li>CDR Samples</li>
              <li>CDR Samples</li>
              <li>CDR Samples</li>
              <li>CDR Samples</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    







      `
    ;
    }
  }
  customElements.define("my-footer", Myfooter);