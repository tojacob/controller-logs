import { Component, OnInit } from '@angular/core';
import { RawLogData, rawLogDateFormat, rawLogsData } from "./core/logs.data";
import { dates } from "./core/date.utility";
import { Subject, debounceTime, filter, firstValueFrom, tap, timer } from "rxjs";

interface LogData {
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
  private readonly downtimeFilterValue$ = new Subject<number>();
  public downtimeFilterValue = 0;
  public downtimeTypeFilterValue = "second";
  public logsData: LogData[] = [];
  public loading = true;

  constructor() { }

  public ngOnInit(): void {
    this.onFilter(this.downtimeFilterValue);
    this.downtimeFilterValue$
      .pipe(
        filter((v) => typeof v === "number"),
        debounceTime(1_000)
      )
      .subscribe(async (value: number) => {
        this.loading = true;
        await firstValueFrom(timer(1_000));
        this.onFilter(value);
        this.loading = false;
      });

    this.loading = false;
  }

  private onFilter(downtimeFilterValue: number): void {
    const logsData = [];

    for (const log of this.rawLogsData) {
      const startTimeDate = dates(log[0].date, rawLogDateFormat);
      const endTimeDate = dates(log[1].date, rawLogDateFormat);
      const totalTimeMs = endTimeDate.diff(startTimeDate);
      const totalTimeSec = totalTimeMs / 1_000;
      const totalTimeMin = totalTimeSec / 60;
      const logData = {
        startTime: startTimeDate.format(),
        endTime: endTimeDate.format(),
        totalTime: this.calculateTotalTime(totalTimeSec)
      };
      const time = this.downtimeTypeFilterValue === "second" ?
        totalTimeSec :
        totalTimeMin;

      if (time >= downtimeFilterValue) {
        logsData.push(logData);
      }
    }

    this.logsData = logsData;
  }

  private calculateTotalTime(seconds: number): { m: number; s: number; } {
    const m = (Math.floor(seconds / 60));
    const s = (seconds % 60);

    return { m, s };
  }

  public onDowntimeFilterChange(value: number): void {
    this.downtimeFilterValue = value;
    this.downtimeFilterValue$.next(this.downtimeFilterValue);
  }

  public onDowntimeTypeFilterChange(value: string): void {
    this.downtimeTypeFilterValue = value;
    this.downtimeFilterValue$.next(this.downtimeFilterValue);
  }
}
