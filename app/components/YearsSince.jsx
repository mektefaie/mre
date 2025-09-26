'use client';
import { outfit } from '@/app/fonts';

const YearsSince = ({ startYear }) => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  const label = years <= 1 ? 'yr' : 'yrs';

  return (
    <>
      <span
        className={outfit.className}
        style={{ fontWeight: 500, color: '#7F1B37' }}
      >
        {years}
      </span>{' '}
      {label}
    </>
  );
};

export default YearsSince;
