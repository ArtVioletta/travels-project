import React from "react";
import { CardItem } from "./CardItem";

export interface CardItemI {
  id?: number;
  date: string;
  people: string;
  nameCountry: string;
  img: string;
  day: string;
}

const SecondScreen = () => {
  const data: CardItemI[] = [
    {
      id: 1,
      img: "https://wyprawy.pl/source/newsy/AMAZON%2010.JPG",
      nameCountry: "Amazonia",
      date: " 13 august",
      day: "7 days",
      people: "4 people",
    },
    {
      id: 2,
      img: "https://tanibilet.eu/wp-content/uploads/2019/09/Malediwy-apartamenty-domki-na-wodzie-1038x630.jpg",
      nameCountry: "Sri-Lanka",
      date: " 9 march",
      day: "5 days",
      people: "15 people",
    },
    {
      id: 3,
      img: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/d21b085ef2ce77c4331c462d385aed66315ae019/big-c0028d755da3df7d7160a6015869431d.jpg",
      nameCountry: "Egypt",
      date: " 3 june",
      day: "7 days",
      people: "8 people",
    },
    {
      id: 4,
      img: "https://www.expatica.com/app/uploads/sites/2/2018/06/ES-homepage-hero-e1575379738800.jpg",
      nameCountry: "Spain",
      date: "25 september",
      day: "10 days",
      people: "2 people",
    },
  ];
  return (
    <div>
      <div className="content2">
        <h2>Directions</h2>
      </div>
      <div className={"cardWrapper"} id={"directions"}>
        {data.map((el) => (
          <CardItem
            date={el.date}
            key={el.id}
            img={el.img}
            day={el.day}
            people={el.people}
            nameCountry={el.nameCountry}
          />
        ))}
      </div>
      <div style={{ padding: "70px", textAlign: "center" }}>
        <button className="supportSecond">See all destinations</button>
      </div>
    </div>
  );
};

export default SecondScreen;
