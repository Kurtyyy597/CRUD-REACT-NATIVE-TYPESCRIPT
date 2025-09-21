import react from 'react';
import {View, ScrollView, Text,} from 'react-native';

export default function ScrollViewBasics() {

    return (
        <ScrollView>
            <View>
                <Text> Item 1</Text>
            </View>

            <View>
                <Text> Item 2</Text>
            </View>

            <View>
                <Text> Item 3</Text>
            </View>

            <View>
                <Text> Item 4</Text>
            </View>

            <View>
                <Text> Item 5</Text>
            </View>
        </ScrollView>
    )
}