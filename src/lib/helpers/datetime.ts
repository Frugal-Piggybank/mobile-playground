interface DateProps {
  day: string;
  month: string;
  year?: number;
}

const monthNames: Array<string> = [
  '', // Empty string to account for 0 index
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDateProps = (date: Date): DateProps => {
  const month = (1 + date.getMonth()).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return {
    month,
    day,
  };
};

const getDisplayFormattedDate = (date: Date): string => {
  const dateProps = getDateProps(new Date(date));
  return `${dateProps.month}/${dateProps.day}`;
};

export { monthNames, getDisplayFormattedDate };
