import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';

type Profile = {
    id: number;
    name: string;
    age: number;
    birthday: string;
};

export default function Level3Updating() {
    const [user, setUser] = useState<Profile[]>([
        {id: 1, name: "Avatar", age: 21, birthday: "June 10, 2004"}
    ]);

    const editItem = (id: number) => {
        setUser(user.map((u) => u.id === id ? {...u, name: "Kurt Marquez", age: 27, birthday: "JUNE 19, 2003"} : u
     ));
     
    };
    return (
        <View>
            <FlatList
            data={user}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Text> No Data Exist! </Text>}
            ListHeaderComponent={<Text> This is your information </Text>}
            renderItem={({item, index}) => (
                <View>
                    <Text> {index + 1}. {item.name}, Age: {item.age}, Birthday: {item.birthday} </Text>
                    <Button title='edit' onPress={()=>editItem(1)}/>
                        </View>
            )}/>
        </View>
    )
}