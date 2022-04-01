import SkillGrow from './skill-grow/SkillGrow';
import styles from './WeeklyGrowth.module.scss';

const WeeklyGrowth = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Рост за неделю</span>
      <div className={styles.itemsContainer}>
        {' '}
        <SkillGrow className={styles.item} skillName='Логика'></SkillGrow>
        <SkillGrow className={styles.item} skillName='Внимание'></SkillGrow>
        <SkillGrow className={styles.item} skillName='Мышление'></SkillGrow>
        <SkillGrow className={styles.item} skillName='Контцентрация'></SkillGrow>
      </div>
    </div>
  );
};

export default WeeklyGrowth;
