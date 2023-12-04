import React , {useState , useEffect, createContext, useContext} from 'react';


const ApiDataContext = createContext();

export const useData = () => {
    return useContext(ApiDataContext)
};

const ApiHandler = ({children}) => {
    const [newsApiData, setNewsApiData] = useState([]);
    const [newsApiLoading, setNewsApiLoading] = useState(true);
    const [newsApiError, setNewsApiError] = useState('');
   const NEWSAPI = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=ae32d9ebf0f54a83b808c6ce84ede2ca'
    
    useEffect (()=>{
        const fetchNewApiData = async () => {
            try {
                const dataResponse = await fetch (NEWSAPI);
                if (!dataResponse.ok) {
                    throw new Error ('Network Response was not Ok')
                }
                const resultData = await dataResponse.json();
                setNewsApiData(resultData.articles);
                console.log("Api News Data" , resultData.articles)
            } catch (error) {
                setNewsApiError(error);
            }finally{
                setNewsApiLoading(false);
            }
        };
        fetchNewApiData();
        
    },[])   
    
    return(
        <ApiDataContext.Provider value={{ newsApiData, newsApiLoading, newsApiError }}>
        {children}
      </ApiDataContext.Provider>
    )
}
export default ApiHandler;