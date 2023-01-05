const FetchRates = () => {
    const response = fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
    return response
}

export const API = {
    FetchRates
}