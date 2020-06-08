const sortDate = (a, b) => {
  if (new Date(a.Date).getTime() > new Date(b.Date).getTime())
    return -1;
  if (new Date(a.Date).getTime() < new Date(b.Date).getTime())
    return 1;
  return 0;
};

export default sortDate;
