function modifyDate(date) {
  if (date.length === 0) return "";
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  return `${day}/${month}/${year}`;
}

module.exports = modifyDate;
