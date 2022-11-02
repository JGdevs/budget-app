import './progressbar.css'

const ProgressBar = ({bgColor,value,max}) => {

	const ratio = (value / max) * 100,

	width = (ratio <= 100) ? ratio : 100,

	border = (ratio <= 100) ? '1rem 0 0 1rem' : '1rem',

	styles = {

		width:`${width}%`,
		border

	}

	return (

		<div className="bar">
			
			<div className={`${bgColor} progress`} style={styles}>
				

			</div>

		</div>

	);

}

export default ProgressBar;