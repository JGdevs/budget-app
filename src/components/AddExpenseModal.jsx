import {useRef} from 'react';
import {useBudgets,UNCATEGORIZED_BUDGET_ID} from '../contexts/BudgetsContext';
import useTheme from '../contexts/ThemeContext';
import styles from '../styles/Modals.module.css';
import addStyles from '../styles/AddModal.module.css';

const AddExpenseModal = ({handleClose,defaultBudgetId,onAddExpenseClick}) => {

	const descriptionRef = useRef(),

	amountRef = useRef(),

	budgetIdRef = useRef(),

	{addExpense,budgets} = useBudgets(),

	{theme} = useTheme(), 

	handlerSubmit = (e) => {

		e.preventDefault();

		addExpense({

			description:descriptionRef.current.value,
			amount:parseFloat(amountRef.current.value),
			budgetId:budgetIdRef.current.value

		})

		handleClose();

	}

	return (

		<article className={styles.modal}>
			
			<form className={`${styles.modalForm} child-bg-${theme}`} onSubmit={handlerSubmit}>
				
				<section className={addStyles.header}>
				
					<h2>New Expense</h2>

					<i className="bi-x fs-1" onClick={handleClose}></i>

				</section>

				<section className={addStyles.section}>
						
					<label>Description</label>
					<input className={addStyles.input} type="text" required ref={descriptionRef}/>

				</section>

				<section className={addStyles.section}>
					
					<label>Amount</label>
					<input className={addStyles.input} type="number" min="0" step="0.01" required ref={amountRef}/>

				</section>

				<section className={addStyles.section}>
					
					<label>Budget</label>
					
					<select defaultValue={defaultBudgetId} ref={budgetIdRef}>

						<option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
						
						{budgets.map(budget => <option key={budget.id} value={budget.id}>{budget.name}</option>)}

					</select>

				</section>
					
				<button className={addStyles.btn} type="submit">Add</button>

			</form>

		</article>

	);

}

export default AddExpenseModal;