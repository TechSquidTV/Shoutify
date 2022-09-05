import React from 'react';

type DTProps = {
  className?: string;
};

export const DateTime: React.FC<DTProps> = (props: DTProps) => {
  const currentTime = new Date();
  const TZOffset = currentTime.getTimezoneOffset() * 60 * 1000;

  const dateFormatter = (date: Date) => {
    const localISODate = new Date(date.getTime() - TZOffset);
    const isoString = localISODate.toISOString();
    const formatted = isoString.substring(0, isoString.length - 8);
    return formatted;
  };

  const [schedule, setSchedule] = React.useState(dateFormatter(currentTime));

  return (
    <input
      type="datetime-local"
      id="post-time"
      name="post-time"
      value={schedule}
      min={schedule}
      onChange={(e) => setSchedule(dateFormatter(new Date(e.target.value)))}
      className={['bg-gray-800 rounded-md px-2', props.className].join(' ')}
    />
  );
};
