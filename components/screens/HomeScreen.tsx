import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import BackButton from "../BackButton";
import UserIcon from "../UserIcon";
import VideoCard from "../VideoCard";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = React.useState("live");
  const tabArray = ["live", "recorded"];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <UserIcon />
      </View>
      <Text style={styles.headerText}>Meditations</Text>
      <Text style={styles.subHeader}>
        Explore a variety of meditations to enhance your well-being and peace of
        mind.
      </Text>

      <View style={styles.tabsContainer}>
        {tabArray.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              {
                backgroundColor: activeTab === tab ? "#229ED9" : "#f5f5fa",
              },
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={{
                textAlign: "center",
                color: activeTab === tab ? "#fff" : "#666",
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={[
          {
            id: "1",
            title: "Morning Meditation",
            description: "Start your day with a peaceful mind.",
            imageUrl:
              "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          },
          {
            id: "2",
            title: "Evening Relaxation",
            description: "Unwind and relax after a long day.",
            imageUrl:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          },
          {
            id: "3",
            title: "Evening Relaxation",
            description: "Unwind and relax after a long day.",
            imageUrl:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          },
          {
            id: "4",
            title: "Evening Relaxation",
            description: "Unwind and relax after a long day.",
            imageUrl:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          },
          {
            id: "5",
            title: "Evening Relaxation",
            description: "Unwind and relax after a long day.",
            imageUrl:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          },
        ]}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: vs(20) }}
        renderItem={({ item }) => (
          <VideoCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(10),
    marginTop: vs(50),
  },

  headerText: {
    fontSize: s(20),
    fontWeight: "semibold",
    marginHorizontal: s(16),
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: vs(20),
  },

  tabsContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: vs(20),
    padding: 10,
    backgroundColor: "#f5f5fa",
    borderRadius: s(16),
  },

  tab: {
    backgroundColor: "#f5f5fa",
    flex: 1,
    padding: s(10),
    borderRadius: s(8),
  },
  subHeader: {
    fontSize: s(14),
    color: "#666",
    marginTop: vs(10),
    marginHorizontal: s(16),
    marginBottom: vs(20),
  },
});
