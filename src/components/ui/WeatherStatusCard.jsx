import React from "react";

const WeatherStatusCard = ({ title, value }) => {
  const getBgColor = (title) => {
    switch (title.toLowerCase()) {
      case "city":
        return "bg-gray-200"; // Neutral color for city
      case "temperature":
        return "bg-yellow-200"; // Warm color for temperature
      case "feels_like":
        return "bg-orange-200"; // Warm color for feels_like
      case "main":
        if (value.toLowerCase() === "clear") {
          return "bg-blue-100"; // Soft blue for clear skies
        } else if (value.toLowerCase() === "rain") {
          return "bg-blue-300"; // Deeper blue for rain
        } else if (value.toLowerCase() === "snow") {
          return "bg-white"; // White for snow
        } else if (value.toLowerCase() === "cloudy") {
          return "bg-gray-300"; // Gray for cloudy weather
        } else if (value.toLowerCase() === "sunny") {
          return "bg-yellow-300"; // Bright yellow for sunny
        } else if (value.toLowerCase() === "haze") {
          return "bg-gray-400"; // Soft gray for haze
        } else {
          return "bg-gray-100"; // Default color for unknown conditions
        }
      default:
        return "bg-gray-100"; // Default background color
    }
  };
  const bgColor = getBgColor(title);
  return (
    <div
      className={`w-full m-2 bg-white shadow-lg rounded-lg p-6 text-center ${bgColor}`}
    >
      <div className="text-lg font-semibold text-gray-800">{title}</div>
      <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

export default WeatherStatusCard;
