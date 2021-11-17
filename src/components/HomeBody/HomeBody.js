import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeBody.css";
import sajekPng from "../../assets/Image/Sajek.png";
import sreemongolPng from "../../assets/Image/Sreemongol.png";
import sundorbonPng from "../../assets/Image/sundorbon.png";
import { Link } from "react-router-dom";

const HomeBody = () => {
  const [place, setPlace] = useState({
    name: "",
    desc: "",
    isBlock: true,
  });

  const placeHandler = (place) => {
    setPlace(place);
  };

  const handleBooking = (id) => {
    console.log(id);
    const matchedPlaced = placeDetails.filter((place) => place.id == id);
    console.log(matchedPlaced);
    matchedPlaced.isBlock = false;
    setPlace(matchedPlaced);
  };

  const placeDetails = [
    {
      name: "Sajek",
      id: 1,
      desc: "Sajek Valley (Bengali: সাজেক উপত্যকা) is one of the popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District.[3] The valley is 2,000 feet (610 m) above sea level.[4] Sajek valley is known as the Queen of Hills & Roof of Rangamati.",
      img: sajekPng,
      isBlock: true,
    },
    {
      name: "Shreemongol",
      id: 2,
      desc: "It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963",
      img: sreemongolPng,
      isBlock: true,
    },
    {
      name: "Shundorbon",
      id: 3,
      desc: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh's division of Khulna. It comprises closed and open mangrove forests, land used for agricultural purpose, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3]",
      img: sundorbonPng,
      isBlock: true,
    },
  ];

  return (
    <Container>
      <Row className="homebody-row">
        <Col md={4} className="homebody-col-md-4">
          <h1 id="description-header">Cox's bazar</h1>
          {place.name ? (
            <p id="description">{place.desc}</p>
          ) : (
            <p>
              Cox's Bazar Bengali: কক্সবাজার, romanized: Kaksabājāra; pronounced
              [kɔksbadʒaɾ]) is a city, fishing port, tourism centre, and
              district headquarters in southeastern Bangladesh. It is famous
              mostly for its long natural sandy beach.
            </p>
          )}
          <button
            className="login-button"
            id="booking-btn"
            onClick={() => handleBooking(place.id)}
          >
            Booking
          </button>
        </Col>
        <Col md={8} className={place.isBlock ? "d-flex" : "d-none"}>
          {placeDetails.map((place) => {
            return (
              <div
                className="sajek-container"
                onClick={() => placeHandler(place)}
              >
                <img src={place.img} alt={place.name} />
                <h4 className="bottom-left">{place.name}</h4>
              </div>
            );
          })}
        </Col>
        <Col md={8} className={place.isBlock ? "d-none" : "d-block"}>
          <form className="booking-form text-center">
            <div className="form-upperpart">
              <label htmlFor="origin">Origin</label>
              <br />
              <input type="text" name="origin" id="origin" />
              <br />
              <label htmlFor="destination">Destination</label>
              <br />
              <input type="text" name="destination" id="destination" />
              <br />
            </div>
            <div className="d-flex form-downpart">
              <div className="from-date">
                <label htmlFor="from">From</label>
                <br />
                <input type="date" name="from" id="from" />
              </div>
              <div className="to-date">
                <label htmlFor="to">To</label>
                <br />
                <input type="date" name="to" id="to" />
              </div>
            </div>
            <Link to="/details">
              <input
                type="submit"
                value="Start Booking"
                className="start-booking-btn"
              />
            </Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBody;
