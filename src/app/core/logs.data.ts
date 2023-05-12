export enum LogType {
  doorState = "medium",
  accessCode = "small",
  all = "all"
}

export interface RawLogData {
  date: string;
  action: string;
  type: LogType;
}

export const rawLogDateFormat = "DD-MM-YYYY HH:mm:ss";

export const rawLogsData: RawLogData[][] = [
  [
    { date: "06-05-2023 20:17:44", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "06-05-2023 20:18:32", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "08-05-2023 08:28:08", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "08-05-2023 08:28:28", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "08-05-2023 08:28:43", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "08-05-2023 08:29:12", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "09-05-2023 03:50:33", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "09-05-2023 20:51:01", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "09-05-2023 23:38:21", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "09-05-2023 23:38:25", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "10-05-2023 16:24:38", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "10-05-2023 16:24:40", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "10-05-2023 18:41:38", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "10-05-2023 18:43:04", action: "RECONNECTION", type: LogType.accessCode },
  ]
];