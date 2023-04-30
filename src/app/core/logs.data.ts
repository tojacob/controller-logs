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
    { date: "26-04-2023 21:30:27", action: "DISCONNECTION", type: LogType.doorState },
    { date: "26-04-2023 21:30:30", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "26-04-2023 22:04:57", action: "DISCONNECTION", type: LogType.doorState },
    { date: "26-04-2023 22:05:01", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "26-04-2023 22:55:17", action: "DISCONNECTION", type: LogType.doorState },
    { date: "26-04-2023 22:55:19", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 00:20:36", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 00:20:44", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 00:27:22", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 00:27:24", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 04:21:36", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 04:21:38", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 07:19:33", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 07:19:33", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 07:32:24", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 07:32:30", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 07:34:03", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 07:34:30", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 09:07:12", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 09:07:15", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 10:13:52", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 10:13:53", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 10:17:13", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 10:17:19", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 10:30:02", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 10:30:07", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 10:47:42", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 10:47:47", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 11:19:03", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:19:05", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:19:11", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:19:29", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:22:40", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:22:45", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:23:07", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:23:12", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 11:24:55", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:24:57", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 11:26:43", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:26:48", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 11:27:48", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:27:48", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 11:40:06", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:40:06", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:45:39", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:45:44", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:46:29", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:46:30", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:48:09", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:48:18", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:50:31", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:50:32", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:53:17", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:53:19", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 11:54:00", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 11:54:38", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:07:39", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:07:45", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:07:55", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:07:56", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:09:17", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:09:22", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:12:49", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:12:51", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:16:29", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:16:31", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:19:17", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:19:22", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:20:12", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:20:13", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:21:05", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:21:05", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:21:35", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:21:47", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 12:29:50", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:30:03", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 12:42:12", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 12:42:13", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 13:16:55", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 13:16:57", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 13:17:02", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 13:17:09", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 16:27:05", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 16:27:19", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 17:17:58", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 17:17:59", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 17:19:03", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 17:19:05", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 17:19:17", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 17:19:21", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 18:04:23", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 18:04:24", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 18:08:11", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 18:08:12", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 18:08:37", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 18:08:38", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 21:19:38", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 21:19:39", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "27-04-2023 23:57:15", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 23:57:39", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "27-04-2023 23:57:58", action: "DISCONNECTION", type: LogType.doorState },
    { date: "27-04-2023 23:57:58", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "28-04-2023 00:33:55", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 00:34:38", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 00:39:09", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 00:44:18", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 01:07:20", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 01:12:33", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 02:25:06", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 02:25:18", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 03:00:12", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 03:00:24", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "28-04-2023 03:14:28", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 03:14:45", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 03:20:09", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 03:20:22", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 04:42:58", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 04:42:59", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "28-04-2023 06:33:06", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 06:33:07", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 07:07:13", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 07:07:22", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 07:20:00", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 07:25:12", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "28-04-2023 11:21:41", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 11:21:47", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 11:22:04", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 11:22:14", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 11:38:08", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 11:38:09", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 11:39:15", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 11:39:15", action: "RECONNECTION", type: LogType.doorState },
  ],
  [
    { date: "28-04-2023 11:43:49", action: "DISCONNECTION", type: LogType.doorState },
    { date: "28-04-2023 11:43:52", action: "RECONNECTION", type: LogType.doorState }
  ],
  [
    { date: "26-04-2023 22:05:00", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "26-04-2023 22:05:04", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "26-04-2023 22:55:23", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "26-04-2023 22:55:47", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "26-04-2023 22:56:03", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "26-04-2023 22:56:12", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 04:00:48", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 04:01:13", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 04:01:29", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 04:01:39", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 06:24:54", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 06:24:54", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 07:19:47", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 07:20:26", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 07:32:07", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 07:32:23", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 10:17:23", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 10:17:28", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 10:48:34", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 10:48:35", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 11:24:17", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 11:24:22", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 11:25:45", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 11:25:50", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 11:26:57", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 11:26:59", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 11:28:41", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 11:28:45", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 11:29:24", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 11:29:25", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 12:32:49", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 12:33:06", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 13:12:55", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 13:12:56", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 13:17:02", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 13:17:27", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 13:17:42", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 13:17:53", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 16:17:34", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 16:17:35", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 17:01:42", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 17:01:47", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 18:04:51", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 18:05:16", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 18:05:32", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 18:06:29", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 18:07:21", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 18:07:38", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 18:58:36", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 18:58:54", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 19:07:41", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 19:07:42", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 19:27:17", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 19:27:19", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 21:09:13", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 21:09:13", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 22:26:33", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 22:26:59", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 22:27:15", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 22:27:29", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "27-04-2023 23:26:07", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "27-04-2023 23:26:09", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 00:17:23", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 00:17:25", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 00:18:22", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 00:18:47", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 00:19:03", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 00:19:13", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 00:27:29", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 00:27:30", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 03:13:33", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 03:13:33", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 05:09:26", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 05:09:28", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 08:34:43", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 08:34:48", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 09:26:54", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 09:26:55", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 09:50:25", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 09:50:27", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 11:57:53", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 11:57:59", action: "RECONNECTION", type: LogType.accessCode },
  ],
  [
    { date: "28-04-2023 12:24:32", action: "DISCONNECTION", type: LogType.accessCode },
    { date: "28-04-2023 12:24:49", action: "RECONNECTION", type: LogType.accessCode },
  ],
];