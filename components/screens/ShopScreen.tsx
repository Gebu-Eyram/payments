import React from "react";
import { ScrollView } from "react-native";
import Header from "./shop/Header";
import TopCategories from "./shop/TopCategories";
import TopSection from "./shop/TopSection";
import WatchSection from "./shop/WatchSection";

const ShopScreen = () => {
  return (
    <ScrollView>
      <Header />
      <TopSection />
      <TopCategories />
      <WatchSection />
    </ScrollView>
  );
};

export default ShopScreen;
