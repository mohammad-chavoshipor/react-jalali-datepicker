import * as React from "react";
import { IRangeDatePickerProps, IRangeDatePickerState } from "./types";
export declare class RangeDatePicker extends React.Component<IRangeDatePickerProps, IRangeDatePickerState> {
    static defaultProps: Partial<IRangeDatePickerProps>;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<IRangeDatePickerProps>, prevState: Readonly<IRangeDatePickerState>, snapshot?: any): void;
    changeMonth: (amount: any) => void;
    toggleModalOpen: () => void;
    changeStartDay: (e: React.SyntheticEvent<EventTarget>) => {};
    changeEndDay: (e: React.SyntheticEvent<EventTarget>) => void;
    daysEventListeners: () => {
        onClick: (e: React.SyntheticEvent<EventTarget>) => {};
        onMouseOver?: undefined;
    } | {
        onMouseOver: (e: React.SyntheticEvent<EventTarget>) => void;
        onClick: () => void;
    };
    endSelecting: () => void;
    changeInputValues: (e: React.ChangeEvent<HTMLInputElement>, start?: boolean) => void;
    cancelButton: () => void;
    submitButton: () => void;
    render(): React.ReactNode;
}
