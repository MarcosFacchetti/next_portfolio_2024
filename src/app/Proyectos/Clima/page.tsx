"use client";
import React, { useState } from "react";
import axios from "axios";

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

const Clima: React.FC = () => {
  const [data, setData] = useState<WeatherData | {}>({});
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=es&units=metric&appid=11d63ae3d1e6aa03b32cedcc74b4735c`;
  
  const searchLocation = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get<WeatherData>(url);
        setData(response.data);
        setError(null);
        console.log(response.data);
      } catch (err) {
        setData({});
        setError("No se encontró la ubicación. Intente nuevamente.");
        console.error("Error al obtener datos:", err);
      }
      setLocation("");
    }
  };

  const weatherDescriptions: { [key: string]: string } = {
    Clear: "Despejado",
    Clouds: "Nublado",
  };

  return (
    <div className="app">
      <div className="pt-10 text-slate-950">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Consultar el tiempo de..."
          onKeyPress={searchLocation}
          type="text"
          className="border rounded-md p-2"
        />
      </div>
      <div>
        <div className="flex flex-col items-center mt-4">
          {"name" in data && (
            <>
              <p className="text-xl font-bold">
                {`${(data as WeatherData).name} ${
                  "sys" in data && data.sys.country
                }`}
              </p>
              {"main" in data && (
                <h1 className="text-4xl">
                  {(data as WeatherData).main.temp.toFixed()}ºC
                </h1>
              )}
              {"weather" in data && (
                <p>
                  {weatherDescriptions[(data as WeatherData).weather[0].main]}
                </p>
              )}
            </>
          )}

          {error && <div className="text-red-600">{error}</div>}

          {"name" in data && (
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                {"main" in data && (
                  <>
                    <p className="font-bold">
                      {(data as WeatherData).main.feels_like.toFixed()}ºC
                    </p>
                    <p className="text-xs">Sensación</p>
                  </>
                )}
              </div>
              <div>
                {"main" in data && (
                  <>
                    <p className="font-bold">
                      {(data as WeatherData).main.humidity}%
                    </p>
                    <p className="text-xs">Humedad</p>
                  </>
                )}
              </div>
              <div>
                {"wind" in data && (
                  <>
                    <p className="font-bold">
                      {(data as WeatherData).wind.speed.toFixed()} km/h
                    </p>
                    <p className="text-xs">Viento</p>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clima;
