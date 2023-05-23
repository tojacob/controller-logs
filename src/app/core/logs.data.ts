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
    { date: "19-05-2023 18:03:08", action: "DISCONNECTION", type: LogType.doorState },
    { date: "19-05-2023 18:03:20", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "19-05-2023 18:53:25", action: "DISCONNECTION", type: LogType.doorState },
    { date: "19-05-2023 18:53:26", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "19-05-2023 20:15:51", action: "DISCONNECTION", type: LogType.doorState },
    { date: "19-05-2023 20:15:57", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 02:17:21", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 02:17:21", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 04:42:29", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 04:42:31", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 10:43:57", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 10:44:09", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 11:08:30", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 11:08:47", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 11:48:59", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 11:49:16", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 12:22:13", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 12:22:18", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 13:53:29", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 13:53:33", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 14:06:02", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 14:06:02", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "20-05-2023 19:07:24", action: "DISCONNECTION", type: LogType.doorState },
    { date: "20-05-2023 19:07:25", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 08:54:52", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 08:54:54", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 09:12:00", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "21-05-2023 09:12:47", action: "RECONNECTION", type: LogType.accessCode }
  ],
  [
    { date: "21-05-2023 09:59:26", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 09:59:52", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 10:33:40", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 10:34:07", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 14:21:02", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 14:21:07", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 15:48:34", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 15:48:36", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 15:50:16", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 15:50:18", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 16:02:04", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 16:02:05", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 17:13:41", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 17:13:45", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 19:12:22", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 19:12:27", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "21-05-2023 20:03:30", action: "DISCONNECTION", type: LogType.doorState },
    { date: "21-05-2023 20:03:31", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 00:40:20", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "22-05-2023 00:40:37", action: "RECONNECTION", type: LogType.accessCode }
  ],
  [
    { date: "22-05-2023 00:41:34", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "22-05-2023 00:41:51", action: "RECONNECTION", type: LogType.accessCode }
  ],
  [
    { date: "22-05-2023 02:16:23", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 02:16:24", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 03:08:08", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 03:08:10", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 07:59:28", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 07:59:28", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 10:43:11", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 10:43:16", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 12:14:34", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 12:14:35", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 12:51:24", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 12:51:25", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 13:23:30", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 13:23:35", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 14:08:10", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 14:08:11", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 15:34:46", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 15:34:58", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 16:42:19", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 16:42:24", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 18:14:48", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 18:14:50", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 18:31:35", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 18:31:36", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 18:32:16", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 18:32:21", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 20:38:56", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 20:39:13", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 20:42:20", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 20:42:20", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 20:44:01", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 20:44:05", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 21:25:52", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 21:26:04", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 22:17:47", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 22:17:52", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "22-05-2023 23:29:28", action: "DISCONNECTION", type: LogType.doorState },
    { date: "22-05-2023 23:29:28", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 00:23:17", action: "DISCONNECTION", type: LogType.doorState },
    { date: "23-05-2023 00:23:22", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 02:26:37", action: "DISCONNECTION", type: LogType.doorState },
    { date: "23-05-2023 02:26:37", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 06:27:25", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "23-05-2023 06:27:25", action: "RECONNECTION", type: LogType.accessCode }
  ],
  [
    { date: "23-05-2023 06:27:26", action: "DISCONNECTION", type: LogType.doorState },
    { date: "23-05-2023 06:27:27", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 11:26:46", action: "DISCONNECTION", type: LogType.doorState },
    { date: "23-05-2023 11:26:48", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 11:36:54", action: "DISCONNECTION", type: LogType.doorState },
    { date: "23-05-2023 11:36:56", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 13:53:49", action: "DISCONNECTION", type: LogType.doorState },
    { date: "23-05-2023 13:53:51", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "23-05-2023 14:11:23", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "23-05-2023 14:11:27", action: "RECONNECTION", type: LogType.accessCode }
  ],
];