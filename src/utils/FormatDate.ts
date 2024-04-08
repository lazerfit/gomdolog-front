export const formatDate = (date: string) => {
  const formattedDate = new Date(date);
  const year = formattedDate.getFullYear();
  const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
  const day = String(formattedDate.getDate()).padStart(2, '0');
  return `${year}년 ${month}월 ${day}일`;
};
