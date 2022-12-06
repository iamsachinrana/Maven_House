import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";

export const magic = new Magic("pk_live_1C298480B4160A8F", {
  network: "goerli",
  locale: "en_US",
  extensions: [new ConnectExtension()]
});

export const navlinks = [
  {
    link: "Explore", dropdown: [
      { path: 'explore-collection', link: 'Collection' },
      { path: 'explore-artist', link: 'Artist' },
    ]
  },
  {
    link: "Resources", dropdown: [
      { path: 'blog', link: 'Blog' },
      { path: 'help', link: 'Help center' },
      { path: 'top-nft', link: 'Top NFTs' },
    ]
  },
  { path: "/watchlist", link: "Watchlist" },

  {
    link: "Create", dropdown: [
      { path: 'create-collection', link: 'New collection' },
      { path: 'create-item', link: 'New item' },
    ]
  },
];
export const singerImage = [
  {
    id: 1,
    imgpath: "/images/login/Kendrick.png",
    name: "Kendrick Lamar",
    paragraph: "Kendrick Lamar Duckworth is an American rapper and songwriter. Known for his progressive musical styles and socially conscious songwriting",
    data: "Jan 18 2022"
  },
  {
    id: 2,
    imgpath: "/images/login/Lil-Nas-x.png",
    name: "Lil Nas x",
    paragraph: "Montero Lamar Hill, known by his stage name Lil Nas X, is an American rapper, singer, and songwriter.",
    data: "Jan 18 2022"
  },
  {
    id: 3,
    imgpath: "/images/login/DRAKE.png",
    name: "DRAKE",
    paragraph: "Canadian rapper, singer, and actor. An influential figure in contemporary popular music, he has been credited for popularizing singing and R&B sensibilities in hip hop.",
    data: "Jan 18 2022"
  },
  {
    id: 4,
    imgpath: "/images/login/DOJA-CAT.png",
    name: "DOJA CAT",
    paragraph: "American rapper and singer. Born and raised in Los Angeles, Her song 'so High' caught the attention of RCA Records, with which she signed a joint record deal at the age of 17",
    data: "Jan 18 2022"
  },
  {
    id: 5,
    imgpath: "/images/login/Emiway-Bantai.png",
    name: "Emiway Bantai",
    paragraph: "Emiway Bantai is a very popular Indian rapper,singer, lyricist. He creates hip-hop rap songs.",
    data: "Jan 18 2022"
  }
  // {
  //   imgpath: "/images/login/img6.png",
  //   name: "Honey Singh",
  //   paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum",
  //   data: "Jan 18 2022"
  // },
  // {
  //   imgpath: "/images/login/img7.png",
  //   name: "Honey Singh",
  //   paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam debitis omnis corporis eum",
  //   data: "Jan 18 2022"
  // }
];

export const eventCardDetail = [
  {
    id: 1,
    imgpath: "../public/images/creaters-name/kendrick.png",
    title: "KENDRICK LAMAR KENDRICK LAMAR KENDRICK LAMAR",
    description: "Join Dane Cook on October 5th for his latest stand-up comedy event ‘Above It All’ filmed from his front porch overlooking Los Angeles. This all new comedy routine is his third w/ director Mart...",
  },
  {
    id: 2,
    imgpath: "../public/images/creaters-name/lil.png",
    title: "LIL NAS X LIL NAS X LIL NAS X",
    description: "Join Dane Cook on October 5th for his latest stand-up comedy event ‘Above It All’ filmed from his front porch overlooking Los Angeles. This all new comedy routine is his third w/ director Mart...",
  },
  {
    id: 3,
    imgpath: "../public/images/creaters-name/drake.png",
    title: "DRAKE DRAKE DRAKE DRAKE DRAKE",
    description: "Join Dane Cook on October 5th for his latest stand-up comedy event ‘Above It All’ filmed from his front porch overlooking Los Angeles. This all new comedy routine is his third w/ director Mart...",
  },
  {
    id: 4,
    imgpath: "../public/images/creaters-name/doja.png",
    title: "DOJA CAT DOJA CAT DOJA CAT DOJA CAT",
    description: "Join Dane Cook on October 5th for his latest stand-up comedy event ‘Above It All’ filmed from his front porch overlooking Los Angeles. This all new comedy routine is his third w/ director Mart...",
  },
  {
    id: 5,
    imgpath: "../public/images/creaters-name/emiway.png",
    title: "EMIWAY EMIWAY EMIWAY EMIWAY EMIWAY",
    description: "Join Dane Cook on October 5th for his latest stand-up comedy event ‘Above It All’ filmed from his front porch overlooking Los Angeles. This all new comedy routine is his third w/ director Mart...",
  },

];

// export const blogcard = [
//   {
//     imgpath: "/images/blog/blog_card1.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card2.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card3.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card4.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card5.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card6.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card7.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
// ];

// export const helpcard = [
//   {
//     imgpath: "/images/help/help_card1.png",
//     heading: "Getting Started",
//     para: "Everything you need to know about creating an account, setting up your wallet, how to use Artscape effectively to trade your NFT.",
//     btn: "See details",
//   },
//   {
//     imgpath: "/images/help/help_card2.png",
//     heading: "Buying",
//     para: "Learn how to buy your first NFT on Artscape and understand the gas fees. Once you've selected the masterpiece you want to buy, the next step is to make an offer.",
//     btn: "See details",
//   },
//   {
//     imgpath: "/images/help/help_card3.png",
//     heading: "Selling",
//     para: "Once you've linked your wallet, set your profile, made a listing, now it's time to sell. This guide will tell you how to get started.",
//     btn: "See details",
//   },
//   {
//     imgpath: "/images/help/help_card4.png",
//     heading: "Creating",
//     para: "A step-by-step guide on how to set up your first NFT. After editing your profile and setting up the wallet, create your first NFT collection to start selling.",
//     btn: "See details",
//   },
//   {
//     imgpath: "/images/help/help_card5.png",
//     heading: "FAQ",
//     para: "Royalties mean paying the creator a specific percentage of profits or sales in business. In NFT, royalty is a payment that compensates the original NFT creators for using their non-fungible tokens (NFTs).",
//     btn: "See details",
//   },
//   {
//     imgpath: "/images/help/help_card6.png",
//     heading: "User Safety",
//     para: "Know about the safety process and guidelines on Artscape Welcome to Artscape! Here are the terms of services that regulate your access to the Artscape website and any other features or tools in connection with our services",
//     btn: "See details",
//   },
// ];
// export const categories = [
//   { imgpath: "/images/home/art.png", title: "Art" },
//   { imgpath: "/images/home/art.png", title: "Photography" },
//   { imgpath: "/images/home/art.png", title: "Music" },
//   { imgpath: "/images/home/art.png", title: "Sports" },
//   { imgpath: "/images/home/art.png", title: "Collectibles" },
//   { imgpath: "/images/home/art.png", title: "Dancing" },
// ];
// export const homeblogcard = [
//   {
//     imgpath: "/images/blog/blog_card1.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card2.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
//   {
//     imgpath: "/images/blog/blog_card3.png",
//     creator: "SalvadorDali",
//     price: "4.89",
//   },
// ];
