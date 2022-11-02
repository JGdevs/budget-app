import {currencyFormatter} from '../helpers/utils.js';
import useTheme from '../contexts/ThemeContext';
import ProgressBar from './ProgressBar';

const BudgetCard = ({name,amount,max,onAddExpenseClick,hideButtons,onViewExpenseClick}) => {

	let {theme} = useTheme(),

	progressBarBg = 'bg-blue';

	const ratio = amount / max;

	if(amount >= max) progressBarBg = 'exceded';

	else if(ratio > .75) progressBarBg = 'bg-red';

	else if(ratio > .5) progressBarBg = 'bg-yellow';

	return (

			<article className={`card d-flex jc-sa child-bg-${theme}`}>
				
				<section className="d-flex jc-sb at-center">
					
					<p className="fs--1">{name}</p>

					<div className="fs--2">
					
					{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}

					</div>

				</section>
					
				{max && <ProgressBar max={max} value={amount} bgColor={progressBarBg}/>}

				{!hideButtons && <section className="d-flex">
					
					<button className="button mr-rg button-2 hover-btn" onClick={onAddExpenseClick}>Add Expense</button>
					<button className="button mr-lf button-2 hover-btn" onClick={onViewExpenseClick}>View Expense</button>

				</section>

				}

			</article>

	);

}

export default BudgetCard;