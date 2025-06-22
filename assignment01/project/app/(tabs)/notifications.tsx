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
import { Bell, Settings } from 'lucide-react-native';

const notificationActions = [
  { type: 'like', action: 'liked your photo' },
  { type: 'comment', action: 'commented on your post' },
  { type: 'friend_request', action: 'sent you a friend request' },
  { type: 'tag', action: 'tagged you in a post' },
  { type: 'birthday', action: 'has a birthday today' },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'like':
      return '❤️';
    case 'comment':
      return '💬';
    case 'friend_request':
      return '👥';
    case 'tag':
      return '🏷️';
    case 'birthday':
      return '🎂';
    default:
      return '📱';
  }
};

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      const res = await fetch('https://dummyjson.com/users?limit=5');
      const data = await res.json();
      const notifs = data.users.map((u: any, i: number) => {
        const action = notificationActions[Math.floor(Math.random() * notificationActions.length)];
        return {
          id: u.id,
          type: action.type,
          avatar: u.image,
          name: u.firstName + ' ' + u.lastName,
          action: action.action,
          time: `${Math.floor(Math.random() * 24)}h`,
          isNew: i < 2,
        };
      });
      setNotifications(notifs);
      setLoading(false);
    }
    fetchNotifications();
  }, []);

  if (loading) {
    return <Text style={{margin: 16}}>Loading...</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#1877F2" />
        </TouchableOpacity>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>New</Text>
          {notifications.filter(n => n.isNew).map((notification) => (
            <TouchableOpacity key={notification.id} style={[styles.notificationCard, styles.newNotification]}>
              <View style={styles.avatarContainer}>
                <Image source={{ uri: notification.avatar }} style={styles.avatar} />
                <View style={styles.iconBadge}>
                  <Text style={styles.iconEmoji}>{getNotificationIcon(notification.type)}</Text>
                </View>
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>
                  <Text style={styles.notificationName}>{notification.name}</Text>
                  {' '}{notification.action}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
              <View style={styles.newDot} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earlier</Text>
          {notifications.filter(n => !n.isNew).map((notification) => (
            <TouchableOpacity key={notification.id} style={styles.notificationCard}>
              <View style={styles.avatarContainer}>
                <Image source={{ uri: notification.avatar }} style={styles.avatar} />
                <View style={styles.iconBadge}>
                  <Text style={styles.iconEmoji}>{getNotificationIcon(notification.type)}</Text>
                </View>
              </View>
              <View style={styles.notificationContent}>
                <Text style={styles.notificationText}>
                  <Text style={styles.notificationName}>{notification.name}</Text>
                  {' '}{notification.action}
                </Text>
                <Text style={styles.notificationTime}>{notification.time}</Text>
              </View>
            </TouchableOpacity>
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
  settingsButton: {
    padding: 8,
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1E21',
    paddingVertical: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EA',
  },
  newNotification: {
    backgroundColor: 'rgba(24, 119, 242, 0.05)',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  iconBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  iconEmoji: {
    fontSize: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: '#1C1E21',
    lineHeight: 20,
  },
  notificationName: {
    fontWeight: 'bold',
  },
  notificationTime: {
    fontSize: 14,
    color: '#65676B',
    marginTop: 4,
  },
  newDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1877F2',
    marginLeft: 12,
  },
});