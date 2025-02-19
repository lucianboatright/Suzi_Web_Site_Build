import React from 'react';

import image1 from '../../public/images/City/SuziCityCarosel1.png'


const cityImagesCarusel = [
    { src: require('../assets/images/City/SuziCityCarosel1.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel2.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel3.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel4.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel5.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel6.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel7.png'), alt: 'React' },
    { src: require('../assets/images/City/SuziCityCarosel8.png'), alt: 'React' },
  ];
  
  import cityImage from '../assets/images/City/SuziCityPic1.jpg'
  
const UniImagesCarusel = [
    { src: require('../assets/images/Uni/qbe-closed.jpg'), alt: 'React' },
    { src: require('../assets/images/Uni/qbe-open.jpg'), alt: 'React' },
];

import folkstoneImage from '../assets/images/Folkstone/SuziFolkstone1 .png'

import patasieImage from '../assets/images/Ptasie/SuziPtasi1.png'

const patasieImagesCarusel = [
    { src: require('../assets/images/Ptasie/SuziPtasieCarosel1.jpg'), alt: 'React' },
    { src: require('../assets/images/Ptasie/SuziPtasiCarosel2.jpg'), alt: 'React' },
    { src: require('../assets/images/Ptasie/SuziPtasiCarosel3.png'), alt: 'React' },
    { src: require('../assets/images/Ptasie/SuziPtasieCarosel4.jpg'), alt: 'React' },
];

const sketchImagesCarusel = [
    { src: require('../assets/images/Sketch/SuziSketch1.jpg'), alt: 'React' },
    { src: require('../assets/images/Sketch/SuziSketch2.jpg'), alt: 'React' },
];

import yanchepImage1 from '../assets/images/Yanchep/SuziYanchep1.jpg'
import yanchepImage2 from '../assets/images/Yanchep/SuziYanchep2.png'

const sportsHallImagesCarusel = [
    { src: require('../assets/images/SportsHall/SuziSportsCarosel1.jpg'), alt: 'React' },
    { src: require('../assets/images/SportsHall/SuziSportsCarosel2.jpg'), alt: 'React' },
];

const publicRelmImagesCarusel = [
    { src: require('../assets/images/PublicRealm/SuziPublicCarosel1.png'), alt: 'React' },
    { src: require('../assets/images/PublicRealm/SuziPublicCarosel2.png'), alt: 'React' },
    { src: require('../assets/images/PublicRealm/SuziPublicCarosel3.png'), alt: 'React' },
];

import publicRelmImage from '../assets/images/PublicRealm/SuziPublicImage1.jpg'

import studiesPic1 from '../assets/images/Studies/ps01-bachelor-12.png'
import studiesPic2 from '../assets/images/Studies/ps01-bachelor-13.png'
import studiesPic3 from '../assets/images/Studies/ps01-bachelor-14.png'

const StudiesImagesCarusel = [
    { src: require('../assets/images/Studies/ps01-bachelor-01.png'), alt: 'React' },
    { src: require('../assets/images/Studies/ps01-bachelor-02.png'), alt: 'React' },
    { src: require('../assets/images/Studies/ps01-bachelor-04.png'), alt: 'React' },
    { src: require('../assets/images/Studies/ps01-bachelor-05.png'), alt: 'React' },
    { src: require('../assets/images/Studies/ps01-bachelor-06.png'), alt: 'React' },
    { src: require('../assets/images/Studies/ps01-bachelor-07.png'), alt: 'React' },
    { src: require('../assets/images/Studies/ps01-bachelor-08.png'), alt: 'React' },
];


const RenderingImagesCarusel = [
    { src: require('../assets/images/Rendering/shot-1.png'), alt: 'React' },
    { src: require('../assets/images/Rendering/shot-2.png'), alt: 'React' },
];

import renderingImage1 from '../assets/images/Rendering/DSC_1235.png'

const modelingImagesCarusel = [
    { src: require('../assets/images/3DModeling/model-for-linkedin-copy.jpg'), alt: 'React' },
    { src: require('../assets/images/3DModeling/modelingImage2.jpg'), alt: 'React' },
];


const graphicsImagesCarusel = [
    { src: require('../assets/images/Graphics/pies-minced.jpg'), alt: 'React' },
    { src: require('../assets/images/Graphics/pies-minced.jpg'), alt: 'React' },
];

import graphicsImage1 from '../assets/images/Graphics/SuziGraphics1.png'

const zarriBeerImagesCarusel1 = [
    { src: require('../assets/images/ZarriBeerLab/Screenshot-2025-01-05-at-14.58.50.png'), alt: 'React' },
    { src: require('../assets/images/ZarriBeerLab/Screenshot-2025-01-05-at-14.59.01.png'), alt: 'React' },
];

const zarriBeerImagesCarusel2 = [
    { src: require('../assets/images/ZarriBeerLab/Layer-2.png'), alt: 'React' },
    { src: require('../assets/images/ZarriBeerLab/Layer-3.png'), alt: 'React' },
    { src: require('../assets/images/ZarriBeerLab/Layer-4.png'), alt: 'React' },
];

