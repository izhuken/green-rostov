import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductItem } from "./product-item";

interface ProductContainerProps {
  productList?: any[];
}

export const ProductContainer: React.FC<ProductContainerProps> = ({
  productList = []
}) => {
  return (
    <View>
      <View>
        <Text style={styles.titleText}>Товары</Text>
      </View>
      <View style={styles.container}>
        {productList.map(({ title, co2 }) => (
          <ProductItem key={title} title={title} co2={co2} />
        ))}
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  titleText: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    padding: 10
  }
});
