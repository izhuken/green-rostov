import { FormedInput } from "@/components/formed-input";
import { LoginFormData } from "@/entities";
import { useLoginSubmit } from "@/lib";
import { Link } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";

const LoginPage = () => {
  const { mutate } = useLoginSubmit();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  return (
    <View style={style.dataContainer}>
      <View style={style.headerContainer}>
        <Text style={style.header}>Вход</Text>
      </View>
      <View style={style.inputContainer}>
        <FormedInput
          name="email"
          placeholder="E-mail"
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
          <Text style={style.text}>Вход</Text>
        </Pressable>
      </View>
      <View style={style.linkContainer}>
        <Text>Нет аккаунта? </Text>
        <Link href={{ pathname: "registration" }} style={style.link}>
          Регистрация
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

export default LoginPage;
