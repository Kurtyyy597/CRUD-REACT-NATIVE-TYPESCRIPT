import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

type User = {
  id: number;
  name: string;
  age: number;
  religion: string;
};

export default function FlatListBasics() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'Kurt Marquez', age: 21, religion: 'Catholic' },
    { id: 2, name: 'Nathaniel Abril', age: 25, religion: 'Catholic' },
    { id: 3, name: 'Iya Claire Papasin', age: 21, religion: 'Catholic' },
    { id: 4, name: 'Gerald Mariscotes', age: 21, religion: 'Catholic' },
    { id: 5, name: 'Rio Magalona', age: 21, religion: 'Catholic' },
  ]);

  return (
    <FlatList<User>
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <View>
          <Text>
            {index + 1}. Name: {item.name}, age: {item.age}, Religion: {item.religion}
          </Text>
        </View>
      )}
      ListHeaderComponent= { <Text> Header Component </Text> }
      ListEmptyComponent={<Text> End of FlatList playground</Text>}
      ItemSeparatorComponent={() => <Text> ---------------------- </Text>}
    />
  );
}
