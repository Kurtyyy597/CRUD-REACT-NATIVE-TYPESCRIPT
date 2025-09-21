import react, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native'

type User = {
    id: number;
    name: string;
    age: number;
    section: string; 
    religion: string;
};

export default function SpreadLevel1Adding() {
    const [users, setUsers] = useState<User[]>([
        {id: 1, name: "Kurt Allen", age: 21, section: "BSIT-41", religion:"Catholic"}
    ])

    const addButton = () => {
        const newUser: User = {id: users.length+1, name: "Iya Claire Papasin", age:34, section: "BSIT-42", religion:"Catholic"}
        setUsers([...users, newUser]);
    };

    return (
        <View>
            <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
                <Text> {index + 1}. {item.name}, Age: {item.age}, Section: {item.section}, Religion: {item.religion}</Text>
            )}
            ItemSeparatorComponent={() => <Text> --------------------------------------------------------------------------------- </Text>}/>

            <Button
            title='Click to add static user'
            onPress={addButton}/>
        </View>
    )
}