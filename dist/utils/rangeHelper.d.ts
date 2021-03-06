import { IRangeDate, IRangeDays } from "../types";
import { Moment } from "jalali-moment";
export declare function rangeHelper(range: IRangeDate): IRangeDays;
export declare const makeRangeStatus: (start: Moment, end: Moment) => string;
export declare const datePickerStatus: (date: Moment) => string;
