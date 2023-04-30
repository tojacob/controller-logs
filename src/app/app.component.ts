import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from "@angular/forms";
import { debounceTime, distinctUntilChanged, firstValueFrom, timer } from "rxjs";
import { LogType, RawLogData, rawLogDateFormat, rawLogsData } from "./core/logs.data";
import { dates } from "./core/date.utility";

enum QueryTimeMode {
  second = "second",
  minute = "minute"
}

interface QueryForm {
  time: number;
  mode: QueryTimeMode;
  type: LogType;
}

interface LogData {
  type: LogType;
  startTime: string;
  endTime: string;
  totalTime: { s: number; m: number; };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly rawLogsData: RawLogData[][] = rawLogsData;
  public logTypeFilterValue = LogType.doorState;
  public loading = true;
  public queryForm = this.fb.group<QueryForm>({
    time: 0,
    mode: QueryTimeMode.second,
    type: LogType.all
  });
  public logsData: LogData[] = [];

  constructor(private fb: NonNullableFormBuilder) { }

  public ngOnInit(): void {
    this.onFilter(this.queryForm.getRawValue());
    this.queryForm.valueChanges
      .pipe(
        debounceTime(1_000),
        distinctUntilChanged(),
      )
      .subscribe(async (value) => {
        this.loading = true;
        await firstValueFrom(timer(1_000));
        this.onFilter(<QueryForm>value);
        this.loading = false;
      });

    this.loading = false;
  }

  private naturalSortTimeCollator(a: LogData, b: LogData) {
    return a.startTime.localeCompare(b.startTime, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }

  private onFilter(queryForm: QueryForm): void {
    const logsData = [];

    for (const log of this.rawLogsData) {
      const startTimeDate = dates(log[0].date, rawLogDateFormat);
      const endTimeDate = dates(log[1].date, rawLogDateFormat);
      const totalTimeMs = endTimeDate.diff(startTimeDate);
      const totalTimeSec = totalTimeMs / 1_000;
      const totalTimeMin = totalTimeSec / 60;
      const logData: LogData = {
        type: log[0].type,
        startTime: startTimeDate.format(),
        endTime: endTimeDate.format(),
        totalTime: this.calculateTotalTime(totalTimeSec)
      };
      const time = queryForm.mode === QueryTimeMode.second ?
        totalTimeSec :
        totalTimeMin;

      if (time >= queryForm.time) {
        if (queryForm.type === LogType.all) logsData.push(logData);
        else if (logData.type === queryForm.type) logsData.push(logData);
      }
    }

    this.logsData = logsData.sort(this.naturalSortTimeCollator);
  }

  private calculateTotalTime(seconds: number): { m: number; s: number; } {
    const m = (Math.floor(seconds / 60));
    const s = (seconds % 60);

    return { m, s };
  }
}
