import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";
import CategoryCard from "./CategoryCard";

const TopCategories = () => {
  const categories = [
    "glasses-sharp",
    "watch",
    "shirt",
    "bag",
    "laptop",
    "airplane",
  ];
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: s(16), gap: s(16) }}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <CategoryCard
            title={item as "glasses-sharp" | "watch" | "shirt" | "bag"}
            onPress={() => setSelectedCategory(item)}
            isPressed={
              selectedCategory === item ||
              (index === 0 && selectedCategory === null)
            } // Highlight the first category
          />
        )}
      />
    </View>
  );
};

export default TopCategories;

const styles = StyleSheet.create({
  container: {
    padding: s(16),
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: s(16),
  },
});
