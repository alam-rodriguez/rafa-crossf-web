const fetchImage = async (id) => {
  const res = await fetch(
    "http://localhost:3000/api/media/66af213cfeac7d824c286fad"
  );
  if (res.status == 200) return await res.json();
  console.log(res);
  // console.log();
};

export default fetchImage;
