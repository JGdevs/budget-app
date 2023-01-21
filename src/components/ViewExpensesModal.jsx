import {UNCATEGORIZED_BUDGET_ID,useBudgets} from '../contexts/BudgetsContext';
import {currencyFormatter} from '../helpers/utils.js';
import useTheme from '../contexts/ThemeContext';
import styles from '../styles/Modals.module.css';
import ownStyles from '../styles/Expenses.module.css';

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

		<div className={styles.modal}>
			
			<div className={`${ownStyles.modalExpenses} child-bg-${theme} modal-animation`}>
				
				<section className={ownStyles.header}>
				
					<div className={ownStyles.headerSection}>
						
						<h3>Expenses - {budget?.name}</h3>
						{budgetId !== UNCATEGORIZED_BUDGET_ID && <button className={ownStyles.deleteBtn} onClick={deleteAndClose}>Delete</button>}

					</div>

					<i className="bi-x fs-1" onClick={handleClose}></i>

				</section>

				<section className={ownStyles.expenseList}>
					
					{expenses.map(expense => (

						<article className={ownStyles.expense} key={expense.id}>
							
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