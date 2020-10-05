import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../components/Avatar/Avatar";

import styles from "./AnimalsList.module.css"

const AnimalsList = ({ animals }) => (
  <ul className={styles.list}>
    {animals.map((animal) => (
      <li className={styles.listItem} key={animal.id}>
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
