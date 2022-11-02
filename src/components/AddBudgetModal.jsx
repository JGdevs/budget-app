import {useRef} from 'react';
import {useBudgets} from '../contexts/BudgetsContext';
import useTheme from '../contexts/ThemeContext';

const AddBudgetModal = ({handleClose}) => {

	const nameRef = useRef(),

	maxRef = useRef(),

	{addBudget} = useBudgets(),

	{theme} = useTheme(),

	handlerSubmit = (e) => {

		e.preventDefault();

		addBudget({

			name:nameRef.current.value,
			max:parseFloat(maxRef.current.value),

		})

		handleClose();

	}

	return (

		<article className="modal">
			
			<form className={`modal-form child-bg-${theme} modal-animation`} onSubmit={handlerSubmit}>
				
				<section className="d-flex jc-sb at-center title-form">
				
					<h2>New Budget</h2>

					<i className="bi-x fs-1" onClick={handleClose}></i>

				</section>

				<section className="d-flex fd-column jc-se">
						
					<label>Name</label>
					<input type="text" required ref={nameRef}/>

				</section>

				<section className="d-flex fd-column jc-se">
					
					<label>Maximun Spending</label>
					<input type="number" min="0" step="0.01" required ref={maxRef}/>

				</section>
					
				<input className="button button-2 hover-btn" type="submit" value="Add"/>	

			</form>

		</article>

	);

}

export default AddBudgetModal;