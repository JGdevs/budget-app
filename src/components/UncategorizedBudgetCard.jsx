import {UNCATEGORIZED_BUDGET_ID,useBudgets} from '../contexts/BudgetsContext';
import BudgetCard from './BudgetCard';

const UncategorizedBudgetCard = ({onAddExpenseClick,onViewExpenseClick}) => {

	const {getBudgetExpenses} = useBudgets(),

	amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total,expense) => total + expense.amount,0);

	if(amount == 0) return null;

	return (

		<BudgetCard amount={amount} name="Uncategorized" onAddExpenseClick={onAddExpenseClick} onViewExpenseClick={onViewExpenseClick} />

	)

}

export default UncategorizedBudgetCard;