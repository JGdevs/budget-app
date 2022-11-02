import BudgetApp from './components/BudgetApp';
import {BudgetsProvider} from './contexts/BudgetsContext';
import {ThemeProvider} from './contexts/ThemeContext';

function App() {

  return (

    <ThemeProvider>

      <BudgetsProvider>

        <BudgetApp/>

      </BudgetsProvider>

    </ThemeProvider>

  )

}

export default App;
