export const chartColors = [

  '#2563eb',

  '#16a34a',

  '#dc2626',

  '#f59e0b',

  '#7c3aed'
];

export const generateRandomData = (
  length = 5
) => {

  return Array.from({
    length
  }).map((_, index) => ({

    name: `Item ${index + 1}`,

    value:
      Math.floor(Math.random() * 1000)

  }));
};