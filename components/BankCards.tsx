import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CreditCardAnimation from "./CardAnimation";

const BankCards = () => {
  return (
    <View
      style={{
        backgroundColor: "#F7F8F9",
        borderRadius: s(16),
        padding: s(20),
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: vs(257),
      }}
    >
      <View>
        <CreditCardAnimation />
      </View>
      <View
        style={{
          marginTop: s(16),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: s(18),
              fontWeight: "500",
              textAlign: "center",
              color: "#1F2937",
            }}
          >
            No master card added
          </Text>
          <Text
            style={{
              fontSize: s(16),
              fontWeight: "semibold",
              textAlign: "center",
              color: "#2D2D2D",
              lineHeight: s(24),
              marginTop: s(8),
            }}
          >
            You can add a master card and save it for future payments
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BankCards;

const styles = StyleSheet.create({});
