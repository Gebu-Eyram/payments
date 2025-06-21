import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AddNewButton from "../AddNewButton";
import BackButton from "../BackButton";
import BankCards from "../BankCards";
import PaymentList from "../PaymentList";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      {" "}
      <View style={styles.header}>
        <BackButton />
        <Text
          style={{
            fontSize: s(16),
          }}
        >
          Payments
        </Text>
      </View>
      <View style={styles.paymentMethodsSection}>
        <PaymentList />
      </View>
      <View style={styles.paymentMethodsSection}>
        <BankCards />
      </View>
      <View style={styles.paymentMethodsSection}>
        <AddNewButton />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(20),
  },
  container: {
    paddingHorizontal: s(10),
    marginTop: vs(50),
  },

  contactHeader: {
    fontSize: s(30),
    marginTop: vs(20),
    fontWeight: "semibold",
    marginStart: s(16),
  },

  paymentMethodsSection: {
    marginTop: vs(10),
  },
  socialHeader: {
    fontSize: s(16),
    fontWeight: "semibold",
    textTransform: "capitalize",
  },
});
