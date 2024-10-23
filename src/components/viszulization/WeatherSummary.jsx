import React, { useState } from 'react';
import Canvas from '../chart/canvas';


export default function WeatherSummary({options}) {
    

    return (
        <div className='w-full mt-5 shadow-lg bg-white rounded-lg p-6'>
            <Canvas options={options} />
        </div>
    );
}
