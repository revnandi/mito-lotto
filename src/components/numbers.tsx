import type { ComponentChild } from 'preact';
import styles from '../style/components/numbers.module.scss';

interface Props {
  children?: ComponentChild;
  label: string;
}

const Numbers = ({ children, label }: Props) => {
  return (
    <div className={ styles.numbers }>
      <span className={ styles.label }>{ label }</span>
      <div className={ styles.items }>
        { children }
      </div>
    </div>
  );
};

export default Numbers;