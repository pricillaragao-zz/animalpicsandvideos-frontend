import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../components/Avatar/Avatar";

const AnimalsList = ({ animals }) => (
  <ul>
    {animals.map((animal) => (
      <li key={animal.id}>
        <Avatar imgUrl={animal.imgUrl} description={animal.species} />
      </li>
    ))}
  </ul>
);

AnimalsList.propTypes = {
  animals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      species: PropTypes.string,
      imgUrl: PropTypes.string,
    })
  ).isRequired,
};

export default AnimalsList;
