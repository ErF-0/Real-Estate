const getPathname = (pathname) => {
  const splitUrl = pathname.split("/");
  return splitUrl.length === 2 ? splitUrl[1] : splitUrl[2];
};
export { getPathname };
