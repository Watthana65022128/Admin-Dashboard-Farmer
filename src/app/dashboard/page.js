'use client';

import { useAuth } from '../../hooks/useAuth';
import { useUsers } from '../../hooks/useUsers';
import Layout from '../../components/Layout';
import StatCard from '../../components/StatCard';
import UserTable from '../../components/UserTable';
import LoadingSpinner from '../../components/LoadingSpinner';
import { Users, UserCheck, UserX, Crown } from 'lucide-react';

export default function DashboardPage() {
  const { loading: authLoading } = useAuth();
  const { users, loading: usersLoading, banUser, unbanUser, getStatistics } = useUsers();

  if (authLoading || usersLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  const stats = getStatistics();

  return (
    <Layout>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Users}
          title="ผู้ใช้ทั้งหมด"
          value={stats.totalUsers}
          color="blue"
        />
        <StatCard
          icon={UserCheck}
          title="ผู้ใช้ปกติ"
          value={stats.activeUsers}
          color="green"
        />
        <StatCard
          icon={UserX}
          title="ผู้ใช้ถูกระงับ"
          value={stats.bannedUsers}
          color="red"
        />
        <StatCard
          icon={Crown}
          title="ผู้ดูแลระบบ"
          value={stats.adminUsers}
          color="yellow"
        />
      </div>

      {/* Users Table */}
      <UserTable
        users={users}
        onBanUser={banUser}
        onUnbanUser={unbanUser}
      />
    </Layout>
  );
}