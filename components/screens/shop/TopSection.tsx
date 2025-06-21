import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import PromoCard from "./PromoCard";

const TopSection = () => {
  const CardContents = [
    {
      title: "20% OFF DURING THE WEEKEND",
      color: "#F17547",
      buttonText: "Get Now",
    },
    {
      title: "KICK OFF THE WEEKEND WITH US!",
      color: "#1383F1",
      buttonText: "Register Now",
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hello Henry</Text>
        <Text style={styles.description}>What can we get you today?</Text>
      </View>
      <FlatList
        data={CardContents}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: s(16),
          gap: s(16),
        }}
        renderItem={({ item }) => (
          <PromoCard
            title={item.title}
            buttonText={item.buttonText}
            color={item.color}
          />
        )}
      />
    </View>
  );
};

export default TopSection;
const styles = StyleSheet.create({
  container: {
    marginTop: s(10),
    padding: s(16),
    gap: vs(24),
  },
  title: {
    fontSize: s(18),
    fontWeight: 500,
  },
  description: {
    fontSize: s(14),
    color: "#6B7280", // Tailwind gray-500
    marginTop: s(4),
  },

  button: {
    backgroundColor: "#fff",
    height: s(36),
    width: s(36),
    borderRadius: s(18),
    alignItems: "center",
    justifyContent: "center",
  },
});
