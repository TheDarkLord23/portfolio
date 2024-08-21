import styles from '../Skills/SkillsStyles.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
import Programs from '../Programs/Programs'
import { useTheme } from '../../common/ThemeContext'


function Skills() {
  const { theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;


  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='JavaScript'/>
            <SkillList src={checkMarkIcon} skill='TypeScript'/>
            <SkillList src={checkMarkIcon} skill='PHP'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Angular'/>
            <SkillList src={checkMarkIcon} skill='React'/>
            <SkillList src={checkMarkIcon} skill='Symfony'/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Bootstrap'/>
            <SkillList src={checkMarkIcon} skill='Wordpress'/>
            <SkillList src={checkMarkIcon} skill='ChatGPT'/>
        </div>
        <hr />
        <Programs/>
    </section>
  )
}

export default Skills