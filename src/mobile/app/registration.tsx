import { FormedInput } from "@/components/formed-input";
import { RegistrationFormData } from "@/entities";
import { useRegisterSubmit } from "@/lib";
import { Link } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";

const RegisterPage = () => {
  const { mutate } = useRegisterSubmit();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormData>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  return (
    <View style={style.dataContainer}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Регистрация</Text>
      </View>
      <View style={style.inputContainer}>
        <FormedInput
          name="email"
          placeholder="E-mail"
          control={control}
          errors={errors}
        />
        <FormedInput
          name="username"
          placeholder="Имя пользователя"
          control={control}
          errors={errors}
        />
        <FormedInput
          name="phone"
          placeholder="Телефон"
          control={control}
          errors={errors}
        />
        <FormedInput
          name="password"
          placeholder="Пароль"
          control={control}
          errors={errors}
        />

        <Pressable
          style={style.button}
          onPress={handleSubmit((data) => mutate(data))}
        >
          <Text style={style.text}>Регистрация</Text>
        </Pressable>
      </View>

      <View style={style.linkContainer}>
        <Text>Есть аккаунт? </Text>
        <Link href={{ pathname: "" }} style={style.link}>
          Вход
        </Link>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  link: {
    textDecorationLine: "underline"
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  dataContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
    padding: "5%"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "100%",
    fontSize: 16,
    backgroundColor: "#000",
    color: "#fff"
  },
  text: {
    color: "#fff"
  },
  headerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    color: "#000",
    fontSize: 32
  }
});

export default RegisterPage;
