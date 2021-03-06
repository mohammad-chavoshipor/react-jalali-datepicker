import * as React from "react";
import { IDatePickerProps, IDatePickerState } from "./types";
export declare class DatePicker extends React.PureComponent<IDatePickerProps, IDatePickerState> {
    static defaultProps: Partial<IDatePickerProps>;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<IDatePickerProps>, prevState: Readonly<IDatePickerState>): void;
    changeMonth: (amount: any) => void;
    changeHour: (value: any) => void;
    changeMinute: (value: any) => void;
    toggleModalOpen: () => void;
    toggleTimePickerView: (e: any) => void;
    selectDay: (e: React.SyntheticEvent<EventTarget>) => void;
    daysEventListeners: () => {
        onClick: (e: React.SyntheticEvent<EventTarget>) => void;
    };
    cancelButton: () => void;
    submitButton: () => void;
    render(): React.ReactNode;
}
