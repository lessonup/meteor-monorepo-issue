import React from 'react';

export interface PrimaryButtonProps {
  title: string;
  onClick: () => void;
}
export function PrimaryButton({ title, onClick }: PrimaryButtonProps) {
  return (
    <button type="button" onClick={() => onClick()}>
      {title}
    </button>
  );
}
