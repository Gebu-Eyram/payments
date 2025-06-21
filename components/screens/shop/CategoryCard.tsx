import Ionicons from "@expo/vector-icons/Ionicons";
import React, { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
interface CategoryProps {
  title: "glasses-sharp" | "watch" | "shirt" | "bag" | "laptop" | "airplane";
  isPressed?: boolean;
  onPress?: () => void;
}

const CategoryCard: FC<CategoryProps> = ({
  title,
  isPressed = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, isPressed && styles.activeTab]}
    >
      <Ionicons
        name={title}
        size={30}
        color={isPressed ? "white" : "#00000066"}
        style={[isPressed && styles.activeIcon]}
      />
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: s(64),
    width: s(64),
    borderColor: "#D8D3D3",
    borderRadius: 20,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#F17547",
  },

  activeIcon: {
    color: "white",
  },
});
