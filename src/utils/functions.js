export const getJobs = async (page) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 9,
    offset: page,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };

  const res = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

  const data = await res.json();

  console.log(data);

  return data;
};