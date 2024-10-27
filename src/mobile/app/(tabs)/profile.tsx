import { ProfileIcon } from "@/assets/svg";
import { authApi } from "@/constants/api";
import { useStoreHook } from "@/hooks/use-store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, Text, VStack } from "react-native-ficus-ui";

const Profile = () => {
  const storedUser = useStoreHook().user;

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async () =>
      await axios.get(`${authApi}/user`, {
        headers: {
          Authorization: `Bearer ${storedUser.access}`
        }
      })
  });

  return (
    <VStack h={"100%"}>
      <Box w={"100%"} p={20}>
        <ProfileIcon />
        <Text>{user?.data.email ?? "Загрузка..."}</Text>
        <Text>Рейтинг: {user?.data.rating ?? "Загрузка..."}</Text>
      </Box>
    </VStack>
  );
};

export default Profile;
