import React from "react";
import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
class Home extends React.Component {
  render() {
    return (
      <div className="maincontainer">
        <section>
          <div class="container py-5">
            <div class="row text-center align-items-end">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Free</h1>
                  <h2 class="h1 font-weight-bold">
                    $0
                    <span class="text-small font-weight-normal ml-2">
                      /month
                    </span>
                  </h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Single User{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 5GB Storage{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      Public Projects{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community
                      Access{" "}
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i> Unlimited Private Project{" "}
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i> Dedicated Phone Support{" "}
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i> Free Sub Domain{" "}
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i> Monthly Status Reports{" "}
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Button
                  </a>
                </div>
              </div>

              <div class="col-lg-4 mb-5 mb-lg-0">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Plus</h1>
                  <h2 class="h1 font-weight-bold">
                    $9
                    <span class="text-small font-weight-normal ml-2">
                      /month
                    </span>
                  </h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      <strong> 5 Users </strong>
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 50GB Storage{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      Public Projects{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community
                      Access{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      Private Projects{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated
                      Phone Support{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Free Sub
                      Domain{" "}
                    </li>
                    <li class="mb-3 text-muted">
                      <i class="fa fa-times mr-2"></i> Monthly Status Reports{" "}
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Button
                  </a>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
                  <h2 class="h1 font-weight-bold">
                    $49
                    <span class="text-small font-weight-normal ml-2">
                      /month
                    </span>
                  </h2>
                  <div class="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>
                      <strong> Unlimited Users </strong>
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 150GB
                      Storage{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      Public Projects{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community
                      Access{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited
                      Private Projects{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated
                      Phone Support{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>{" "}
                      <strong> Unlimited </strong>Free Sub Domain{" "}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Monthly
                      Status Reports{" "}
                    </li>
                  </ul>
                  <a
                    href="#"
                    class="btn btn-primary btn-block p-2 shadow rounded-pill"
                  >
                    Button
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
