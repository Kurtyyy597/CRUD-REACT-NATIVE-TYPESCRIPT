import react, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

type User = {
    id: number;
    name: string;
    age: number;
};

export default function SpreadLevel2Basics() {
    const [users, setUsers] = useState<User[]>([
        {id: 1, name: "Kurt Allen", age: 21},
        {id: 2, name: "Iya Claire Papasin", age: 21},
        {id: 3, name: "Nathaniel Abril", age: 21},
        {id: 4, name: "Zydane Battad", age: 21},
    ]);

    const removeItem = (id: number) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <View>
            <FlatList 
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
                <Text> {index + 1}. {item.name} - {item.age}</Text>
            )}
            ItemSeparatorComponent={() => <Text> ------------------------------------------------------------------- </Text>}
            ListEmptyComponent={<Text> No Data</Text>}
            ListHeaderComponent={<Text> This is the header </Text>}/>

            <Button
            title='Click to remove'
            onPress={()=>removeItem(user.id)}/>
            
        </View>
    )
}