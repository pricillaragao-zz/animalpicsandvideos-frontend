import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.module.css'

const Avatar = ({imgUrl, description}) => (
  <figure className={styles.figure}>
    <img className={styles.img} src={imgUrl} alt={`${description} avatar`} />
    <figcaption>{description}</figcaption>
  </figure>
)

Avatar.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Avatar
