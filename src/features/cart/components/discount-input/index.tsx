import { ChangeEventHandler } from 'react';

import Input from '@/components/forms/input';
import Heading from '@/components/heading';
import { HEADING_VARIANTS } from '@/components/heading/types';

import { TEXTS } from '../../texts';

export interface SelectTimeProps {
  error?: string;
  currentValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function DiscountInput({ currentValue, error, onChange }: SelectTimeProps) {
  return (
    <div>
      <Heading variant={HEADING_VARIANTS.SECONDARY}>{TEXTS.discountCodeInput.title}</Heading>
      <Input
        label={TEXTS.discountCodeInput.label}
        name="discountCode"
        value={currentValue}
        error={error}
        onChange={onChange}
      />
    </div>
  );
}
