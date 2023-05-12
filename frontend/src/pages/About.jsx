import "../styles/about.css";
import Member1 from "../assets/images/Member1.png";
// import Member2 from "../assets/images/Member2.png";
// import Member3 from "../assets/images/Member3.png";

import { Row, Col } from "reactstrap";
import Newsletter from "../shared/Newsletter";

export default function About() {
  return (
    <>
      <section className="heroSection"></section>
      <section className="aboutTravelNest">
        <div className="container">
          <h1>
            <span className="small">We are</span>
            <span className="abrilFont">TravelNest</span>
          </h1>
          <p>
            Nurtured from the seed of a single idea ‘to empower the traveller
            with easy & instant travel bookings providing comprehensive
            choices’, MakeMyTrip is a pioneer in India’s online travel space.
            Founded by Deep Kalra in the year 2000, MakeMyTrip began its journey
            by serving the US-India travel market with best-value products &
            services, powered by robust technology and round-the-clock customer
            support.
            <br />
            <br />
            After successfully consolidating its position as a customer-first
            brand, known for its reliability and transparency, MakeMyTrip
            launched its India operations in 2005.
            <br />
            <br />
            As low-cost flight carriers were introduced in India, the number of
            Indians opting for online travel solutions also increased rapidly.
            And MakeMyTrip answered the call of the hour, by bringing the
            convenience of booking flights, hotels, and holiday packages in just
            a few clicks.
            <br />
            <br />
            Over the years, we have partnered with many leading brands from the
            aviation & hospitality industries, creating fruitful partner
            relations for business expansion opportunities. We also entered the
            homestays & villas and continue to procure increased market share
            market in the same. With this, we also entered the ground transport
            space and commenced offering cab, bus & train booking services.
            <br />
            <br />
            What makes our story even stronger is the performance of our newly
            launched segments, like myBiz—our comprehensive business travel
            suite and myPartner—an exclusive platform for travel agents.
            Entering the Gulf market is our latest feat, where we offer
            power-packed deals on flights & hotels.
          </p>
        </div>
      </section>

      <h1 className="model-title">Our Team</h1>
      <section>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            atque consequuntur animi consequatur illo ad cumque magnam
            recusandae quaerat porro rerum nemo culpa vero a odit voluptate
            quidem, debitis provident.
          </p>
          <ul className="leadership">
            <li>
              <div className="imgWrap">
                <img src={Member1} alt="" />
              </div>
              <h4>Siddhartha Sunkara</h4>
            </li>
            <li>
              <div className="imgWrap">
                <img src={Member1} alt="" />
              </div>
              <h4>Siddhartha Sunkara</h4>
            </li>
            <li>
              <div className="imgWrap">
                <img src={Member1} alt="" />
              </div>
              <h4>Siddhartha Sunkara</h4>
            </li>
            <li>
              <div className="imgWrap">
                <img src={Member1} alt="" />
              </div>
              <h4>Siddhartha Sunkara</h4>
            </li>
          </ul>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
