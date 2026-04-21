# Airlines Tracker Using Gantt Chart

This repository contains a React application visualizing airline flight schedules using Syncfusion Gantt chart. It demonstrates how Gantt charts adapt for time‑based resource scheduling beyond traditional project management.

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
