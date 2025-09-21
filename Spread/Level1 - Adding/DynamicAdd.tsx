import react, {useState} from 'react';
import {View, Text, Button, FlatList, TextInput, Alert} from 'react-native';

type User = {
    id: number;
    name: string;
    section: string;
    age: number;
};

export default function SpreadDynamicAdding() {
    const [users, setUsers] = useState<User[]>([
        {id: 1, name: "Kurt Allen", section:"BSIT-41", age: 21}
    ]);

    const [name, setName] = useState<string>("");
    const [section, setSection] = useState<string>("");
    const [age, setAge] = useState<string>("");

    const addDynamic = () => {
        if (!name.trim() || !section.trim() || !age.trim()){
            Alert.alert(`Please Input valid Information!`)
            return;
        };

        const newUser : User = {
            id: Date.now(),
            name,
            section,
            age: Number(age)
        };
        setUsers([...users, newUser]);
        setSection("");
        setName("")
        setAge("");
    };

    return (
        <View>
            <View>
                <TextInput
                placeholder='Type your name'
                value={name}
                onChangeText={setName}/>

                <TextInput 
                placeholder='Type your section'
                value={section}
                onChangeText={setSection}/>

                <TextInput 
                placeholder='What is your age?'
                value={age}
                onChangeText={setAge}
                keyboardType='numeric'/>

                <Button 
                title='Click to add dynamically'
                onPress={addDynamic}/>

                <FlatList 
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => (
                    <Text> {index + 1}. {item.name}, Age: {item.age}, Section: {item.section}, </Text>
                )}
                ItemSeparatorComponent={() => <Text> -------------------------------------------------------------------------</Text>}
                ListEmptyComponent={() => <Text> No users yet </Text>}/>
            </View>
        </View>
    )
}