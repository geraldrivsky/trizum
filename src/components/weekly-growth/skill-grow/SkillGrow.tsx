import classNames from 'classnames';
import { FC } from 'react';
import styles from './SkillGrow.module.scss';

type Props = {
  skillName: string;
  className: string;
};

const SkillGrow: FC<Props> = ({ skillName, className }) => {
  return (
    <div className={styles.container}>
      <div className={classNames(className, styles.indicator)}></div>
      <span className={styles.percents}></span>
      <span className={styles.skillName}>{skillName}</span>
    </div>
  );
};

export default SkillGrow;
