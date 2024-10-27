import { authApi } from "@/constants/api";
import {
  LoginFormData,
  LoginResponse,
  RegistrationFormData,
  User
} from "@/entities";
import { useStoreHook } from "@/hooks/use-store";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { router } from "expo-router";

export const useLoginSubmit = () => {
  const store = useStoreHook().user;

  return useMutation({
    mutationFn: async (data: LoginFormData) => {
      const response = await axios.post<LoginResponse>(
        `${authApi}/sign-in`,
        data
      );

      if (!response.data) {
        throw new Error("erorr!");
      }

      const userData = await axios.get<User>(`${authApi}/user`, {
        headers: {
          Authorization: `Bearer ${response.data.access}`
        }
      });

      store.access = response.data.access;
      store.refresh = response.data.refresh;
      store.user = userData.data;

      router.push("/(tabs)");
    }
  });
};

export const useRegisterSubmit = () => {
  const store = useStoreHook().user;

  return useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      const response = await axios
        .post<LoginResponse>(`${authApi}/sign-up`, {
          ...data,
          rating: 0,
          is_admin: false
        })
        .catch((e) => {
          console.log(e.response);
        });

      if (!response.data) {
        throw new Error("erorr!");
      }

      const userData = await axios.get<User>(`${authApi}/user`, {
        headers: {
          Authorization: `Bearer ${response.data.access}`
        }
      });

      store.access = response.data.access;
      store.refresh = response.data.refresh;
      store.user = userData.data;

      router.push("/(tabs)");
    }
  });
};
