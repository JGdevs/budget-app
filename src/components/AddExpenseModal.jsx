import {useRef} from 'react';
import {useBudgets,UNCATEGORIZED_BUDGET_ID} from '../contexts/BudgetsContext';
import useTheme from '../contexts/ThemeContext';

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

		<article className="modal">
			
			<form className={`modal-form child-bg-${theme} modal-animation`} onSubmit={handlerSubmit}>
				
				<section className="d-flex jc-sb at-center title-form">
				
					<h2>New Expense</h2>

					<i className="bi-x fs-1" onClick={handleClose}></i>

				</section>

				<section className="d-flex fd-column jc-se">
						
					<label>Description</label>
					<input type="text" required ref={descriptionRef}/>

				</section>

				<section className="d-flex fd-column jc-se">
					
					<label>Amount</label>
					<input type="number" min="0" step="0.01" required ref={amountRef}/>

				</section>

				<section className="d-flex fd-column jc-se">
					
					<label>Budget</label>
					
					<select defaultValue={defaultBudgetId} ref={budgetIdRef}>

						<option id={UNCATEGORIZED_BUDGET_ID}>Uncategorized</option>
						
						{budgets.map(budget => <option key={budget.id} value={budget.id}>{budget.name}</option>)}

					</select>

				</section>
					
				<input className="button button-2 hover-btn" type="submit" value="Add"/>	

			</form>

		</article>

	);

}

export default AddExpenseModal;