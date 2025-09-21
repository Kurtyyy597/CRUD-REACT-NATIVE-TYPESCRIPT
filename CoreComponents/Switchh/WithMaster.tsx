import React, {useState} from 'react';
import {View, Text,  Switch} from 'react-native';

export default function SwitchwithMaster() {
    const [master, setMaster] = useState<boolean>(false);
    const [wifi, setWifi] = useState<boolean>(false);
    const [bluetooth, setBluetooth] = useState<boolean>(false);

    return (
        <View>
            <View>
                <Text> This is for master </Text>
                <Text> is master on? {master ? "ON" : "OFF"} </Text>
                <Switch
                value={master}
                onValueChange={() => setMaster(!master)}
                trackColor={{true: "blue", false: "Red"}}
                thumbColor={master ? "blue" : "red"}/>
            </View>

            <View>
                <Text> This is for Wifi and Bluetooth Area! </Text>
                <Text> is wifi on? {wifi ? "ON" : "OFF"} </Text>
                <Switch
                value={wifi}
                onValueChange={() => setWifi(!wifi)}
                trackColor={{true: "blue", false: "red"}}
                thumbColor={wifi ? "blue" : "red"}
                disabled={!master}/>


                <Text> is Bluetooth on? {bluetooth ? "ON" : "OFF"} </Text>
                <Switch
                value={bluetooth}
                onValueChange={() => setBluetooth(!bluetooth)}
                trackColor={{true: "blue", false: "red"}}
                thumbColor={bluetooth ? "blue" : "red"}
                disabled={!master}/>
            </View>

            <View>
                <Text> Summary: Master: {master ? "ON" : "OFF"}, 
                    Wifi: {wifi ? "ON" : "OFF"}, Bluetooth: {bluetooth ? "ON" : "OFF"} </Text>
            </View>
        </View>
    )
}