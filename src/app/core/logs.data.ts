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
    { date: "01-05-2023 12:10:49", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:11:02", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:11:18", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:11:21", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:12:04", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:12:29", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:13:12", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:13:32", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:16:05", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:16:18", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:16:41", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:17:01", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:23:05", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:23:25", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:24:18", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:24:26", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:26:09", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:26:25", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:26:59", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:27:39", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:28:02", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:28:43", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:36:37", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:36:58", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:37:41", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:38:21", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:40:54", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:41:09", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:41:31", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:42:12", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:43:45", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:44:02", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:44:24", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:45:05", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:47:08", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:47:49", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:48:05", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:48:16", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:48:39", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:49:19", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:51:43", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:52:50", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:53:33", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:54:13", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 12:58:47", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 12:59:00", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 13:05:04", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 13:05:45", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 21:39:28", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 21:39:31", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 21:40:44", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "01-05-2023 21:40:48", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "01-05-2023 21:41:11", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 20:45:00", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 20:58:46", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 20:59:02", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 21:27:52", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 21:28:03", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 21:28:18", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 21:28:34", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 21:39:39", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 21:40:04", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 21:53:00", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 21:53:02", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 21:56:16", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 21:56:31", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 22:01:24", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 22:01:26", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "02-05-2023 23:00:01", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "02-05-2023 23:00:09", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "03-05-2023 21:49:27", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "03-05-2023 21:49:35", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "03-05-2023 21:54:02", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "03-05-2023 21:54:04", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "04-05-2023 07:10:44", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "04-05-2023 07:11:27", action: "RECONNECTION", type: LogType.accessCode },
  ],
];