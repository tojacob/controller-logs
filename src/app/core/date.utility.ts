import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/es';

const timezoneName = "America/Ojinaga";
const utcOffset = -6;

dayjs.locale('es');
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(timezoneName);

export const dates = (date?: dayjs.ConfigType, parseFormat?: string): dayjs.Dayjs => {
  if (date) return dayjs(date, parseFormat).utcOffset(utcOffset);
  return dayjs().utcOffset(utcOffset);
};