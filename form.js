class Myform extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
              <form>
                <div class="d-flex gap-5">
                  <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    id="fname"
                    placeholder="Name & Surname"
                    required
                  />

                  <br />

                  <input
                    type="text"
                    class="form-control"
                    name="firstname"
                    id="fname"
                    placeholder="Address"
                    required
                  />
                </div>
                <br />
                <div class="d-flex gap-5 mt-4">
                  <input
                    type="tel"
                    class="form-control"
                    name="number"
                    id="phone"
                    placeholder="Phone Number"
                  />
                  <br />
                  <input
                    type="mail"
                    class="form-control"
                    name="mail"
                    id="email"
                    placeholder="Email & Address"
                  />
                </div>
                <br />
                <div class="mt-4">
                  <textarea
                    name=""
                    class="form-control"
                    id=""
                    rows="5"
                    placeholder="Message..."
                  ></textarea>
                </div>
                <br />
                <button type="button" class="btn btn-primary">Submit</button>
              </form>
        
            
      `
      ;
      }
    }
    customElements.define("my-form", Myform);