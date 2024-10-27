import {
  AddProductModal,
  ProductContainer,
  QrScanner
} from "@/components/products";
import { actionsApi } from "@/constants/api";
import { useStoreHook } from "@/hooks/use-store";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Button, Icon, useDisclosure } from "react-native-ficus-ui";

export default function ProductsScreen() {
  const userStore = useStoreHook().user;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [chequeString, setChequeString] = useState("");
  const [sessionProducts, setSessionProducts] = useState<any[]>([]);
  const { data } = useQuery({
    queryKey: ["cheque-key", chequeString],
    queryFn: async () => {
      if (!chequeString || chequeString === "") return;

      return await axios.post(`${actionsApi}/user-product/create`, {
        user_id: userStore.user?.id,
        qrraw: chequeString
      });
    }
  });

  useEffect(() => {
    if (data) {
      console.log(data.data.product);
      setSessionProducts(data.data.product);
    }
  }, [data]);

  return (
    <Box h={"100%"}>
      <QrScanner
        handler={(data) => {
          setChequeString(data);
        }}
      />
      <ProductContainer productList={sessionProducts} />
      <AddProductModal
        isOpen={isOpen}
        onClose={onClose}
        submitter={(data) => {
          console.log(data);
        }}
      />
      <Button
        bg={"#FFAD5B"}
        position={"absolute"}
        bottom={20}
        right={20}
        onPress={onOpen}
      >
        <Icon name="car" />
      </Button>
    </Box>
  );
}
