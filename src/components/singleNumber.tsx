import styles from '../style/components/singleNumber.module.scss';

interface Props {
  value: number;
}

const SingleNumber = ({ value }: Props) => {
  return (
    <div className={ styles.component }>
      { value }
    </div>
  );
};

export default SingleNumber;