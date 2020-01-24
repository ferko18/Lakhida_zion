import React from "react";
import CountUp from "react-countup";
import moment from "moment";
import AOS from "aos";
import "aos/dist/aos.css";
import VisibilitySensor from "react-visibility-sensor";

AOS.init();

//calculate day difference for days in business

const currentDate = moment(Date.now());
const companyLaunch = moment("2016-04-19");
const daydifference = currentDate.diff(companyLaunch, "days");

function Stats() {
  return (
    <div
      className="stats"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <h2>OUR FIRM CAN HANDLE ANY OF YOUR WEBSITE NEEDS</h2>
      <div className="statsticscontainer">
        <div className="statcard">
          <div className="statnumbers">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  {" "}
                  {isVisible ? <CountUp end={40} duration={5} /> : "40"}+
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="statext">CLIENTS</div>
        </div>
        <div className="statcard">
          <div className="statnumbers">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  {" "}
                  {isVisible ? <CountUp end={130} duration={5} /> : "130"}+
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="statext">PROJECTS</div>
        </div>
        <div className="statcard">
          <div className="statnumbers">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  {" "}
                  {isVisible ? <CountUp end={20} duration={5} /> : "20"}+
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="statext">ACTIVE SITES</div>
        </div>
        <div className="statcard">
          <div className="statnumbers">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  {isVisible ? (
                    <CountUp end={daydifference} duration={5} />
                  ) : (
                    daydifference
                  )}
                  
                </div>
              )}
            </VisibilitySensor>
          </div>
          <div className="statext">DAYS IN BUSINESS</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
