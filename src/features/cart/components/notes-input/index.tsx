import { ChangeEventHandler } from 'react';

import TextArea from '@/components/forms/textarea';
import Heading from '@/components/heading';
import { HEADING_VARIANTS } from '@/components/heading/types';

import { TEXTS } from '../../texts';

export interface SelectTimeProps {
  currentValue: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export default function NotesInput({ currentValue, onChange }: SelectTimeProps) {
  return (
    <div>
      <Heading variant={HEADING_VARIANTS.SECONDARY}>{TEXTS.notes.title}</Heading>
      <TextArea label={TEXTS.notes.label} name="notes" value={currentValue} onChange={onChange} />
    </div>
  );
}
