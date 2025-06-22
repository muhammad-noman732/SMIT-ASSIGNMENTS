import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image 
} from 'react-native';
import { Search, Users, UserPlus } from 'lucide-react-native';

export default function FriendsScreen() {
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFriends() {
      const res1 = await fetch('https://dummyjson.com/users?limit=5');
      const data1 = await res1.json();
      setFriendRequests(data1.users.map((u: any) => ({
        id: u.id,
        name: u.firstName + ' ' + u.lastName,
        avatar: u.image,
        mutualFriends: Math.floor(Math.random() * 20),
      })));
      const res2 = await fetch('https://dummyjson.com/users?limit=8&skip=5');
      const data2 = await res2.json();
      setSuggestions(data2.users.map((u: any) => ({
        id: u.id,
        name: u.firstName + ' ' + u.lastName,
        avatar: u.image,
        mutualFriends: Math.floor(Math.random() * 20),
      })));
      setLoading(false);
    }
    fetchFriends();
  }, []);

  if (loading) {
    return <Text style={{margin: 16}}>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Friends</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Search size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Friend Requests</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          
          {friendRequests.map((request) => (
            <View key={request.id} style={styles.requestCard}>
              <Image source={{ uri: request.avatar }} style={styles.avatar} />
              <View style={styles.requestInfo}>
                <Text style={styles.requestName}>{request.name}</Text>
                <Text style={styles.mutualFriends}>{request.mutualFriends} mutual friends</Text>
                <View style={styles.requestActions}>
                  <TouchableOpacity style={styles.confirmButton}>
                    <Text style={styles.confirmText}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.deleteText}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>People You May Know</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          
          {suggestions.map((suggestion) => (
            <View key={suggestion.id} style={styles.suggestionCard}>
              <Image source={{ uri: suggestion.avatar }} style={styles.avatar} />
              <View style={styles.suggestionInfo}>
                <Text style={styles.suggestionName}>{suggestion.name}</Text>
                <Text style={styles.mutualFriends}>{suggestion.mutualFriends} mutual friends</Text>
                <TouchableOpacity style={styles.addFriendButton}>
                  <UserPlus size={16} color="#1877F2" />
                  <Text style={styles.addFriendText}>Add Friend</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  searchButton: {
    padding: 8,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  seeAll: {
    fontSize: 16,
    color: '#1877F2',
    fontWeight: '600',
  },
  requestCard: {
    flexDirection: 'row',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
    marginBottom: 16,
  },
  suggestionCard: {
    flexDirection: 'row',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  requestInfo: {
    flex: 1,
  },
  suggestionInfo: {
    flex: 1,
  },
  requestName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginBottom: 4,
  },
  suggestionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1E21',
    marginBottom: 4,
  },
  mutualFriends: {
    fontSize: 14,
    color: '#65676B',
    marginBottom: 12,
  },
  requestActions: {
    flexDirection: 'row',
    gap: 8,
  },
  confirmButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flex: 1,
  },
  deleteButton: {
    backgroundColor: '#E4E6EA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flex: 1,
  },
  confirmText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  deleteText: {
    color: '#1C1E21',
    fontWeight: '600',
    textAlign: 'center',
  },
  addFriendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(24, 119, 242, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
    gap: 6,
  },
  addFriendText: {
    color: '#1877F2',
    fontWeight: '600',
  },
});