interface AdditionalInfo {
  info1: string;
  info2: string;
}

interface ServiceCardData {
  preTitle: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  iconSrc: string;
  additionalInfo1: string;
  additionalInfo2: string;
}

const serviceCardData: ServiceCardData[] = [
  {
    preTitle: "Pre-Title 1",
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet 1...",
    buttonText: "Learn More",
    imageSrc: "/service-imgs/service-img1.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },

  {
    preTitle: "Pre-Title 2",
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet 2...",
    buttonText: "Learn More 2",
    imageSrc: "/service-imgs/service-img2.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },
  {
    preTitle: "Pre-Title 3",
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet 3...",
    buttonText: "Learn More 3",
    imageSrc: "/service-imgs/service-img3.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },
];

export default serviceCardData;
