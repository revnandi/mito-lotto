import type { ComponentChild } from 'preact';
import styles from '../style/components/main.module.scss';

interface Props {
  children?: ComponentChild;
}

const Main = ({children }: Props) => {
  return (
    <div className={ styles.main }>
      { children }
    </div>
  );
};

export default Main;