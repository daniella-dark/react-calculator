import React from 'react'
import styles from './Toggle.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../../redux/slices/themeSlice';

import Light from '../../assets/img/light.png';
import Dark from '../../assets/img/dark.png';

const Toggle = () => {
    const theme = useSelector((state) => state.theme); 
    const dispatch = useDispatch(); 
    const [toggle, setToggle] = React.useState(theme === 'dark');

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleSetTheme = () => {
        dispatch(set(theme === 'dark' ? 'light' : 'dark'));
        setToggle(!toggle);
    };

    return (
        <div className={styles.switchToggle}>
        <img width={20} height={20} src={Light} alt="Light" />
        <div className={`${styles.switchBtn} ${toggle ? styles.switchOn : ''}`} onClick={handleSetTheme} />
        <img width={16} height={16} src={Dark} alt="Dark" />
        </div>
    )
}

export default Toggle
