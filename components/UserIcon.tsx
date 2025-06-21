import React from "react";
import { Image, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

const UserIcon = () => {
  return (
    <Image
      alt="user"
      style={styles.UserIcon}
      source={{
        uri: "https://th.bing.com/th/id/OIP.CbAiBtPaiCWJYBeQmDdrcAHaJQ?rs=1&pid=ImgDetMain",
      }}
    />
  );
};

export default UserIcon;

const styles = StyleSheet.create({
  UserIcon: { width: s(40), height: s(40), borderRadius: s(20) },
});
