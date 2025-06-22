import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image 
} from 'react-native';
import { Users, Calendar, Clock, Star, Bookmark, Settings, CircleHelp as HelpCircle, Shield, LogOut, ChevronRight } from 'lucide-react-native';

const menuItems = [
  {
    id: '1',
    title: 'Friends',
    icon: Users,
    color: '#1877F2',
  },
  {
    id: '2',
    title: 'Events',
    icon: Calendar,
    color: '#FF6B6B',
  },
  {
    id: '3',
    title: 'Memories',
    icon: Clock,
    color: '#4ECDC4',
  },
  {
    id: '4',
    title: 'Saved',
    icon: Bookmark,
    color: '#45B7D1',
  },
  {
    id: '5',
    title: 'Pages',
    icon: Star,
    color: '#FFA726',
  },
];

const settingsItems = [
  {
    id: '1',
    title: 'Settings & Privacy',
    icon: Settings,
  },
  {
    id: '2',
    title: 'Help & Support',
    icon: HelpCircle,
  },
  {
    id: '3',
    title: 'Privacy Shortcuts',
    icon: Shield,
  },
];

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <TouchableOpacity style={styles.profileCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150' }} 
              style={styles.profileAvatar} 
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>John Smith</Text>
              <Text style={styles.viewProfile}>See your profile</Text>
            </View>
            <ChevronRight size={20} color="#65676B" />
          </TouchableOpacity>
        </View>

        {/* Main Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity key={item.id} style={styles.menuItem}>
                <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                  <IconComponent size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.menuText}>{item.title}</Text>
                <ChevronRight size={20} color="#65676B" />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Settings Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.sectionTitle}>Settings & Support</Text>
          {settingsItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity key={item.id} style={styles.settingsItem}>
                <View style={styles.settingsIconContainer}>
                  <IconComponent size={20} color="#65676B" />
                </View>
                <Text style={styles.settingsText}>{item.title}</Text>
                <ChevronRight size={20} color="#65676B" />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Logout Section */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton}>
            <View style={styles.logoutIconContainer}>
              <LogOut size={20} color="#E74C3C" />
            </View>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Facebook © 2024</Text>
          <Text style={styles.footerVersion}>Version 1.0.0</Text>
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
  profileSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  viewProfile: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 4,
  },
  menuSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#1C1E21',
    fontWeight: '500',
  },
  settingsSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1E21',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  settingsIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingsText: {
    flex: 1,
    fontSize: 16,
    color: '#1C1E21',
    fontWeight: '500',
  },
  logoutSection: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingVertical: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoutIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(231, 76, 60, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoutText: {
    flex: 1,
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: '500',
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#65676B',
  },
  footerVersion: {
    fontSize: 12,
    color: '#65676B',
    marginTop: 4,
  },
});