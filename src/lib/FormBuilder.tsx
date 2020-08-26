import React from "react";

/**
 * components to build forms
 */
import {
  Select,
  InputNumber,
  Switch,
  Button,
  Checkbox,
  Input,
  Upload,
  DatePicker,
  Slider,
} from "antd";
/**
 * ant design form input types
 */
import { InputProps, TextAreaProps } from "antd/lib/input";
import { FormItemProps } from "antd/lib/form";
import { UploadProps } from "antd/lib/upload";
import { ButtonProps } from "antd/lib/button";
import { SelectProps } from "antd/lib/select";
import { SwitchProps } from "antd/lib/switch";
import { CheckboxProps } from "antd/lib/checkbox";
import { InputNumberProps } from "antd/lib/input-number";
import { DatePickerProps } from "antd/lib/date-picker";
import { RangePickerProps } from "antd/lib/date-picker/generatePicker";
import { SliderBaseProps } from "antd/lib/slider";

export type InputsUnionTypes =
  | "text"
  | "textarea"
  | "checkbox"
  | "file"
  | "submit"
  | "select"
  | "switch"
  | "number"
  | "upload"
  | "time"
  | "date"
  | "rangePicker"
  | "slider";

export type SelectOptionProps = {
  label: string;
  value: string | number;
};

export type InputType = {
  type: InputsUnionTypes;
  formItemProps: FormItemProps;
  props:
    | InputProps
    | TextAreaProps
    | CheckboxProps
    | UploadProps
    | ButtonProps
    | SelectProps<any>
    | SwitchProps
    | InputNumberProps
    | DatePickerProps
    | RangePickerProps<any>
    | SliderBaseProps;
  options?: SelectOptionProps[];
};

/**
 * destruct Option component from Antd Select
 */
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export function renderFormInputs(input: InputType) {
  switch (input.type) {
    case "checkbox":
      return <Checkbox {...(input.props as CheckboxProps)} />;

    case "number":
      return <InputNumber {...(input.props as InputNumberProps)} />;

    case "switch":
      return <Switch {...(input.props as SwitchProps)} />;

    case "text":
      return <Input {...(input.props as InputProps)} />;

    case "textarea":
      return <TextArea {...(input.props as TextAreaProps)} />;

    case "submit":
      return <Button {...(input.props as ButtonProps)} />;

    case "upload":
      return <Upload {...(input.props as UploadProps)} />;

    case "date":
      return <DatePicker {...(input.props as DatePickerProps)} />;

    case "rangePicker":
      return <RangePicker {...(input.props as RangePickerProps<any>)} />;

    case "slider":
      return <Slider {...(input.props as SliderBaseProps)} />;

    case "select":
      return (
        <Select {...(input.props as SelectProps<any>)}>
          {input?.options?.map(option => {
            return (
              <Option value={option.value} key={option.value}>
                {option.label}
              </Option>
            );
          })}
        </Select>
      );

    default:
      return null;
  }
}
