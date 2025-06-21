import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { s } from "react-native-size-matters";
import HandIcon from "./icons/HandIcon";
import MasterCardIcon from "./icons/MasterCardIcon";
import PaypalIcon from "./icons/PaypalIcon";
import VisaIcon from "./icons/VisaIcon";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentList = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<
    string | null
  >(null);
  const paymentMethods = [
    {
      id: 1,
      title: "Cash",
      icon: <HandIcon />,
    },
    {
      id: 2,
      title: "Visa",
      icon: <VisaIcon />,
    },
    {
      id: 3,
      title: "MasterCard",
      icon: <MasterCardIcon />,
    },

    {
      id: 4,
      title: "PayPal",
      icon: <PaypalIcon />, // Placeholder icon, replace with actual PayPal icon
    },
  ];
  return (
    <View>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: s(16),
          paddingHorizontal: s(16),
          gap: s(16),
        }}
        renderItem={({ item }) => (
          <PaymentMethodCard
            title={item.title}
            icon={item.icon}
            onPress={() => setSelectedPaymentMethod(item.title)}
            isSelected={selectedPaymentMethod === item.title} // Example of selecting Visa card
          />
        )}
      />
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
