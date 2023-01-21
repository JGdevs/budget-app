import {useRef} from 'react';
import {useBudgets} from '../contexts/BudgetsContext';
import useTheme from '../contexts/ThemeContext';
import styles from '../styles/Modals.module.css';
import addStyles from '../styles/AddModal.module.css';

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

		<article className={styles.modal}>
			
			<form className={`${styles.modalForm} child-bg-${theme}`} onSubmit={handlerSubmit}>
				
				<section className={addStyles.header}>
				
					<h2>New Budget</h2>

					<i className="bi-x fs-1" onClick={handleClose}></i>

				</section>

				<section className={addStyles.section}>
						
					<label>Name</label>
					<input className={addStyles.input} type="text" required ref={nameRef}/>

				</section>

				<section className={addStyles.section}>
					
					<label>Maximun Spending</label>
					<input className={addStyles.input} type="number" min="0" step="0.01" required ref={maxRef}/>

				</section>
					
				<button className={addStyles.btn} type="submit">Add</button>

			</form>

		</article>

	);

}

export default AddBudgetModal;