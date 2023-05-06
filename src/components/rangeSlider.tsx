import { useEffect, useRef } from 'preact/hooks';
import { RangeSlider } from 'toolcool-range-slider';
import 'toolcool-range-slider';
import styles from '../style/components/rangeSlider.module.scss';

interface Props {
  initialValue?: number;
  onValueChange: (value: number) => void;
  label?: string;
};

const CustomRangeSlider = ({ initialValue = 1, onValueChange, label }: Props) => {
  const sliderRef = useRef<RangeSlider>(null!);

  useEffect(() => {
      const slider: RangeSlider = sliderRef.current;

      const customStyles = `
      #range-slider {
        width: 100%;
      }
      .panel {
        background-color: #E9F5F1;
      }
      .panel-fill {
        top: unset;
        transform: translateY(-30%)!important;
        height: 0.625rem;
        border-radius: 10px 0 0 0.625rem;
        background-color: #A5D9C8;
      }
      .pointer-shape {
        height: 0.625rem;
        width: 0.625rem;
        box-shadow: none;
        border-color: #A5D9C8;
      }
      `;

      slider.addCSS(customStyles);

      slider.round = 0;
      slider.min= 1;
      slider.max = 1000;
      slider.value = initialValue;

      const onChange = (event: Event) => {
        const customEvent = event as CustomEvent;
        const newValue = customEvent.detail.value === 1 ? 1000 : customEvent.detail.value === 1000 ? 1 : 1000 - customEvent.detail.value;
        onValueChange && onValueChange(newValue);
      };

      slider?.addEventListener('change', onChange);

      return () => {
        slider?.removeEventListener('change', onChange);
      };
  }, []);

  return (
    <div className={ styles.rangeSliderContainer }>
      { label &&
        <p className={ styles.label }>{ label }</p>
      }
      {/* @ts-ignore */}
      <tc-range-slider
        ref={ sliderRef }
      />
    </div>
  );
}

export default CustomRangeSlider;