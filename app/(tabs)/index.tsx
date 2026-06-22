import ThemedText from '@/components/ThemedText';
import Colors from '@/constants/colors';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <ThemedText variant="labelMedium" family='secondary' weight="bold" color={Colors.primary}>124</ThemedText>
      <ThemedText variant="labelMedium" weight="bold" color={Colors.primary}>124</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
