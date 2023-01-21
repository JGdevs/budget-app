import {useBudgets} from '../contexts/BudgetsContext';
import BudgetCard from './BudgetCard';

const TotalBudgetCard = () => {

	const {expenses,budgets} = useBudgets(),

	amount = expenses.reduce((total,expense) => total + expense.amount,0),

	max = budgets.reduce((total,budget) => total + budget.max,0);

	if(amount == 0) return null;

	return (

		<BudgetCard amount={amount} name="Total" max={max} hideButtons />

	)

}

export default TotalBudgetCard;