import { StaticImageData } from "next/image";
import photo1 from "./photos/favicon.png";
import photo2 from "./photos/Logoshqip.f4d0133c.png";
import photo3 from "./photos/front.png";
import photo4 from "./photos/harrisia.png";
import photo5 from "./photos/istockphoto-1266020837-612x612.jpg";
import photo6 from "./photos/user-avatar-male-5.png";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: photo4,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: photo5,
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: photo6,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
];

export default wondersImages;