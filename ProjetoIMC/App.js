
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title/'
import Main from './src/components/main/'

export default function App() {
  return (
    <View style={styles.container}>
      <Title style={styles.titulo}/> 
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    backgroundColor: '#aaa888',
    padding: 10,
    borderRadius: 3
  },
});
