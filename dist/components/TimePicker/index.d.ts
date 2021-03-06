import * as React from "react";
import { ITimePickerProps, ITimePickerState } from "./types";
export declare class TimePicker extends React.PureComponent<ITimePickerProps, ITimePickerState> {
    constructor(props: any);
    componentDidUpdate(prevProps: Readonly<ITimePickerProps>, prevState: Readonly<ITimePickerState>, snapshot?: any): void;
    setMinute: (e: React.MouseEvent | React.TouchEvent) => void;
    setHour: (e: React.MouseEvent | React.TouchEvent) => void;
    handleMouseMove: (e: React.MouseEvent) => void;
    handleMouseUp: () => void;
    handleMouseDown: (e: any) => void;
    handleTouchMove: (e: React.TouchEvent) => void;
    handleTouchEnd: () => void;
    render(): JSX.Element;
}
