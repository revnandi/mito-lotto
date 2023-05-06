import type { ComponentChild } from 'preact';
import styles from '../style/components/container.module.scss';

interface Props {
  children?: ComponentChild;
}

const Container = ({children }: Props) => {
  return (
    <div className={ styles.container }>
      { children }
    </div>
  );
};

export default Container;