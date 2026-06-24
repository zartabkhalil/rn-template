import ThemedButton from '@/components/ThemedButton';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import Colors from '@/constants/colors';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

  return (
    <ThemedView>

      <Text>Home</Text>
      <ThemedButton label='Sign In' />
      <ThemedText variant="labelMedium" family='secondary' weight="bold" >Primary Font</ThemedText>
      <ThemedText variant="labelMedium" weight="bold" >Second Font</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
