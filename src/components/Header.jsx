import {useRef} from 'react';
import Switch from './Switch';
import useTheme from '../contexts/ThemeContext';
import styles from '../styles/Header.module.css';

const Header = ({showBudgetModal,openAddExpenseModal}) => {

	const {theme,changeTheme}  = useTheme(),

	menuRef = useRef(), 

	checked = theme === 'dark',

	handlerMenu = ({target}) => {

		if(target.matches('div') || target.matches('i')) {

			menuRef.current.classList.toggle('hidden')
			menuRef.current.classList.toggle('visible')

		}

	}

	return (
				
			<header className={styles.header}>
					
				<h1 className="mr-lf-2">Budgets</h1>

				<i className={`bi-list ${styles.i}`} onClick={handlerMenu}></i>

				<div className={`${styles.panel} ${styles.hidden}`} ref={menuRef}>
					
					<div className={`${styles.menuContainer} child-bg-${theme}`}>
						
						<section className={styles.menuHeader}>
							
							<i className="bi-x fs-3" onClick={handlerMenu}></i>

						</section>

						<aside className={styles.asideMenu} onClick={handlerMenu}>

			 				<div onClick={showBudgetModal}>Add Budget</div>

							<div onClick={openAddExpenseModal}>Add Expense</div>

							<div onClick={changeTheme}>Tema {theme}</div>

						</aside>

					</div>

				</div>

				<div className= {`${styles.headerButtons} mr-rg-2`}>

					<Switch onSwitch={changeTheme} checked={checked}/>

					<div>
						
						<button className={`${styles.btnBlue} mr-lf-2 mr-rg button-blue`} onClick={showBudgetModal}>Add Budget</button>

						<button className={`${styles.btn} mr-lf button-2 hover-btn`} onClick={openAddExpenseModal}>Add Expense</button>

					</div>

				</div>

			</header>

	);

}

export default Header; 

