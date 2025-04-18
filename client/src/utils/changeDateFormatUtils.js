export function changeDateFormat(articleDate) {
  const date = new Date(articleDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
}
