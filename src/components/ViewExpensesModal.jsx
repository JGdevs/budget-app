import {UNCATEGORIZED_BUDGET_ID,useBudgets} from '../contexts/BudgetsContext';
import {currencyFormatter} from '../helpers/utils.js';
import useTheme from '../contexts/ThemeContext';

const ViewExpensesModal = ({budgetId,handleClose}) => {

	const {getBudgetExpenses,budgets,deleteBudget,deleteExpense} = useBudgets(),

	budget = (UNCATEGORIZED_BUDGET_ID === budgetId) ? {name: 'Uncategorized',id:UNCATEGORIZED_BUDGET_ID} : budgets.find(budget => budget.id == budgetId),

	expenses = getBudgetExpenses(budgetId),

	{theme} = useTheme(),

	deleteAndClose = () => {

		deleteBudget(budget);

		handleClose();

	}

	return (

		<div className="modal">
			
			<div className={`modal-expenses child-bg-${theme} modal-animation`}>
				
				<section className={`d-flex jc-sb at-center title-form-${theme} pd-tp pd-bt`}>
				
					<div className="d-flex mr-lf at-center">
						
						<h3>Expenses - {budget?.name}</h3>
						{budgetId !== UNCATEGORIZED_BUDGET_ID && <button className="mr-lf-2 delete-btn hover-delete-btn hover-btn" onClick={deleteAndClose}>Delete</button>}

					</div>

					<i className="bi-x fs-1" onClick={handleClose}></i>

				</section>

				<section className="d-flex fd-column jc-se mr-tp-2 expense-list">
					
					{expenses.map(expense => (

						<article className="expense mr-tp" key={expense.id}>
							
							<div>{expense.description}</div>
							<div>{currencyFormatter.format(expense.amount)}</div>
							<div onClick={() => deleteExpense(expense)}><i className="bi-trash3 fs-0"></i></div>

						</article>

					))}

				</section>	

			</div>

		</div>

	);

}

export default ViewExpensesModal;