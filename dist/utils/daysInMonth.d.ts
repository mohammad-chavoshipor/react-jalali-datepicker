import { Moment } from "jalali-moment";
export interface IDays {
    day: string;
    utc: string;
    faDate: string;
    disable: boolean;
}
export interface IDaysInMonth {
    days: IDays[];
    monthName: string;
    month: number;
    today?: string;
}
export declare const daysInMonth: (date: Moment) => IDaysInMonth;
