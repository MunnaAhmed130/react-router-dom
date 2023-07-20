import { Suspense } from "react";
import { getWeather } from "./utils";
import { Await, defer, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const weatherPromise = getWeather();
  return defer({ weather: weatherPromise });
};

const Weather = () => {
  const weatherData = useLoaderData();
  // loaderData.then((res) => console.log(res));
  // console.log(loaderData.Weather);
  // const iconUrl = `http://openweathermap.org/img/wn/${loaderData.weather[0].icon}@2x.png`;
  return (
    <section className="weather-container">
      <h1>Weather in Salt Lake City</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Await resolve={weatherData.weather}>
          {(weatherData) => {
            const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
            return (
              <>
                <h3>{weatherData.main.temp}ºF</h3>
                <img src={iconUrl} />
              </>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
};

export default Weather;
