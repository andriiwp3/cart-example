import RadioButton from '@/components/forms/radio-button';
import Heading from '@/components/heading';
import { HEADING_VARIANTS } from '@/components/heading/types';

import { TEXTS } from '../../texts';
import { TIMES_OF_DAY } from '../../types';

export interface SelectTimeProps {
  currentValue: TIMES_OF_DAY;
  options: ReadonlyArray<{ label: string; value: TIMES_OF_DAY }>;
  onChange: (value: TIMES_OF_DAY) => void;
}

export default function TimeOfDaySelect({ currentValue, options, onChange }: SelectTimeProps) {
  return (
    <div>
      <Heading variant={HEADING_VARIANTS.SECONDARY}>{TEXTS.selectTimeOfDay.title}</Heading>
      <div className="flex gap-4">
        {options.map(({ label, value }) => (
          <RadioButton
            key={value}
            label={label}
            name="timeOfDay"
            value={value}
            checked={value === currentValue}
            onChange={() => onChange(value)}
          />
        ))}
      </div>
    </div>
  );
}
