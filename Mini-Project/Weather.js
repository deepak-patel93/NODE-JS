import readline from "readline/promises";
const Api = "988799c05df5f22429e8e689b0c53c89";
const url = "https://api.openweathermap.org/data/2.5/weather";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const showData = async (city) => {
  const api = `${url}?q=${city}&appid=${Api}&units=metric`;
  try {
    const data = await fetch(api);
    if (!data.ok) {
      throw new Error("Enter yr city correctly");
    }
    const weatherData = await data.json();
    // console.log(weatherData);

    console.log("\nWeather Information");
    console.log(`city:${weatherData.name}`);
    console.log(`Temperature:${weatherData.main.temp}C`);
    console.log(`Description:${weatherData.weather[0].description}`);
    console.log(`Humidity:${weatherData.main.humidity}%`);
    console.log(`Wind speed:${weatherData.wind.speed}m/s`);
  } catch (error) {
    console.log(error);
  }
};
const city = await rl.question("Enter ur city name");
showData(city);
rl.close();
