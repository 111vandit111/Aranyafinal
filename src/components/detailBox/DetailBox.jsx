import React from "react";
import "./DetailBox.css";
import { AiOutlinePhone, AiFillMail } from "react-icons/ai";
import { TbMapSearch } from "react-icons/tb";
import menu from "/leaflet.pdf";

const DetailBox = () => {
  return (
    <div className="detailBox" id="about">
      <div className="BoxText">
        <div className="details-textBox">
          <h2 className="BHeading">
            Explore the Magnificent 'Pink City' of Jaipur, Capital of Rajasthan
          </h2>
          <div className="BDetails">
            <p>
              With its grand palaces, majestic forts, and intricate
              architecture, Jaipur offers a glimpse into the bygone era of
              Rajput valor and chivalry. Discover the magnificent Amer Fort,
              perched on a hilltop, offering breathtaking panoramic views of the
              Aravalli Hills. Marvel at the stunning Hawa Mahal, the Palace of
              Winds, adorned with intricate latticework.
            </p>
            <p>
              Aranya Hotel/resort in Rajasthan is 45 minutes from Jaipur ,a 60-
              minute drive from Jaipur International Airport & 4 hours 30
              Minutes Drive from Delhi.
              <br />
              <br />
              <div className="buttons">
                <a
                  href={menu}
                  target="_blank"
                  className="btn green smallText factsheet"
                  download="Aranya Factsheet"
                  rel="noreferrer"
                >
                  Factsheet
                </a>

                <a
                  href="https://www.secure-booking-engine.com/accounts/vNH542fVOcdncZm7B5k3gw/properties/gjHs20I36NsBRyuomcgHgA/booking-engine/web/source/4wsctBw6Oq6j-g9XuxeRzQ/"
                  target="_blank"
                  className="btn green smallText"
                  rel="noopener noreferrer"
                >
                  Make Reservation
                </a>
              </div>
            </p>
          </div>

          <div className="BIcons">
            <div className="iconBox">
              <div className="icon">
                <TbMapSearch />
              </div>
              <a href="https://goo.gl/maps/JSA6KgAeMREEqfgw6" target="_blank">
                <div className="IconHeading">Aranya By Stories</div>
              </a>
            </div>
            <div className="iconBox">
              <div className="icon">
                <AiOutlinePhone />
              </div>
              <a href="tel:+919352265004">
                <div className="IconHeading"> +91 9352265004</div>
              </a>
            </div>
            <div className="iconBox">
              <div className="icon">
                <AiFillMail />
              </div>
              <a href="mailto:aranyabystories@gmail.com" target="_blank">
                <div className="IconHeading">aranyabystories@gmail.com</div>
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
