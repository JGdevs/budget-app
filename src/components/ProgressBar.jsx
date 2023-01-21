import styles from '../styles/progressbar.module.css'

const ProgressBar = ({bgColor,value,max}) => {

	const ratio = (value / max) * 100,

	width = (ratio <= 100) ? ratio : 100,

	border = (ratio <= 100) ? '1rem 0 0 1rem' : '1rem',

	style = {

		width:`${width}%`,
		border

	}

	return (

		<div className={styles.bar}>
			
			<div className={`${bgColor} ${styles.progress}`} style={style}>
				

			</div>

		</div>

	);

}

export default ProgressBar;