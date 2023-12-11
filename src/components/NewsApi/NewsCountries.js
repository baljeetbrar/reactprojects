const filterCountriesByName = (countryFinder, searchedCountry) =>{
    const filteredCountry = searchedCountry.toLowerCase();
    return countryFinder.filter((countryList)=>
        countryList.countryName.toLowerCase().includes(filteredCountry)
    );
};

const searchCountry = (userInputSearch) => {
    try{
        const userSearchedCountry = userInputSearch.toLowerCase();

        const foundCountry = Countries.find((currentCountry)=>
            currentCountry.countryName.toLowerCase() === userSearchedCountry ||
            currentCountry.countryCode.toLowerCase() === userSearchedCountry
        );
        return foundCountry;
    }catch(error){
        console.error('An error occurred while searching for the country:', error);
        return { error: 'An error occurred during the search.' };
    }
};


const Countries = [
    {"countryCode": "ae", "countryName": "United Arab Emirates"},
    {"countryCode": "ar", "countryName": "Argentina"},
    {"countryCode": "at", "countryName": "Austria"},
    {"countryCode": "au", "countryName": "Australia"},
    {"countryCode": "be", "countryName": "Belgium"},
    {"countryCode": "bg", "countryName": "Bulgaria"},
    {"countryCode": "br", "countryName": "Brazil"},
    {"countryCode": "ca", "countryName": "Canada"},
    {"countryCode": "ch", "countryName": "Switzerland"},
    {"countryCode": "cn", "countryName": "China"},
    {"countryCode": "co", "countryName": "Colombia"},
    {"countryCode": "cz", "countryName": "Czech Republic"},
    {"countryCode": "de", "countryName": "Germany"},
    {"countryCode": "eg", "countryName": "Egypt"},
    {"countryCode": "es", "countryName": "Spain"},
    {"countryCode": "fr", "countryName": "France"},
    {"countryCode": "gb", "countryName": "United Kingdom"},
    {"countryCode": "gr", "countryName": "Greece"},
    {"countryCode": "hk", "countryName": "Hong Kong"},
    {"countryCode": "hu", "countryName": "Hungary"},
    {"countryCode": "id", "countryName": "Indonesia"},
    {"countryCode": "ie", "countryName": "Ireland"},
    {"countryCode": "il", "countryName": "Israel"},
    {"countryCode": "in", "countryName": "India"},
    {"countryCode": "it", "countryName": "Italy"},
    {"countryCode": "jp", "countryName": "Japan"},
    {"countryCode": "kr", "countryName": "South Korea"},
    {"countryCode": "lt", "countryName": "Lithuania"},
    {"countryCode": "lv", "countryName": "Latvia"},
    {"countryCode": "ma", "countryName": "Morocco"},
    {"countryCode": "mx", "countryName": "Mexico"},
    {"countryCode": "my", "countryName": "Malaysia"},
    {"countryCode": "ng", "countryName": "Nigeria"},
    {"countryCode": "nl", "countryName": "Netherlands"},
    {"countryCode": "no", "countryName": "Norway"},
    {"countryCode": "nz", "countryName": "New Zealand"},
    {"countryCode": "ph", "countryName": "Philippines"},
    {"countryCode": "pl", "countryName": "Poland"},
    {"countryCode": "pt", "countryName": "Portugal"},
    {"countryCode": "pr", "countryName": "Puerto Rico"},
    {"countryCode": "ro", "countryName": "Romania"},
    {"countryCode": "rs", "countryName": "Serbia"},
    {"countryCode": "ru", "countryName": "Russia"},
    {"countryCode": "sa", "countryName": "Saudi Arabia"},
    {"countryCode": "se", "countryName": "Sweden"},
    {"countryCode": "sg", "countryName": "Singapore"},
    {"countryCode": "sk", "countryName": "Slovakia"},
    {"countryCode": "th", "countryName": "Thailand"},
    {"countryCode": "tr", "countryName": "Turkey"},
    {"countryCode": "tw", "countryName": "Taiwan"},
    {"countryCode": "ua", "countryName": "Ukraine"},
    {"countryCode": "us", "countryName": "United States"},
    {"countryCode": "ve", "countryName": "Venezuela"},
    {"countryCode": "za", "countryName": "South Africa"}
];
const Categories =[
    "general", 
    "business", 
    "entertainment", 
    "health", 
    "science", 
    "sports", 
    "technology"
    ];
export {Countries, Categories, searchCountry, filterCountriesByName};
