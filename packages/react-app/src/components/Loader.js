/** @format */

import React from "react"
import styles from "../styles"
import { ethereumLogo } from "../assets"
const Loader = ({ title }) => {
	return (
		<div className={styles.loader}>
			<img className={styles.loaderImg} src={ethereumLogo} alt='ETH LOGO' />
			<p className={styles.loaderText}>{title}</p>
		</div>
	)
}

export default Loader
