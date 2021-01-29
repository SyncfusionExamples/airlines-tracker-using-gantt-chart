import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { GanttComponent, DayMarkers, Inject, Selection, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TimeTable, Airports } from './data';
import { SampleBase } from './indexBase';

export class CustomGanttchart extends SampleBase {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'Id',
            name: 'Name',
            startDate: 'Dep',
            endDate: 'Arr',
            duration: 'Journey',
            resourceInfo: "Port",
            child: 'subtasks'
        };
        this.resourceFields = {
            id: 'Pid',
            name: 'Code'
        };
        this.splitterSettings = {
            columnIndex: 1,
        };
        this.labelSettings = {
            leftLabel: this.templateLeft.bind(this),
            rightLabel: this.templateRight.bind(this)
        };
        this.timelineSettings = {
            topTier: {
                unit: 'Day',
                format: 'dddd MMM yyyy'
            },
            bottomTier: {
                unit: 'Hour',
                format: 'H'
            }
        };
        this.tooltipSettings = {
            showTooltip: true,
            taskbar: this.tooltipTemplate.bind(this)
        }
        this.queryCellInfo = this.queryCell.bind(this);
        this.childTaskbarTemplate = this.taskbarTemplate.bind(this);
        this.parentTaskbarTemplate = this.parentTemplate.bind(this);

        this.dayWorkingTime = [{ from: 0, to: 24 }];

        this.eventMarkers = [
            {
                day: new Date('02/13/2021 15:25:00'),
                label: '15:25'
            }
        ];
    }
    // Template code for taskbar tooltip
    tooltipTemplate(props) {
        var data = props.taskData;
        debugger
        return (
            <table>
                <tr><img src="./image/airplane.png" ></img></tr>
                <tr><td>Flight</td><td>{data.Name}</td></tr>
                <tr><td>From</td><td>{data.From}</td></tr>
                <tr><td>To</td><td>{data.To}</td></tr>
                <tr><td>Dep</td><td>{data.Dep.getHours()} : {data.Dep.getMinutes()}</td></tr>
                <tr><td>Arr</td><td>{data.Arr.getHours()} : {data.Arr.getMinutes()}</td></tr>
                <tr><td>Model</td><td>{data.Model}</td></tr>
            </table>
        );
    }
    //Template for left label
    templateLeft(props) {
        return (<span>{props.taskData.From}</span>);
    }
    //Template for right label
    templateRight(props) {
        return (<span>{props.taskData.To}</span>);
    }
    //Return empty string to hide the parent taskbar from the chart.
    parentTemplate(props) {
        return ("");
    }
    // Based on current time, validated the flights into three category like 
    // 1. completed Journey - It denotes Green colour
    // 2. In Journey        - It denotes Light Green colour
    // 3. Not yet start     - It denotes grey colour.  
    queryCell(props) {
        if (!props.data.hasChildRecords && props.column.field == 'Name') {
            var startTime = props.data.ganttProperties.startDate.getTime();
            var endTime = props.data.ganttProperties.endDate.getTime();
            var currentTime = new Date('02/13/2021 15:25:00').getTime();
            if (endTime < currentTime) {
                props.cell.style.backgroundColor = '#006400';
            } else if (startTime < currentTime) {
                props.cell.style.backgroundColor = '#90EE90';
            } else {
                props.cell.style.backgroundColor = '#C0C0C0';
            }
        }
    }
    taskbarTemplate(props) {
        var startTime = props.ganttProperties.startDate.getTime();
        var endTime = props.ganttProperties.endDate.getTime();
        var currentTime = new Date('02/13/2021 15:25:00').getTime();
        if (endTime < currentTime) {
            return (
                <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={{ height: "100%", borderRadius: "5px", backgroundColor: "#006400" }}>
                    {<div>
                        <span className="e-task-label" style={{ position: "absolute", zIndex: 1, top: "15px", fontFamily: "Segoe UI", fontSize: "12px", color: 'white', textOverflow: "ellipsis", overflow: "hidden" }}>
                            <b>{props.Name}</b></span>
                    </div>}

                </div>);
        } else if (startTime < currentTime) {
            return (
                <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={{ height: "100%", borderRadius: "5px", backgroundColor: "#90EE90" }}>
                    {<div>
                        <span className="e-task-label" style={{ position: "absolute", zIndex: 1, top: "15px", fontFamily: "Segoe UI", fontSize: "12px", color: 'white', textOverflow: "ellipsis", overflow: "hidden" }}>
                            <b>{props.Name}</b></span>
                    </div>}

                </div>);

        } else {
            return (
                <div className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style={{ height: "100%", borderRadius: "5px", backgroundColor: "#C0C0C0" }}>
                    {<div>
                        <span className="e-task-label" style={{ position: "absolute", zIndex: 1, top: "15px", fontFamily: "Segoe UI", fontSize: "12px", color: 'white', textOverflow: "ellipsis", overflow: "hidden" }}>
                            <b>{props.Name}</b></span>
                    </div>}

                </div>);

        }
    };

    render() {
        return (<div>
            <GanttComponent dataSource={TimeTable} resources={Airports} taskFields={this.taskFields} resourceFields={this.resourceFields}
                collapseAllParentTasks={true} dateFormat="M/dd/yyyy hh:mm:ss" treeColumnIndex={1}
                durationUnit="Hour" timelineSettings={this.timelineSettings} viewType='ResourceView'
                rowHeight={60} taskbarHeight={50} dayWorkingTime={this.dayWorkingTime}
                parentTaskbarTemplate={this.parentTaskbarTemplate} taskbarTemplate={this.childTaskbarTemplate}
                height={550} includeWeekend={true} labelSettings={this.labelSettings} tooltipSettings={this.tooltipSettings}
                enableMultiTaskbar={true} eventMarkers={this.eventMarkers} allowSelection={true}
                queryCellInfo={this.queryCellInfo}
                projectStartDate={new Date('02/13/2021')} projectEndDate={new Date('02/16/2021')}>
                <ColumnsDirective>
                    <ColumnDirective field="Id" visible={false}></ColumnDirective>
                    <ColumnDirective field="Name" headerText='Code'></ColumnDirective>
                    {/**Column header template*/}
                    <ColumnDirective field="Model" headerText='Flight' headerTemplate={() => {
                        return (<div style={{ marginLeft: "20px" }}><img src="./image/airplane.png" width="20" height="20" className="e-image" /></div>);
                    }} ></ColumnDirective>
                </ColumnsDirective>
                <Inject services={[DayMarkers, Selection]} />
            </GanttComponent>
        </div>
        );
    }
}
render(<CustomGanttchart />, document.getElementById('root'));
