import styles from '../style/components/matches.module.scss';
import type { Hits } from '../app';

interface Props {
  hits: Hits
};

const Matches = ({ hits }: Props) => {
  return (
    <div className={ styles.matches }>
      <div className={ styles.box }>
        <div className={ styles.label }>2 matches</div>
        <div className={ styles.value }>{ hits[2] }</div>
      </div>
      <div className={ styles.box }>
        <div className={ styles.label }>3 matches</div>
        <div className={ styles.value }>{ hits[3] }</div>
      </div>
      <div className={ styles.box }>
        <div className={ styles.label }>4 matches</div>
        <div className={ styles.value }>{ hits[4] }</div>
      </div>
      <div className={ styles.box }>
        <div className={ styles.label }>5 matches</div>
        <div className={ styles.value }>{ hits[5] }</div>
      </div>
    </div>
  );
};

export default Matches;