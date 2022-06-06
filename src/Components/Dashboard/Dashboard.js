import React from "react";
import "./Dashboard.css";

import heart from "../../assets/icons/Heart.svg";
import game from "../../assets/icons/Game.svg";
import bag from "../../assets/icons/Bag.svg";
import work from "../../assets/icons/Work.svg";

export default function Dashboard() {
  return (
    <div className="body">
      <div class="container">
        <div class="row align-items-stretch">
          <div class="col-md-12">
            <span className="dashboard">Dashboard</span>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>
      </div>

      <div class="container">
        <div className="row">
          <div className="col-md-3">
            <div className="products d-flex align-items-center">
              <div className="items-views mx-3" id="items">
                <img src={heart} className="items" alt="Views" />
              </div>

              <div className="">
                <span className="prod-title"> 17,000</span>
                <br></br>
                <span className="prod-label"> Products Views</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="products d-flex align-items-center">
              <div className="items-links mx-3" id="items">
                <img src={game} className="items" alt="Clicks" />
              </div>

              <div className="">
                <span className="prod-title"> 7,000</span>
                <br></br>
                <span className="prod-label"> Link Clicks</span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="products d-flex align-items-center">
              <div className="items-rate mx-3">
                <img src={bag} className="items" alt="Rate" />
              </div>

              <div className="">
                <span className="prod-title"> 30%</span>
                <br></br>
                <span className="prod-label"> Conversion Rate</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="products d-flex align-items-center">
              <div className="items-sales mx-3" id="items">
                <img src={work} className="items" alt="Sales" />
              </div>

              <div className="">
                <span className="prod-title"> $2000</span>
                <br></br>
                <span className="prod-label"> Sales</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="reports"></div>
          </div>

          <div className="col-md-4">
            <div className="countries"></div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">&nbsp;</div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="recentOrders"></div>
          </div>

          <div className="col-md-4">
            <div className="top"></div>
          </div>

          <div class="row">
            <div class="col-md-12">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
