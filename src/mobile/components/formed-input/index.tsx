import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface FormedInputProps {
  name: string;
  placeholder: string;
  control: Control<any>;
  errors: FieldErrors<any>;
}

export const FormedInput: React.FC<FormedInputProps> = ({
  control,
  placeholder,
  errors,
  name
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{
          maxLength: 100
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={{ width: "100%" }}>
            <Text>{placeholder}</Text>
            <TextInput
              placeholder="Пароль"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={style.input}
            />
          </View>
        )}
      />
      {errors[name] && <Text>This is required.</Text>}
    </>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 16,
    paddingLeft: 10
  }
});
