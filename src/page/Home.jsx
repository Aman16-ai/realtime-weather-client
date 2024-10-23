import React, { useEffect, useState } from "react";
import WeatherStatusContainer from "../components/ui/WeatherStatusContainer";
import WeatherSummary from "../components/viszulization/WeatherSummary";
import { getCitySummaryDataService, lastestWeatherOfCityService } from "../service/weather";

export default function Home() {
  const [latestCityWeather, setLatestCityWeather] = useState({
    id: 57,
    city: "Delhi",
    main: "haze",
    temp: 28.06,
    feels_like: 29.21,
    timestamp: "2024-10-21T15:44:08Z",
  });

  const [dateVsTempOptions, setDateVsTempOptions] = useState({
    title: {
      text: "Date vs Min, Max, and Avg Temperature (°C)",
      left: "center",
      textStyle: {
        color: "#2D3748",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
      },
    },
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: 8,
      textStyle: {
        color: "#fff",
      },
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Min Temp", "Max Temp", "Avg Temp"],
      top: "10%",
      textStyle: {
        color: "#2D3748",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "2024-10-12",
        "2024-10-13",
        "2024-10-14",
        "2024-10-15",
        "2024-10-16",
        "2024-10-17",
        "2024-10-18",
      ], // Dummy dates
      axisLine: {
        lineStyle: {
          color: "#CBD5E0", // Soft gray line
        },
      },
      axisLabel: {
        color: "#718096", // Modern gray color for text
        rotate: 25,
      },
    },
    yAxis: {
      type: "value",
      name: "Temperature (°C)",
      min: 0,
      max: 40,
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E2E8F0", // Light dashed lines
        },
      },
      axisLabel: {
        color: "#718096", // Modern gray color for text
      },
    },
    series: [
      {
        name: "Min Temp",
        type: "bar",
        data: [18, 20, 19, 22, 21, 20, 19], // Dummy min temp data
        itemStyle: {
          color: "#63B3ED", // Blue for min temp
          barBorderRadius: [6, 6, 0, 0],
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
          shadowOffsetY: 4,
        },
        barWidth: "20%",
        emphasis: {
          itemStyle: {
            color: "#3182CE", // Darker blue on hover
          },
        },
      },
      {
        name: "Max Temp",
        type: "bar",
        data: [30, 33, 32, 35, 34, 33, 31], // Dummy max temp data
        itemStyle: {
          color: "#F56565", // Red for max temp
          barBorderRadius: [6, 6, 0, 0],
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
          shadowOffsetY: 4,
        },
        barWidth: "20%",
        emphasis: {
          itemStyle: {
            color: "#C53030", // Darker red on hover
          },
        },
      },
      {
        name: "Avg Temp",
        type: "bar",
        data: [24, 26, 25.5, 28, 27, 26.5, 25], // Dummy avg temp data
        itemStyle: {
          color: "#68D391", // Green for avg temp
          barBorderRadius: [6, 6, 0, 0],
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowBlur: 10,
          shadowOffsetY: 4,
        },
        barWidth: "20%",
        emphasis: {
          itemStyle: {
            color: "#38A169", // Darker green on hover
          },
        },
      },
    ],
    grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      top: "20%",
      containLabel: true,
    },
  });

  const [weatherConditionData, setWeatherConditionData] = useState({
    title: {
      text: "Weather Condition Distribution (Last 7 Days)",
      left: "center",
      textStyle: {
        color: "#2D3748",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "Weather Conditions",
        type: "pie",
        radius: "50%",
        data: [
          { value: 50, name: "Clear" }, // Dummy data for clear weather
          { value: 30, name: "Rain" }, // Dummy data for rain
          { value: 15, name: "Haze" }, // Dummy data for haze
          { value: 5, name: "Snow" }, // Dummy data for snow
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        itemStyle: {
          borderWidth: 2,
          borderColor: "#fff",
        },
      },
    ],
    color: ["#68D391", "#63B3ED", "#F6AD55", "#ED8936"], // Modern color palette
  });

  const [timeVsFeels_like, setTimeVsFeels_Like] = useState({
    title: {
      text: "Temperature vs Feels Like",
      left: "center",
      textStyle: {
        color: "#2D3748",
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a}: ({c0}, {c1})",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderRadius: 8,
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "value",
      name: "Temperature (°C)",
      min: 15,
      max: 35,
      axisLine: {
        lineStyle: {
          color: "#CBD5E0", // Soft gray line
        },
      },
      axisLabel: {
        color: "#718096", // Modern gray color for text
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E2E8F0", // Light dashed lines
        },
      },
    },
    yAxis: {
      type: "value",
      name: "Feels Like (°C)",
      min: 15,
      max: 35,
      axisLine: {
        lineStyle: {
          color: "#CBD5E0",
        },
      },
      axisLabel: {
        color: "#718096",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "#E2E8F0",
        },
      },
    },
    series: [
      {
        name: "Temperature vs Feels Like",
        type: "scatter",
        data: [
          [25, 24],
          [30, 31],
          [28, 29],
          [32, 30],
          [35, 36],
          [27, 26],
          [29, 30],
          // Add more data points as needed
        ],
        symbolSize: 10,
        itemStyle: {
          color: "dodgerblue",
          borderColor: "#000",
          borderWidth: 1,
        },
        emphasis: {
          itemStyle: {
            color: "#F56565", // Highlight color on hover
          },
        },
      },
    ],
    grid: {
      left: "10%",
      right: "10%",
      bottom: "10%",
      top: "15%",
      containLabel: true,
    },
  });

  const getLatestWeatherOfCity = async() => {
    try {
      const data = await lastestWeatherOfCityService("?city=Delhi&filter=latest")
      setLatestCityWeather(data)
      console.log(data)
    }
    catch(err) {
      alert(err.toString());
    }
  }

  const getCitySummary = async() => {
    try {
      const data = await getCitySummaryDataService("?city=Delhi")
      // setLatestCityWeather(data)

      //building the graph
      const xAxisData = []
      const minTempSeries = []
      const avgTempSeries = []
      const maxTempSeries = []

      for(let d of data) {
        xAxisData.push(d['date'])
        minTempSeries.push(d['min_temp'])
        avgTempSeries.push(d['avg_temp'])
        maxTempSeries.push(d['max_temp'])
      }
      
      let options = {...dateVsTempOptions}
      console.log(options)
      
      options = {...options, 
        xAxis:{
          ...options.xAxis,
          data: xAxisData
        },
        series : [
          
          {
            ...options.series[0],
            data : minTempSeries
          },
          {
            ...options.series[1],
            data : avgTempSeries
          },
          {
            ...options.series[2],
            data : maxTempSeries
          }
        ]
      }

      setDateVsTempOptions(options)
    }
    catch(err) {
      alert(err.toString());
    }
  }

  useEffect(() => {
    getLatestWeatherOfCity()
    getCitySummary()
  },[])
  return (
    <>
      <WeatherStatusContainer data={latestCityWeather} />
      <div className="grid grid-cols-2 gap-2">
        <WeatherSummary key={1} options={dateVsTempOptions} />
        <WeatherSummary key={2} options={weatherConditionData} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <WeatherSummary key={3} options={timeVsFeels_like} />
      </div>
      
    </>
  );
}
