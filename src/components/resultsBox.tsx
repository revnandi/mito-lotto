import styles from '../style/components/resultsBox.module.scss';

interface Props {
  numberOfTickets: number;
  yearsSpent: number;
  costOfTickets: number;
};

const ResultsBox = ({ numberOfTickets, yearsSpent, costOfTickets }: Props ) => {
  const formatter = new Intl.NumberFormat('hu-Hu', {
    style: 'currency',
    currency: 'HUF',
  });

  return (
    <div className={ styles.resultsBox }>
      <div className={ [styles.label, styles.labelIsHeavy].join(' ') }>Number of tickets: <span className={ styles.value }>{ numberOfTickets }</span></div>
      <div className={ styles.label }>Years spent: <span className={ styles.value }>{ yearsSpent }</span></div>
      <div className={ styles.label }>Cost of tickets: <span className={ styles.value }>{ formatter.format(costOfTickets) }</span></div>
    </div>
  );
};

export default ResultsBox;