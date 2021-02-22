import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { useTheme } from "../context/ThemeContext";

const useName = (initialValue) => {
  const [name, setName] = useState(initialValue);
  useEffect(() => {
    console.log(name);
  }, [name]);
  return { name, setName };
};

const useSurname = (initialValue) => {
  const [surname, setSurname] = useState(initialValue);
  useEffect(() => {
    console.log(surname);
  }, [surname]);
  return { surname, setSurname };
};

const useMiddleName = (initialValue) => {
  const [middleName, setMiddleName] = useState(initialValue);
  useEffect(() => {
    console.log(middleName);
  }, [middleName]);
  return { middleName, setMiddleName };
};

const useDateOfBirth = (initialValue) => {
  const [dateOfBirth, setDateOfBirth] = useState(initialValue);
  useEffect(() => {
    console.log(dateOfBirth);
  }, [dateOfBirth]);
  return { dateOfBirth, setDateOfBirth };
};

const useStreet = (initialValue) => {
  const [street, setStreet] = useState(initialValue);
  useEffect(() => {
    console.log(street);
  }, [street]);
  return { street, setStreet };
};

const useHome = (initialValue) => {
  const [home, setHome] = useState(initialValue);
  useEffect(() => {
    console.log(home);
  }, [home]);
  return { home, setHome };
};

const useApartment = (initialValue) => {
  const [aparment, setApartment] = useState(initialValue);
  useEffect(() => {
    console.log(aparment);
  }, [aparment]);
  return { aparment, setApartment };
};

const MainScreen = () => {
  const { theme, setLight, setDark, isDark } = useTheme();
  const { name, setName } = useName("");
  const { surname, setSurname } = useSurname("");
  const { middleName, setMiddleName } = useMiddleName("");
  const { dateOfBirth, setDateOfBirth } = useDateOfBirth("");
  const { street, setStreet } = useStreet("");
  const { home, setHome } = useHome("");
  const { apartment, setApartment } = useApartment("");
  const toggleSwitch = (value) => {
    console.log(value);
    if (value) {
      setDark();
    } else {
      setLight();
    }
  };
  return (
    <View style={{
      backgroundColor: isDark ? "#1c1f2a" : "#ffffff",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => toggleSwitch(value)}
        value={isDark}
      />
      <Text style={isDark ? { color: "white" } : { color: "black" }}>Name</Text>
      <TextInput onChangeText={(name) => setName(name)} />
      <Text style={isDark ? { color: "white" } : { color: "black" }}>Surname</Text>
      <TextInput onChangeText={(surname) => setSurname(surname)} />
      <Text style={isDark ? { color: "white" } : { color: "black" }}> Middle name</Text>
      <TextInput onChangeText={(middleName) => setMiddleName(middleName)} />
      <Text style={isDark ? { color: "white" } : { color: "black" }}>Date of birth</Text>
      <TextInput keyboardType="numeric" onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)} />
      <Text style={isDark ? { color: "white" } : { color: "black" }}>Street</Text>
      <TextInput onChangeText={(street) => setStreet(street)} />
      <Text style={isDark ? { color: "white" } : { color: "black" }}>Home</Text>
      <TextInput onChangeText={(home) => setHome(home)} />
      <Text style={isDark ? { color: "white" } : { color: "black" }}>Apartment</Text>
      <TextInput onChangeText={(apartment) => setApartment(apartment)} />
    </View>
  );
};
export default MainScreen;
