import React from 'react'
import axios from 'axios'

export async function fetchWeatherData(url, searchParams) {
    try {
        const response = await axios.get(url,{
            params : searchParams || {},
        });
      return response
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
      throw err
    }
  }
  
