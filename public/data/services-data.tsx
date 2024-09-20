interface ServicesData {
  id: string;
  preTitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  iconSrc: string;
  additionalInfo1: string;
  additionalInfo2: string;
}

const servicesData: ServicesData[] = [
  {
    id: "pruning-section",
    preTitle: "Pre-Title 1",
    title: "Pruning",
    description: `
       Pruning may be needed to reduce weight on damaged limbs, remove hazardous deadwood, or create light and space in a small garden. It also helps maintain the shape of ornamental trees and establish the structure of young trees.

Our approach considers the species, its biology, aesthetics, and its surroundings. Common methods include crown reductions, pollarding, and formative pruning.
      `,
    buttonText: "Learn More",
    buttonLink: "/services#pruning-section",
    imageSrc: "/service-imgs/service-img1.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },

  {
    id: "tree-removal-section",
    preTitle: "Pre-Title 2",
    title: "Tree Removal",
    description: `
        Sometimes a tree may need to be removed. It may be diseased, structurally unsound, or pose a risk to people or property. We rely on experience and teamwork to safely and efficiently dismantle trees in all manner of challenging urban environments.
      `,
    buttonText: "Learn More",
    buttonLink: "/services?id=tree-removal-section",
    imageSrc: "/service-imgs/service-img2.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },
  {
    id: "stump-grinding-section",
    preTitle: "Pre-Title 3",
    title: "Stump Grinding",
    description: `
        In London, space is precious. Stumps take up valuable space in a garden and may need to be removed when constructing fences, sheds, or garden rooms. Various hardwood species will resprout from a stump if left unattended. Our narrow-access stump grinder can be brought through houses, narrow doorways, and down stairs.
      `,
    buttonText: "Learn More",
    buttonLink: "/services#stump-grinding-section",
    imageSrc: "/service-imgs/service-img3.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },
  {
    id: "hedge-management-section",
    preTitle: "Pre-Title 4",
    title: "Hedge Management",
    description: `
        Hedges require routine maintenance and may need trimming at regular intervals throughout the year.

Hedge laying, once associated only with agricultural field boundaries, is increasingly being incorporated into urban spaces to increase biodiversity, filter pollution, serve as a security measure, or simply for its aesthetic value.
      `,
    buttonText: "Learn More",
    buttonLink: "/services#hedge-management-section",
    imageSrc: "/service-imgs/service-img4.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },
  {
    id: "waste-disposal-section",
    preTitle: "Pre-Title 5",
    title: "Waste Disposal",
    description: `
        Green waste disposal can be challenging in London. We process as much waste as possible into woodchip, which we offer to allotments and community gardens. Logs are used as biofuel, given to millers, or taken to green woodworking groups who might turn an unloved or dangerous tree into something beautiful!
      `,
    buttonText: "Learn More",
    buttonLink: "/services#waste-disposal-section",
    imageSrc: "/service-imgs/service-img5.jpg",
    iconSrc: "/custom-icon.png",
    additionalInfo1: "Additional Info 1",
    additionalInfo2: "Additional Info 2",
  },
];

export default servicesData;

export const longPruning = {
  title: "Pruning",
  description: `
      Trees may require pruning to reduce weight on damaged or structurally unsound limbs, to remove hazardous deadwood, or to create light and space in a small urban garden.

We might wish to keep a small ornamental tree shapely and attractive, or to establish the future shape of a young tree.

With all pruning work, it is important to analyse each individual tree contextually, taking into consideration the nature of the species, its biology, its aesthetics, and its interaction with its surroundings.

Methods of pruning may include:
- Crown reductions
- Pollarding
- Formative pruning of young trees
- Crown lifting
    `,
};
