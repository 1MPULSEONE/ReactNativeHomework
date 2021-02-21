import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";

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

const App = () => {
  const { name, setName } = useName("");
  const { surname, setSurname } = useSurname("");
  const { middleName, setMiddleName } = useMiddleName("");
  const { dateOfBirth, setDateOfBirth } = useDateOfBirth("");
  const { street, setStreet } = useStreet("");
  const { home, setHome } = useHome("");
  const { apartment, setApartment } = useApartment("");
  return (
    <View>
      <Text>Name</Text>
      <TextInput onChangeText={(name) => setName(name)} />
      <Text>Surname</Text>
      <TextInput onChangeText={(surname) => setSurname(surname)} />
      <Text>Middle name</Text>
      <TextInput onChangeText={(middleName) => setMiddleName(middleName)} />
      <Text>Date of birth</Text>
      <TextInput keyboardType="numeric" onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)} />
      <Text>Street</Text>
      <TextInput onChangeText={(street) => setStreet(street)} />
      <Text>Home</Text>
      <TextInput onChangeText={(home) => setHome(home)} />
      <Text>Apartment</Text>
      <TextInput onChangeText={(apartment) => setApartment(apartment)} />
    </View>
  );
};
export default App;
