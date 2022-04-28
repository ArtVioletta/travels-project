import React from "react";

const ThirdScreen = () => {
  return (
    <div className="content3" id={"direction"}>
      <h2 style={{ padding: "10px" }}>About Us</h2>
      <div className="contentWrapper">
        <div style={{ width: "48%" }}>
          <img
            className="about"
            src="https://www.viajarconseguro.es/blog/wp-content/uploads/2016/04/tekking-3.jpg"
            alt="about"
          />
        </div>
        <div style={{ width: "48%" }}>
          <p>Only one dream</p>
          <p>
            In each era there are people who are not limited to the idea of the
            world given to them. Their whole life is a search. It was thanks to
            such restless natures that America, Australia, New Zealand and many
            other points on the map were discovered. And the richest travelers
            became in Europe in the 15-16th century - the time of colonization.
          </p>
          <p>
            The future traveler and ethnographer was born in St. Petersburg in
            the family of an engineer. He was quickly expelled from the
            university for participating in the student movement. So he finished
            his education in Germany. From there he went on his first trip to
            the Canary Islands, then to Madeira, Morocco, the Red Sea coast. I
            went there as a fauna researcher, and returned as an ethnographer.
            He was more interested not in animals and flowers, but in people.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
