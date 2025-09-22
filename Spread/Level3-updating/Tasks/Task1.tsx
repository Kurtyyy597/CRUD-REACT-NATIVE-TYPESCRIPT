import React, { useState } from "react";
import { View, Text, Button, FlatList, Alert, TextInput, StyleSheet } from "react-native";

type Profile = {
  id: number;
  name: string;
  age: number;
  religion: string;
  status: string;
  Contact: {
    Phone: string;
    email: string;
  };
};

export default function Level3Merge() {
  const [users, setUsers] = useState<Profile[]>([
    {
      id: 1,
      name: "Kurt Allen",
      age: 21,
      religion: "Catholic",
      status: "Single",
      Contact: { Phone: "09694828850", email: "kurtmarquez238@gmail.com" },
    },
  ]);

  // Add user fields
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [religion, setReligion] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Edit fields
  const [newId, setNewId] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [newAge, setNewAge] = useState<string>("");
  const [newReligion, setNewReligion] = useState<string>("");
  const [newStatus, setNewStatus] = useState<string>("");
  const [newPhone, setNewPhone] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");

  // ---------------- ADD ----------------
  const addUser = () => {
    if (
      !name.trim() ||
      !age.trim() ||
      !religion.trim() ||
      !status.trim() ||
      !phoneNumber.trim() ||
      !email.trim()
    ) {
      Alert.alert("Input all fields!");
      return;
    }

    const newUser: Profile = {
      id: users.length + 1,
      name,
      age: Number(age),
      religion,
      status,
      Contact: {
        Phone: phoneNumber,
        email,
      },
    };
    setUsers([...users, newUser]);

    // reset
    setName("");
    setAge("");
    setEmail("");
    setPhoneNumber("");
    setReligion("");
    setStatus("");
  };

  // ---------------- REMOVE ----------------
  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // ---------------- LOAD USER FOR EDIT ----------------
  const EditUser = (id: number, current: Profile) => {
    setNewId(id);
    setNewName(current.name);
    setNewAge(current.age.toString());
    setNewReligion(current.religion);
    setNewStatus(current.status);
    setNewPhone(current.Contact.Phone);
    setNewEmail(current.Contact.email);
  };

  // ---------------- SAVE EDIT ----------------
  const saveEdit = () => {
    if (
      !newName.trim() ||
      !newAge.trim() ||
      !newReligion.trim() ||
      !newStatus.trim() ||
      !newPhone.trim() ||
      !newEmail.trim()
    ) {
      Alert.alert("Input all fields!");
      return;
    }

    setUsers(
      users.map((user) =>
        user.id === newId
          ? {
              ...user,
              name: newName,
              age: Number(newAge),
              religion: newReligion,
              status: newStatus,
              Contact: { Phone: newPhone, email: newEmail },
            }
          : user
      )
    );

    // reset edit state
    setNewId(null);
    setNewName("");
    setNewAge("");
    setNewReligion("");
    setNewStatus("");
    setNewPhone("");
    setNewEmail("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>👥 User Manager</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={styles.empty}>No Data Yet!</Text>}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.userText}>
              {index + 1}. {item.name} ({item.age})
            </Text>
            <Text style={styles.details}>
              Religion: {item.religion} | Status: {item.status}
            </Text>
            <Text style={styles.details}>
              📞 {item.Contact.Phone} | ✉️ {item.Contact.email}
            </Text>
            <View style={styles.buttonRow}>
              <Button title="Remove" onPress={() => removeUser(item.id)} />
              <Button title="Edit" onPress={() => EditUser(item.id, item)} />
            </View>
          </View>
        )}
      />

      {newId !== null && (
        <View style={styles.form}>
          <Text style={styles.formTitle}>✏️ Edit User</Text>
          <TextInput style={styles.input} placeholder="Enter name" value={newName} onChangeText={setNewName} />
          <TextInput style={styles.input} placeholder="Enter age" value={newAge} onChangeText={setNewAge} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Enter religion" value={newReligion} onChangeText={setNewReligion} />
          <TextInput style={styles.input} placeholder="Enter email" value={newEmail} onChangeText={setNewEmail} />
          <TextInput style={styles.input} placeholder="Enter phone" value={newPhone} onChangeText={setNewPhone} keyboardType="numeric" />
          <TextInput style={styles.input} placeholder="Enter status" value={newStatus} onChangeText={setNewStatus} />
          <Button title="Save Changes" onPress={saveEdit} />
        </View>
      )}

      <View style={styles.form}>
        <Text style={styles.formTitle}>➕ Add New User</Text>
        <TextInput style={styles.input} placeholder="Enter name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Enter age" value={age} onChangeText={setAge} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Enter religion" value={religion} onChangeText={setReligion} />
        <TextInput style={styles.input} placeholder="Enter email" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Enter phone" value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Enter status" value={status} onChangeText={setStatus} />
        <Button title="Add User" onPress={addUser} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f6f9" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  empty: { textAlign: "center", marginTop: 20, fontSize: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  userText: { fontSize: 18, fontWeight: "600", marginBottom: 5 },
  details: { fontSize: 14, color: "#555" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  form: { marginTop: 20, padding: 15, backgroundColor: "#fff", borderRadius: 10 },
  formTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    backgroundColor: "#fafafa",
  },
});
