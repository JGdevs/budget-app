import {useState} from 'react';
import Header from './Header.jsx';
import BudgetCard from './BudgetCard';
import AddBudgetModal from './AddBudgetModal';
import AddExpenseModal from './AddExpenseModal';
import UncategorizedBudgetCard from './UncategorizedBudgetCard';
import TotalBudgetCard from './TotalBudgetCard';
import ViewExpensesModal from'./ViewExpensesModal';  
import {UNCATEGORIZED_BUDGET_ID,useBudgets} from '../contexts/BudgetsContext';
import useTheme from '../contexts/ThemeContext';

const BudgetApp = () => {

	const [budgetModal,setBudgetModal] = useState(false),

	[expenseModal,setExpenseModal] = useState(false),

	[viewExpensesModal,setViewExpensesModal] = useState(),

	{budgets,getBudgetExpenses} = useBudgets(),

	{theme} = useTheme(),

	[addExpenseModalBudgetId,setAddExpenseModalBudgetId] = useState();

	function openAddExpenseModal(budgetId) {

		setExpenseModal(true);

		setAddExpenseModalBudgetId(budgetId);

	}

	if(theme === 'light') {

		document.querySelector('body').classList.add(theme);
		document.querySelector('body').classList.remove('dark');

	}  

	else if (theme === 'dark') {

		document.querySelector('body').classList.add(theme);
		document.querySelector('body').classList.remove('light');		

	}

	return (

		<>

			<Header showBudgetModal={() => setBudgetModal(true)} openAddExpenseModal={openAddExpenseModal}/>

			<div className="grid-cards">
				
				{budgets.map(budget => {

					const amount = getBudgetExpenses(budget.id).reduce((total,expense) => total + expense.amount,0);

					return <BudgetCard key={budget.id} name={budget.name} amount={amount} max={budget.max} onAddExpenseClick={() => openAddExpenseModal(budget.id)} onViewExpenseClick={() => setViewExpensesModal(budget.id)}/>


				})}

				<UncategorizedBudgetCard onAddExpenseClick={openAddExpenseModal} onViewExpenseClick={() => setViewExpensesModal(UNCATEGORIZED_BUDGET_ID)}/>

				<TotalBudgetCard/>	

			</div>

			{budgetModal && <AddBudgetModal show={setBudgetModal} handleClose={() => setBudgetModal(false)}/>}

			{expenseModal && <AddExpenseModal show={setExpenseModal} defaultBudgetId={addExpenseModalBudgetId} handleClose={() => setExpenseModal(false)}/>}

			{viewExpensesModal && <ViewExpensesModal budgetId={viewExpensesModal} handleClose={() => setViewExpensesModal()}/>}

		</>

	);

}

export default BudgetApp; 