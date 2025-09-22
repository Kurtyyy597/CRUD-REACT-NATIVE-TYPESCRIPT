import react, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

type User = {
    id: number;
    name: string
    section: String 
    age: number;
};

export default function SpreadDynamicRemoving() {
    const [users, setUsers] = useState<User[]>([
        {id: 1, name: "Kurt Allen", section: "BSIT-41", age: 21}
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
                <View> 
                    <Text> {index + 1}. {item.name} - {item.age} - {item.section} </Text>
                    <Button 
                    title='Remove Item'
                    onPress={() => removeItem(item.id)}/>
                    </View>
            )}
            ListHeaderComponent={<Text> This is Users </Text>}
            ListEmptyComponent={() => <Text> No Data Yet </Text>}/>
        </View>
    )
    
}