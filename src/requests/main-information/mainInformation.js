// const domain = process.env.WEB_DOMAIN;
// const domain = "http://localhost:3000";

const domain = "https://rafa-crossf-gym-payloadcms-4e8559a.payloadcms.app";

export const fetchMainInformation = async () => {
  console.log(domain);
  const res = await fetch(domain + "/api/globals/main-information");
  const result = await res.json();
  console.log(result);
  if (res.status == 200) return result;
  // console.log(result.informacion[0]);
  return {};
};

export const fetchCards = async () => {
  const res = await fetch(domain + "/api/globals/cards");
  console.log(res);
  const result = await res.json();
  console.log(result);
  if (res.status == 200) return result.cards;
};
