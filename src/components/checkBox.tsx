import styles from '../style/components/checkBox.module.scss';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const CheckBox = ({ label, checked, onChange  }: Props) => {
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    onChange(target.checked);
  };

  return (
    <div className={ styles.checkBoxContainer }>
      <label className={ styles.inner }>
        { label &&
          <span className={ styles.label }>
            { label }
          </span>
        }
        <input
          className={ styles.nativeInput }
          type="checkbox"
          name="is_random"
          checked={ checked }
          onChange={ handleChange }
        />
        <div className={ styles.customInput }>
          <svg className={ [styles.checkmark, checked && styles.checkmarkisVisible ].join(' ') } viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7L6 12L16.5 1.5"/>
          </svg>
        </div>
      </label>
    </div>
  );
};

export default CheckBox;