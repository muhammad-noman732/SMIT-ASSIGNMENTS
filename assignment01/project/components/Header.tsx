import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Search, MessageCircle, Bell } from 'lucide-react-native';

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.rightActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Search size={24} color="#1C1E21" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MessageCircle size={24} color="#1C1E21" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <Search size={16} color="#65676B" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Facebook"
          placeholderTextColor="#65676B"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1877F2',
  },
  rightActions: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1C1E21',
  },
});