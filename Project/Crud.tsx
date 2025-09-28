import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Image } from 'react-native';
import uuid from 'react-native-uuid';

interface Profile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthday: string;
  avatar: string; 
}

export default function App() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [birthday, setBirthday] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill at least Name, Email, and Phone');
      return;
    }

    const profile: Profile = {
      id: editingId || uuid.v4().toString(), 
      name,
      email,
      phone,
      address,
      birthday,
      avatar: 'https://via.placeholder.com/60', 
    };

    if (editingId) {
      setProfiles(profiles.map(p => (p.id === editingId ? profile : p)));
      setEditingId(null);
    } else {
      setProfiles([...profiles, profile]);
    }

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setBirthday('');
  };

  const handleEdit = (profile: Profile) => {
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
    setAddress(profile.address);
    setBirthday(profile.birthday);
    setEditingId(profile.id);
  };

  const handleDelete = (id: string) => {
    Alert.alert('Delete', 'Are you sure?', [
      { text: 'Cancel' },
      { text: 'OK', onPress: () => setProfiles(profiles.filter(p => p.id !== id)) },
    ]);
  };

  const renderItem = ({ item }: { item: Profile }) => (
    <View style={[styles.card, { backgroundColor: '#e0f7fa' }]}>
      <View style={styles.cardHeader}>
        <Image
          source={{ uri: item.avatar || 'https://via.placeholder.com/60' }}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 10, flexShrink: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.phone}</Text>
        </View>
      </View>
      {item.address ? <Text style={styles.extra}>Address: {item.address}</Text> : null}
      {item.birthday ? <Text style={styles.extra}>Birthday: {item.birthday}</Text> : null}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit(item)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#f88' }]} onPress={() => handleDelete(item.id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Manager</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Address" value={address} onChangeText={setAddress} style={styles.input} />
      <TextInput placeholder="Birthday (YYYY-MM-DD)" value={birthday} onChangeText={setBirthday} style={styles.input} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{editingId ? 'Update' : 'Add'} Profile</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginTop: 20 }}
        data={profiles}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No profiles yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#00796b' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 10 },
  saveButton: { backgroundColor: '#00796b', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  card: { padding: 15, borderRadius: 12, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 5 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#ccc' },
  name: { fontWeight: 'bold', fontSize: 18 },
  extra: { marginLeft: 70, color: '#555', marginTop: 2 },
  actions: { flexDirection: 'row', marginTop: 10 },
  button: { marginRight: 10, padding: 8, backgroundColor: '#ddd', borderRadius: 6 },
});
