const domain = "https://rafa-crossf-gym-payloadcms-4e8559a.payloadcms.app";
// const domain = "http://localhost:3000";

const fetchPages = async (endPoint) => {
  console.log(domain + endPoint);
  const res = await fetch(domain + endPoint);
  // console.log(await res.json().page);
  const result = await res.json();
  console.log(result.page);
  if (res.status == 200) return result;
};

export default fetchPages;
