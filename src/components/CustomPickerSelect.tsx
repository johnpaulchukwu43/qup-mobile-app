import {Ionicons} from "@expo/vector-icons";
import RNPickerSelect, {PickerSelectProps} from "react-native-picker-select";
import React from "react";
import {StyleSheet} from "react-native";


const CustomPickerSelect = (props:PickerSelectProps) => {

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });


  return(
    <RNPickerSelect
      placeholder={props.placeholder}
      items={props.items}
      onValueChange={(itemValue, itemIndex) =>props.onValueChange(itemValue,itemIndex)}
      style={{
        ...props.style,
        ...pickerSelectStyles,
        iconContainer: {
          top: 10,
          right: 12,
        },
      }}
      value={props.value}
      useNativeAndroidPickerStyle={props.useNativeAndroidPickerStyle}
      Icon={() => {
        return <Ionicons name="arrow-down-circle" size={24} color="gray" />;
      }}
    />
  )
}

export default CustomPickerSelect;
