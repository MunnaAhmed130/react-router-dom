export const sleep = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

export const getWeather = async () => {
  await sleep(3000);
  const res = await fetch(
    "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Salt+Lake+City&units=imperial"
  );
  if (!res.ok) {
    throw {
      error: "Problem getting weather info",
    };
  }
  const data = await res.json();
  return data;
};
