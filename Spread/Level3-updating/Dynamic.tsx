import React, {useState} from 'react';
import {View, Text, Button, TextInput, FlatList, Alert} from 'react-native';

type Profile = {
    id: number;
    name: string;
    age: number; 
    section: string;
    birthday: string;
};

export default function DynamicUpdating() {
    const [users, setUsers] = useState<Profile[]>([
        {id:1, name: "Kurt Marquez", age: 21, section: "BSIT-41", birthday:"BSIT-41"},
        {id:2, name: "Iya Papasin", age: 21, section: "BSIT-42", birthday:"BSIT-41"},
        {id:3, name: "Justine Delacruz", age: 22, section: "BSIT-42", birthday:"BSIT-41"},
        {id:4, name: "Nathaniel Abril", age: 23, section: "BSIT-43", birthday:"BSIT-41"},
        {id:5, name: "Alvin Vinarao", age: 23, section: "BSIT-42", birthday:"BSIT-41"},
    ]);
    const [newId, setNewId] = useState<number | null > (null);
    const [newname, setNewName] = useState<string>("");
    const [newAge, setNewAge] = useState<string>("");
    const [newSection, setNewSection] = useState<string>("");
    const [newBirthday, setNewBirthday] = useState<string>("");

    const startEdit = (id: number, current: Profile) => {
        setNewId(id);
        setNewName(current.name);
        setNewBirthday(current.birthday);
        setNewAge(current.age.toString());
        setNewSection(current.section);
    };

    const savedEdit =() => {
        if (!newname.trim() || !newAge.trim() || !newSection.trim() || !newBirthday.trim()) {
            Alert.alert(`Please Input Other Fields!`);
            return;
        };

        setUsers(users.map((user) => user.id === newId ? {...user, name:newname, age: Number(newAge), section: newSection, birthday: newBirthday} : user
    ));
    
    setNewId(null);
    setNewName("");
    setNewAge("");
    setNewBirthday("");
    setNewSection("");
    }

    return (
        <View>
            <View>
                <FlatList 
                data={users}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text> No Data Yet! </Text>}
                ListHeaderComponent={<Text> Your information </Text>}
                renderItem={({item, index}) => (
                    <View>
                        <Text> {index + 1}. Name: {item.name}, Age: {item.age}, Section: {item.section}, Birthday {item.birthday} </Text>
                        <Button title='Edit' onPress={() => startEdit(item.id, item)}/>
                        </View>
                )}/>

                {newId !== null && (
                    <View>
                        <TextInput placeholder='Type your new name' value={newname} onChangeText={setNewName}/>
                        <TextInput placeholder='Type your new age' value={newAge} onChangeText={setNewAge} keyboardType='numeric'/>
                        <TextInput placeholder='Type your new birthday' value={newBirthday} onChangeText={setNewBirthday}/>
                        <TextInput placeholder='type your new section' value={newSection} onChangeText={setNewSection}/>
                        <Button title='Click to save' onPress={savedEdit}/>
                        </View>
                )}
               
            </View>
        </View>
    )
    
}