const e2p = (s) => s?.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

const p2e = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));

const sp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber?.join(",");
  return e2p(joinedNumber);
};
const esp = (number) => {
  const seperatedNumber = number
    .toString()
    .match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  const joinedNumber = seperatedNumber.join(",");
  return p2e(joinedNumber);
};
const spToNumber = (string) => {
  const spString = p2e(string);
  const numberList = spString.split(",");
  let result = "";
  for (const item of numberList) {
    result = result + item;
  }
  return +result;
};

export { e2p, p2e, sp, esp, spToNumber };
