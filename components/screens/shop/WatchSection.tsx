import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import SalesCard from "./SalesCard";

const WatchSection = () => {
  const watches = [
    {
      imageUrl: require("@/assets/watches/watch.png"),
      title: "Casio G-Shock",
      price: "$150.00",
      originalPrice: "$300.00",
    },
    {
      imageUrl: require("@/assets/watches/watch1.png"),
      title: "Apple Watch Series 8",
      price: "$150.00",
      originalPrice: "$300.00",
    },
    {
      imageUrl: require("@/assets/watches/watch2.png"),
      title: "Rolex Submariner",
      price: "$8,500.00",
      originalPrice: "$10,000.00",
    },
    {
      imageUrl: require("@/assets/watches/watch3.png"),
      title: "Omega Seamaster",
      price: "$5,200.00",
      originalPrice: "$6,500.00",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={watches}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <SalesCard
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            originalPrice={item.originalPrice}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{ gap: 16, justifyContent: "space-between" }}
      />
    </View>
  );
};

export default WatchSection;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
