import React from 'react';
import { StatsContainer } from './style';

type QuickInfoProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  percentage?: string;
};

export default function QuickInfo({
  title, value, icon, percentage,
}: QuickInfoProps) {
  return (
    <StatsContainer>
      <div>
        <h2>
          {title}
        </h2>
        <p>{ value }</p>
        {
            percentage && <span>{percentage}</span>
        }
      </div>
      {icon}
    </StatsContainer>
  );
}
