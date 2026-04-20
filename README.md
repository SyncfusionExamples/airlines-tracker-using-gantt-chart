# Airlines Tracker using Gantt Chart

A React demo application showcasing airline flight tracking in a customized Syncfusion Gantt chart.

## Features

- Resource view Gantt chart with flights grouped by airport code
- Custom taskbar templates for active, completed, and upcoming flights
- Tooltip cards showing departure, arrival, and aircraft model details
- Day/hour timeline with event markers for a selected current time
- Built with Syncfusion `@syncfusion/ej2-react-gantt`

## Prerequisites

- Node.js 14+ or compatible version
- npm

## Installation

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## How It Works

The sample uses `src/data.js` for `TimeTable` flight data and airport resources.
`src/index.js` configures:

- `taskFields` and `resourceFields`
- `labelSettings` for departure and arrival labels on tasks
- `taskbarTemplate` to color-code flights by status
- `tooltipSettings` for rich hover details

## Notes

- Current time is hardcoded as `02/13/2021 15:25:00` for demonstration.
- `Dep` is the flight start date and `Journey` is duration in hours.
- The Gantt chart view type is configured as `ResourceView`.
