import styles from '../style/components/resultsBox.module.scss';

interface Props {
  numberOfTickets: number;
  yearsSpent: number;
  costOfTickets: number;
};

const ResultsBox = ({ numberOfTickets, yearsSpent, costOfTickets }: Props ) => {
  const currencyFormatter = new Intl.NumberFormat('hu-Hu', {
    style: 'currency',
    currency: 'HUF',
  });

  const ticketFormatter = new Intl.NumberFormat('hu-Hu', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    useGrouping: true,
  });

  return (
    <div className={ styles.resultsBox }>
      <div className={ [styles.label, styles.labelIsHeavy].join(' ') }>Number of tickets: <span className={ styles.value }>{ ticketFormatter.format(numberOfTickets) }</span></div>
      <div className={ styles.label }>Years spent: <span className={ styles.value }>{ yearsSpent }</span></div>
      <div className={ styles.label }>Cost of tickets: <span className={ styles.value }>{ currencyFormatter.format(costOfTickets) }</span></div>
    </div>
  );
};

export default ResultsBox;