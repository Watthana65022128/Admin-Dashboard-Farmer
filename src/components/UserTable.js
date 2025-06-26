import { useState } from 'react';
import { Search, UserCheck, UserX, Crown, User, Ban, CheckCircle } from 'lucide-react';
import BanModal from './BanModal';

export default function UserTable({ users, onBanUser, onUnbanUser }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showBanModal, setShowBanModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBanClick = (user) => {
    setSelectedUser(user);
    setShowBanModal(true);
  };

  const handleBanConfirm = async (reason) => {
    try {
      await onBanUser(selectedUser.id, reason);
      setShowBanModal(false);
      setSelectedUser(null);
    } catch (error) {
      // Error handled in parent component
    }
  };

  const handleUnbanClick = async (userId) => {
    if (confirm('คุณต้องการยกเลิกการระงับผู้ใช้นี้หรือไม่?')) {
      await onUnbanUser(userId);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border border-agriculture-200">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-agriculture-200">
          <div className="flex flex-col space-y-4 sm:space-y-3 md:flex-row md:justify-between md:items-center md:space-y-0">
            <h3 className="text-lg sm:text-xl font-semibold text-agriculture-800 flex items-center">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-agriculture-600 flex-shrink-0" />
              <span className="truncate">จัดการผู้ใช้งาน</span>
            </h3>
            <div className="relative w-full md:w-80 lg:w-96">
              <Search className="w-4 h-4 text-agriculture-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="ค้นหาผู้ใช้..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm sm:text-base border border-agriculture-300 rounded-lg focus:ring-2 focus:ring-agriculture-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="bg-agriculture-50">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-agriculture-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-agriculture-500 uppercase tracking-wider">
                  ผู้ใช้
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-agriculture-500 uppercase tracking-wider hidden sm:table-cell">
                  อีเมล
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-agriculture-500 uppercase tracking-wider">
                  สถานะ
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-agriculture-500 uppercase tracking-wider hidden md:table-cell">
                  ประเภท
                </th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-agriculture-500 uppercase tracking-wider">
                  การจัดการ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-agriculture-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-agriculture-50">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-agriculture-900">
                    {user.id}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-agriculture-500 flex items-center justify-center">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                      <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                        <div className="text-xs sm:text-sm font-medium text-agriculture-900 truncate">
                          {user.username}
                        </div>
                        <div className="text-xs text-agriculture-500 truncate sm:hidden">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-agriculture-900 hidden sm:table-cell">
                    <div className="max-w-xs truncate">{user.email}</div>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      user.isBanned
                        ? 'bg-red-100 text-red-800'
                        : 'bg-agriculture-100 text-agriculture-800'
                    }`}>
                      {user.isBanned ? (
                        <>
                          <UserX className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="hidden sm:inline">ถูกระงับ</span>
                        </>
                      ) : (
                        <>
                          <UserCheck className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="hidden sm:inline">ปกติ</span>
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap hidden md:table-cell">
                    {user.isAdmin ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-earth-100 text-earth-800">
                        <Crown className="w-3 h-3 mr-1" />
                        Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-agriculture-100 text-agriculture-800">
                        <User className="w-3 h-3 mr-1" />
                        User
                      </span>
                    )}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-agriculture-500">
                    {!user.isAdmin && (
                      <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
                        {user.isBanned ? (
                          <button
                            onClick={() => handleUnbanClick(user.id)}
                            className="inline-flex items-center justify-center px-2 sm:px-3 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-agriculture-600 hover:bg-agriculture-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agriculture-500"
                          >
                            <CheckCircle className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="hidden sm:inline">ยกเลิกระงับ</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleBanClick(user)}
                            className="inline-flex items-center justify-center px-2 sm:px-3 py-1 border border-transparent text-xs leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            <Ban className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="hidden sm:inline">ระงับ</span>
                          </button>
                        )}
                      </div>
                    )}
                    {user.isAdmin && (
                      <span className="text-agriculture-400 text-xs">ไม่สามารถจัดการได้</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <UserX className="w-12 h-12 text-agriculture-400 mx-auto mb-4" />
            <p className="text-agriculture-500">ไม่พบผู้ใช้ที่ค้นหา</p>
          </div>
        )}
      </div>

      {/* Ban Modal */}
      <BanModal
        isOpen={showBanModal}
        onClose={() => setShowBanModal(false)}
        onConfirm={handleBanConfirm}
        userName={selectedUser?.username}
      />
    </>
  );
}