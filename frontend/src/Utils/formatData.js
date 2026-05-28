export const formatDate = (date) => {

  const newDate = new Date(date);

  return newDate.toLocaleDateString(
    'en-IN',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );
};

export const formatDateTime = (date) => {

  const newDate = new Date(date);

  return newDate.toLocaleString(
    'en-IN',
    {
      dateStyle: 'medium',
      timeStyle: 'short'
    }
  );
};