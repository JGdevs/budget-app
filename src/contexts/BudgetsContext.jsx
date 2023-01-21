import {createContext,useContext} from 'react';
import useLocalStorage from '../hooks/useLocaleStorage';

const BudgetsContext = createContext();

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized';

export function useBudgets () { 

	return useContext(BudgetsContext)

}

const BudgetsProvider = ({children}) => {

	const [budgets,setBudgets] = useLocalStorage('budgets',[]),

	[expenses,setExpense] = useLocalStorage('expenses',[]),

	getBudgetExpenses = (budgetId) => {

		return expenses.filter(expense => expense.budgetId == budgetId)

	},

	addExpense = ({description,amount,budgetId}) => {

		setExpense(prevExpenses => {

			return [...prevExpenses,{id:createId(),description,amount,budgetId}]

		})

	},

	addBudget = ({name,max}) => {

		setBudgets(prevBudgets => {

			if(prevBudgets.find(budget => budget.name === name)) {

				return prevBudgets;	

			}

			return [...prevBudgets,{id:createId(),name,max}]

		})

	},

	deleteBudget = ({id}) => {

		setExpense(prevExpenses => {

			return prevExpenses.map(expense => {

				if(expense.budgetId != id) return expense

				return {...expense,budgetId:UNCATEGORIZED_BUDGET_ID}	

			})

		})

		setBudgets(prevBudgets => {

			return prevBudgets.filter(budget => budget.id !== id);

		})

	},

	deleteExpense = ({id}) => setExpense(prevExpenses => prevExpenses.filter(expense => expense.id !== id)),

	createId = () => Date.now(),

	data = {

		budgets,
		expenses,
		getBudgetExpenses,
		addExpense,
		addBudget,
		deleteBudget,
		deleteExpense		

	}

	return (

		<BudgetsContext.Provider value={data}>{children}</BudgetsContext.Provider>

	);

}

export default BudgetsContext;
export {BudgetsProvider};