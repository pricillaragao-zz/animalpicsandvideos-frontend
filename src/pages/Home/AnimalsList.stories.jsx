import React from "react";
import AnimalsList from "./AnimalsList";

import dogImg from "./dog.jpg";
import catImg from "./cat.jpg";
import pandaImg from "./panda.jpg";
import dolphinImg from "./dolphin.jpg";
import sealImg from "./seal.jpg";
import penguinImg from "./penguin.jpg";

export default {
  title: "AnimalPicsAndVideos/pages/Home/AnimalsList",
  component: AnimalsList,
};

const Template = (args) => (
  <AnimalsList animals={args.animals} />
);

const dog = {
  id: "1",
  species: "dog",
  imgUrl: dogImg
}

const cat = {
  id: "2", 
  species: "cat",
  imgUrl: catImg
}

const panda = {
  id: "3",
  species: "panda",
  imgUrl: pandaImg
}

const dolphin = {
  id: "4",
  species: "dolphin",
  imgUrl: dolphinImg
}

const seal = {
  id: "5",
  species: "seal",
  imgUrl: sealImg
}

const penguin = {
  id: "6",
  species: "penguin",
  imgUrl: penguinImg
}

const animals = [dog, cat, panda, dolphin, seal, penguin]

export const Default = Template.bind({});
Default.args = {
  animals
};



// id: PropTypes.string,
// species: PropTypes.string,
// imgUrl: PropTypes.string,
