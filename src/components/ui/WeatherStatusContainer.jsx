import React from 'react'
import WeatherStatusCard from './WeatherStatusCard'

export default function WeatherStatusContainer({data}) {
    
  return (
    <div className='w-auto h-auto flex'>
        {
            Object.keys(data).map((d) => {
                return d !== 'id' && d !== 'timestamp' && <WeatherStatusCard title={d} value={data[d]} />
            })
        }

    </div>
  )
}
