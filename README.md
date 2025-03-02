# BillSave App
---
## Summary
<p align="justify">
This application is a tool designed to manage portfolios of financial documents (bills/invoices), calculate the Annual Effective Cost Rate (ACER) of each portfolio and generate detailed reports on a specific date range. 
</p>

<p align="justify">
The application is developed with Vue.js on the frontend, using TailwindCSS for the design, and has a backend based on the Domain-Driven Design (DDD) architecture. The main bounded contexts are portfolio, sales (bills/invoices) and reporting.
</p>

## Features

* Domain-Driven Design (DDD).
* Vue.js for frontend development.
* Export of reports in Excel format.
* TailwindCSS for layout and styles.
* Axios for integration with backend APIs.
* Environment variables for configuration.
* Automatic calculation of TCEA for each portfolio.
* SUNAT API (https://apis.net.pe/) for external queries.
* Authentication and user management (login, registration).
* Responsive design for an optimal experience on any device.
* Generation of reports with filters by dates and portfolios.
* Portfolio management (creation, editing, deletion and listing).
* Management of documents (letters/invoices) associated with portfolios.

## Framework
The project is built with [Vue 3](https://vuejs.org/) Framework, and the following dependencies:

* Pinia (https://pinia.vuejs.org/)
* Axios (https://axios-http.com/) 
* Vue Router (https://router.vuejs.org/)

## Development Setup 

#### 1. Clone repository:
Clone the project from the GitHub repository:
```bash
git clone https://github.com/FinWorkTech/BillSave-app.git
```

#### 2. Navigate to the project directory:
Move into the project folder: 
```bash
cd BillSave-app
```

#### 3. Install dependencies:
Install the dependencies necessary for the project to work

```bash
npm install
```

#### 4. Configure environment variables:
Set the environment variables required for the project in a **.env** file

* [VITE_API_BASE_URL](https://github.com/FinWorkTech/BillSave-backend)
```bash
VITE_API_BASE_URL=https://api.example.com
```

* [VITE_SUNAT_API_TOKEN](https://apis.net.pe/app/tokens)
```bash
VITE_SUNAT_API_TOKEN=your-sunat-token-here
```

#### 5. Run the front-end server making sure you have it running on the backend_
```bash
npm run dev
```

## JSON configuration
```json
{
  "name": "bill-save-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "axios": "^1.7.9",
    "json-server": "^0.17.4",
    "pinia": "^3.0.1",
    "tailwindcss": "^4.0.0",
    "vue": "^3.5.13",
    "vue-router": "^4.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.1",
    "vite": "^6.0.5"
  }
}

```

## Contribute to this project
You can contribute to this project by submitting issues or pull requests in the [GitHub repository](https://github.com/FinWorkTech/BillSave-app). We welcome new ideas, features, and improvements!