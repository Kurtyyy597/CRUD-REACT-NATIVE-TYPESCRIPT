import react, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

type User = {
    id: number;
    name: string;
    section: string;
    age: number
};

export default function SpreadLevel1Task1() {
    const [users, setUsers] = useState<User[]>([
        {id: 1, name: "Kurt Allen", section: "BSIT-41", age: 21},
        {id: 2, name: "Nathaniel Abril", section: "BSIT-43", age: 22},
    ]);

    const addButton = () => {
        const newUser : User = {id: Date.now(), name:"Iya Claire Papasin", section: "BSIT-42", age: 21}
        setUsers([...users, newUser]);
    };

    return (
        <View>
            <View>
                <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item, index}) => (
                    
                    <Text> {index + 1}. {item.name}, Section: {item.section}, Age: {item.age}</Text>
                )}
                ItemSeparatorComponent={() => <Text> ---------------------------------------------------------------- </Text>}/>

                <Button
                title='Click to add'
                onPress={addButton}/>
            </View>
        </View>
    )
}