import zarriBeerImage1 from '../assets/images/Graphics/SuziGraphics1.png'
import { SwiperCarousel } from '../Components/ImageCrousel/ImageCarousel';
import { StyledAnchorTag } from '../Components/AnchorTag/StyledAnchorTag';
import { StyledTitleLink } from '../Section/Section.styles';

export const sections = [
    {
      id: 1,
      category: "ARCHITECTURAL",
      title: "CITY +",
      italicTitle: "thesis",
      lowerTitle: "as STH+AU",

      text: `a ‘City plus - the study of boundary conditions involved in the additive aspect of the city space in terms of its redefinition and search for creating custom interactions with defined space structure.’ on the example of via Po in Torino <br /><br /> Observation of reality, an analysis of space, piling up questions of their performance and forming (?) factors - all can be the stimulus for rethinking the formula of space called city.An attempt is made to answer questions - is stating current situation on the foundation of history exclusively correct approach? Should the creation of the space for living in the present times by already inspected methods, while understanding the passage of time and the transience of the act of defining, be considered as suitable for today? Is not the creation to become outdated as soon as it is created? That would be so simply for a reason of passing time and the constant change of needs? Does not a definition - to be current - need to be continuously ready for its redefinition, as does the actualisation happen in a sequence of evolution? Is there a sense of deepening this thought? What actually is the space for current society? What is the use of it? Moreover, what are the opportunities ready to be used?`,
      content:  <>
      <img style={{height: '70%'}} src={cityImage} alt="CityImage" />
       <SwiperCarousel  images={cityImagesCarusel} width="333.5px" height="472.5px" autoplaySpeed={2000} transitionSpeed={2000} snapMode={false}/>
      </>
    },
    {
      id: 2,
      category: "SPATIAL",
      title: "UNI",
      italicTitle: "underground extension \n of a private detached house",
      lowerTitle: "with C+HO_aR",
      lowerTitleUrl: "http://cplushoar.com/",
      text: "Garden by the family home creates a scope for an extension as a hidden den where library and office takes its space. External entrance -arrival whilst sinking in the depths of the green. Promise of a blue observed from inside through skylights.",
      content:  <SwiperCarousel  images={UniImagesCarusel} width="564.5px" height="212.7px" autoplaySpeed={2000} transitionSpeed={10} snapMode={false} />,
    },
    {
      id: 3,
      category: "URBAN",
      title: "FOLKESTONE",
      italicTitle: "dreams",
      lowerTitle: "with EAST",
      lowerTitleUrl:"https://www.east.uk.com/",
      text: "Urban scenarios.",
      content: <img src={folkstoneImage} />,
    },
    {
      id: 4,
      category: "GRAPHIC",
      title: "PTASIE RADIO",
      italicTitle: "private flat",
      lowerTitle: "as STH+AU ",
      text: "Square shell of 40 meters bounded by: wall of windows, wall - a doorway, wall with media, blank wall. Tight but with an array of spaces - all in one - ones on their own - together yet disparate. work in progress.",
      content: <>
      <img src={patasieImage} alt="CityImage" style={{height: '165.5px', width: '154.3px'}}/>
       <SwiperCarousel  images={patasieImagesCarusel} width="441.5px" height="213px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>
      </>,
    },
    {
      id: 5,
      category: "GRAPHIC",
      title: "SKETCH",
      italicTitle: "rooftop extension of a private school",
      lowerTitle: "Central London",
      text: "up",
      content: <SwiperCarousel  images={sketchImagesCarusel} width="441.5px" height="213px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>      ,
    },
    {
      id: 6,
      category: "URBAN",
      title: "MODELLING for Yanchep",
      italicTitle: "handmade bee and not only",
      lowerTitle: "for Sir Peter Cook at CRAB studio ",
      lowerTitleUrl:"https://crabstudio.com/",
      text: "Something from nothing - idea into scaleable reality.<br /><br /> Use of with multiple media:<br /> + paper<br /> + wood<br /> + metal<br /> + plastic.",
      content: <>
      <img src={yanchepImage1} alt="CityImage" style={{ width: '109.5px', height: '139.5px', marginRight: '6rem'}}/>
      <img src={yanchepImage2} alt="CityImage" />
      </>,
    },
    {
      id: 7,
      category: "ARCHITECTURAL",
      title: "SMALL SPORTS HALL",
      italicTitle: "built",
      lowerTitle: "with C+HO_aR",
      lowerTitleUrl:"http://cplushoar.com/",
      text: "Architectural and structural design.",
      content: <SwiperCarousel images={sportsHallImagesCarusel} width="328.55px" height="174px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>      ,
    },
    {
      id: 8,
      category: "URBAN",
      title: "PUBLIC REALM",
      italicTitle: "in High Barnet",
      lowerTitle: "with EAST",
      lowerTitleUrl: "https://www.east.uk.com/",
      text: "Extensive public realm scheme with housing on the rather uneven grounds by one of the main London’s underground end station.",
      content: <>
       <SwiperCarousel  images={publicRelmImagesCarusel} width="217px" height="390px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>
      <img src={publicRelmImage} alt="CityImage" style={{height: '288px', width: '407.5', marginLeft: '1rem'}}/>
      </>,
    },
    {
      id: 9,
      category: "URBAN",
      title: "STUDIES",
      italicTitle: "multischeme",
      text: "Riverbank of a Polish city offers a shallow but long plot bounded by housing and industrial qualities with a busy tram course along the border. Project arises by dissecting the current situation simultaneously looking for possibilities within the array of a mixed use scheme.<br /><br /> Detached form the public rush, all apartments are situated by the shore with the view and the promenade. 3 office blocks act as a part of the sound buffer with additional vertical planes and shallow fountains where the social opportunities boost. Student apartments are in the transition zone - all connected via generous corridors and active ground floor carried by underground garage.",
      content: <>
       <SwiperCarousel  images={StudiesImagesCarusel} width="217px" height="129px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>
       <div style={{justifyContent: 'space-evenly', marginLeft: '3rem' }}>
            <img src={studiesPic1} alt="CityImage" style={{width: '328.5px', height: '59.6px', marginBottom: '2rem', marginTop: '1rem'}} />
            <img src={studiesPic2} alt="CityImage" style={{width: '328.5px', height: '59.6px', marginBottom: '2rem'}} />
            <img src={studiesPic3} alt="CityImage" style={{width: '328.5px', height: '59.6px'}} />
        </div>
      </>,
    },
    {
      id: 10,
      category: "URBAN",
      title: "RENDERING",
      italicTitle: "extension of existing school complex",
      lowerTitle: "with C+HO_aR",
      lowerTitleUrl: "http://cplushoar.com/",
      text: "Going up...",
      content: <>
                <SwiperCarousel  images={RenderingImagesCarusel} width="217px" height="125px" autoplaySpeed={2000} snapMode={false} transitionSpeed={10}/>
                <img src={renderingImage1} alt="CityImage" style={{width: '441.5px', height: '203.8px', marginBottom: '2rem', marginTop: '1rem'}} />
            </>,
    },
    {
      id: 11,
      category: "URBAN",
      title: "3D MODELLING",
      italicTitle: "ocean house - WEST 507",
      lowerTitle: "for Mei architects and planners",
      lowerTitleUrl: "https://mei-arch.eu/",
      text: "Detailed 3D modelling of architectural volumes completed in narrow time windows.",
      link: "https://mei-arch.eu/projecten/lofts-in-west507/",
      content: <>
          <StyledTitleLink>
            <a target="_blank" rel="noopener noreferrer" href={"https://mei-arch.eu/projecten/lofts-in-west507/"}>https://mei-arch.eu/projecten/lofts-in-west507/</a>
          </StyledTitleLink>
          <SwiperCarousel  images={modelingImagesCarusel} width="449.5px" height="112.5px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>
        </>,
    },
    {
      id: 12,
      category: "URBAN",
      title: "GRAPHICS",
      italicTitle: "work in progress",
      lowerTitle: "with EAST ",
      text: "Work & Play.",
      content: <>
      <div style={{ marginLeft: '0px', marginRight: 'auto'}} >

      <SwiperCarousel  images={graphicsImagesCarusel} width="143px" autoplaySpeed={1000} snapMode={true} transitionSpeed={1000}/>
      </div>
      <img src={graphicsImage1} alt="CityImage" style={{width: '143px', marginRight: '2rem',}} />
  </>,
    },
    {
      id: 13,
      category: "URBAN",
      title: "ZARRI BEER LAB",
      italicTitle: "Villa Zarri",
      lowerTitle: "with MONOLAB",
      lowerTitleUrl:"https://www.monolab.nl/",
      text: "One of the leading Italian breweries investing to create a quality space for craft brewery to give the visitors a comprehensive experience, not only will it be possible to taste the products, but to learn how the products are made, thus enjoying a cultural and entertaining experience.<br /><br /> Programmatic requirements: multi-purpose space, shop, laboratory, tasting hall, restaurant, beer accommodation.<br /><br /> The Park: current sets of trees already create a number of ‘green rooms’. Together with the proposed smaller follies, it makes a domain full of discoveries. Children have their own dedicated place to build up structures of wood. Villa and Lab both have new extended terraces that lead to a pavilion in the center. The Park façade of The Lab is set back to create a terrace between interior and exterior. Openable glazed facade turns Lab and Park into one.",
      link: "https://www.monolab.nl/projects/zarri-beer-lab/",
      content: <>
                <StyledTitleLink>
            <a target="_blank" rel="noopener noreferrer" href={"https://www.monolab.nl/projects/zarri-beer-lab/"}>https://www.monolab.nl/projects/zarri-beer-lab/</a>
          </StyledTitleLink>
<div style={{marginTop: '15rem'}}>
      <SwiperCarousel  images={zarriBeerImagesCarusel2} width="102px" height="276.3px" autoplaySpeed={2000} snapMode={false} transitionSpeed={1}/>
</div>
      <SwiperCarousel  images={zarriBeerImagesCarusel1} width="449.5px" height="303px" autoplaySpeed={4000} fadeMode={true} transitionSpeed={4000}/>
  </>,
    },
  ];
