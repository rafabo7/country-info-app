# CountryApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11.

This is a learning project created to practice beginner to intermediate Angular concepts.

## Features
- Data fetching using the free-tier RestCountries API
- ETL process to adapt API responses to the application's needs
- Searching by capital or by country name.
- Navigation to country detail page.
- Integration with the **Leaflet** library to display an interactive map on the country details page.
- To be continued...


## Development server

Due to RestCountries API usage policy this version of the app is not fully functional in production. An API Gateway service is currently under development to manage HTTP requests and data storage for this and other projects of mine to be deployed safely in production.
Until then, you can clone this repository and run the application locally using your own RestCountries API credentials.

```bash
# Install dependencies
npm install

# Generate environment files
ng generate environments
```
Copy the content of `src/environments/environment.example.ts` to `environment.ts` and `environment.development.ts` and provide your own API key.

```js
export const environment = {
  countriesApiKey: 'Your api key',
  countriesUrl: 'https://api.restcountries.com/countries/v5'
};
```

To start a local development server, run:

```bash
ng serve
```

