import React from "react";
import "../index.scss";

export default function Footer(props) {
  return (
    <div class="footer ">
      <div class="container">
        <hr />
        <div class="row">
          <div class="col">
            <h4>Julia Di Monte</h4>
            <hr />
            <p>Phone: +1 (647) - 382 - 3731</p>
            <p>
              Email:
              <a href="mailto:dimontejulia@gmail.com">
                {" "}
                dimontejulia@gmail.com
              </a>
            </p>
            <p>Toronto, Ontario</p>
          </div>
          <div class="col">
            <h4>Find me on:</h4>
            <hr />
            <p>
              <a href="https://www.linkedin.com/in/juliadimonte/"> LinkedIn</a>
            </p>
            <p>
              <a href="https://github.com/dimontejulia"> Github</a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
