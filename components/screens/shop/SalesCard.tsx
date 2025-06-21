import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";

const SalesCard = ({
  imageUrl = require("@/assets/watches/watch.png"),
  title = "Casio G-Shock",
  price = "$150.00",
  originalPrice = "$300.00",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>50% OFF</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.favouriteButton}>
          <AntDesign name="hearto" size={s(14)} color="#00000066" />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={imageUrl}
          style={{ width: "100%", height: s(120), borderRadius: s(16) }}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{
          fontSize: s(14),
          marginTop: s(8),
          color: "#000",
        }}
      >
        {title}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: s(8),
        }}
      >
        <Text
          style={{
            fontSize: s(14),
            fontWeight: "500",

            color: "#000",
          }}
        >
          {price}
        </Text>

        <Text
          style={{
            fontSize: s(12),
            textDecorationLine: "line-through",
            color: "#00000066",
          }}
        >
          {originalPrice}
        </Text>
      </View>
    </View>
  );
};

export default SalesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    padding: s(8),
    flex: 1,
    borderRadius: s(16),
    borderColor: "#E0E0E0",
    height: s(240),
    marginBottom: s(16),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: s(8),
  },
  favouriteButton: {
    padding: s(4),
    borderRadius: s(16),
    backgroundColor: "#F2F2F2",
    borderWidth: s(1),
    borderColor: "#D8D3D3",
    alignItems: "center",
    justifyContent: "center",
  },
});
