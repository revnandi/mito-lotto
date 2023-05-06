import type { ComponentChild } from 'preact';
import styles from '../style/components/header.module.scss';

interface Props {
  children?: ComponentChild;
}

const Header = ({children }: Props) => {
  return (
    <div className={ styles.header }>
      { children }
    </div>
  );
};

export default Header;