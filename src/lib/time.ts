// input date format: YYYY-MM-DD
// output date format: ex) Aug 10, 2025
export const formatPostDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
