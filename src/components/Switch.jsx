import styles from '../styles/Switch.module.css';

const Switch = ({onSwitch,checked}) => {

  return (
            
    <label className={styles.switch}>
                
      <input type="checkbox" onChange={onSwitch} checked={checked}/>
      <span className={styles.slider}></span>

    </label>
  );

};

export default Switch;
