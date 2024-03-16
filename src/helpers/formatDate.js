export const formatDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    mounth: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
