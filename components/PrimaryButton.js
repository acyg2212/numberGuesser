import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!')
    }
    return (
        <View style={styles.buttonOuter}>
            <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.container] : styles.container} onPress={pressHandler} android_ripple={{ color: '#640233' }}>

                <Text style={styles.buttonText}>{children}</Text>

            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    pressed: {
        opacity: .75
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    buttonOuter: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    }
});