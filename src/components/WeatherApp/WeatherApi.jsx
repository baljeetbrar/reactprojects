import React, {useState, useEffect} from 'react'
import axios from 'axios'


const useWeatherApi = (apiUrl,searchParams) =>{

    console.log('searchParams')
    console.log(searchParams)
    const [error,setError] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState (true);

    useEffect  (()=>{
        
        let isMounted = true;

        // Clear Previous Data

        setWeatherData(null);
        setError('')
        setLoading(true);

        const fetchWeatherData = async () => {
            
            if(searchParams.q != ''){
                try {
                        const response = await axios.get(apiUrl,{
                            params : searchParams || {},
                        });
                        if(isMounted){
                            setWeatherData(response.data);
                            setLoading(false);
                        }
                    } catch (error) {
                        if(isMounted){
                        setError(error.message);
                        setLoading(false);
                    }
                }
            }
        };

        fetchWeatherData();
        return ()=>{
            isMounted = false;
        };
},[apiUrl, searchParams]);

return {weatherData,error,loading}
}

export default useWeatherApi ;