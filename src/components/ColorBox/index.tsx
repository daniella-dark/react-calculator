import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../redux/color/slice'
import { RootState } from '../../redux/store'
import { colorsList } from '../../utils/getColor'
import styles from './ColorBox.module.scss'

export const ColorBox: React.FC = () => {
    const color = useSelector((state: RootState) => state.color)
    const dispatch = useDispatch()

    React.useEffect(() => {
        document.documentElement.dataset.color = color
        localStorage.setItem('color', color)
    }, [color])

    const handleColor = (activeColor: string) => {
        dispatch(setColor(activeColor))
    }

    return (
        <div className={styles.colors}>
            {
                colorsList.map((item, index) => 
                    <div className={`${styles.item} ${color === item && styles.active}`} key={index}>
                        <span onClick={() => handleColor(item)} className={item}></span>
                    </div>
                )
            }
        </div>
    )
}
