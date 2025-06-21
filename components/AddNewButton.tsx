import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { usePaystack } from "react-native-paystack-webview";
import { s } from "react-native-size-matters";

const AddNewButton = () => {
  const { popup } = usePaystack();

  const payNow = () => {
    popup.checkout({
      email: "kojoa.doe@example.com",

      amount: 20000, // Amount in kobo (20000 kobo = 200 GHS)
      reference: crypto.randomUUID(), // Unique reference for the transaction
      plan: "PLN_htugl5q5b3ne7h7",
      invoice_limit: 2,
      subaccount: "EYRAM HENRY GEBU",
      split_code: "ACCT_ghelqi17445gtar",

      metadata: {
        custom_fields: [
          {
            display_name: "Order ID",
            variable_name: "order_id",
            value: "OID1934",
          },
        ],
      },
      onSuccess: (res) => console.log("Success:", res),
      onCancel: () => console.log("User cancelled"),
      onLoad: (res) => console.log("WebView Loaded:", res),
      onError: (err) => console.log("WebView Error:", err),
    });
  };

  return (
    <TouchableOpacity onPress={payNow} style={styles.button}>
      <Entypo name="plus" size={s(20)} color="#FFF" />
      <Text style={styles.buttonText}>Make Payment</Text>
    </TouchableOpacity>
  );
};

export default AddNewButton;

const styles = StyleSheet.create({
  button: {
    padding: s(16),
    borderRadius: s(8),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FF7622",
    color: "#FFF",
    gap: s(8),
  },
  buttonText: {
    fontSize: s(16),
    color: "#FFF",
    fontWeight: "500",
  },
});
