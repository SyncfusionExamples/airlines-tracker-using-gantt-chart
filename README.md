# Airlines Tracker Using Gantt Chart

This repository contains a React application visualizing airline flight schedules using [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart). It demonstrates how Gantt charts adapt for time‑based resource scheduling beyond traditional project management.

## Features

- **Resource view Gantt chart** with flights grouped by airport
- **Custom taskbar templates** for active, completed, and upcoming flights
- **Rich tooltip cards** with departure, arrival, and aircraft details
- **Day and hour timeline** with event markers
- **Built with** `@syncfusion/ej2-react-gantt`

## Prerequisites

- Node.js ( LTS or later )
- npm

## Installation and Run

```bash
npm install
npm start
```

Open the application at `http://localhost:3000`

## How It Works

**Data configuration** (`src/data.js`):
- Flight schedules (`TimeTable`) and resources

**Application setup** (`src/index.js`):
- `taskFields` and `resourceFields`
- `labelSettings` for departure and arrival labels
- `taskbarTemplate` to differentiate flight status
- `tooltipSettings` for details
- `viewType` set to `ResourceView`

## Notes

- "Current time" hardcoded as `02/13/2021 15:25:00`
- `Dep` = flight start time, `Journey` = duration in hours
- Static data without real‑time updates

## Use Cases

This repository demonstrates:
- Modeling non-project data in Gantt charts
- Resource view for scheduling scenarios
- Customizing taskbars and tooltips in Syncfusion React Gantt

## Related Links

- [Explore React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart)
- [Gantt Chart Feature Overview](https://ej2.syncfusion.com/react/documentation/gantt/overview)
- [React Gantt Chart Getting Started Guide](https://ej2.syncfusion.com/react/documentation/gantt/getting-started)
- [React Gantt API Documentation](https://ej2.syncfusion.com/react/documentation/api/gantt/viewtype)
- [React Gantt Chart Live Demos and Examples](https://ej2.syncfusion.com/react/demos/#/tailwind3/gantt/resource-view)
