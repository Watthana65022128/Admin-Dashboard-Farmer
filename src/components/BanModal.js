import { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export default function BanModal({ isOpen, onClose, onConfirm, userName }) {
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reason.trim()) return;

    setLoading(true);
    try {
      await onConfirm(reason);
      setReason('');
    } catch (error) {
      // Error handled in parent
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-sm sm:max-w-md w-full mx-2 sm:mx-0 border border-agriculture-200">
        <div className="p-4 sm:p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center flex-1 min-w-0 mr-2">
              <div className="p-2 bg-red-100 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-agriculture-900 truncate">
                ระงับการใช้งาน: {userName}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-agriculture-400 hover:text-agriculture-600 flex-shrink-0 p-1"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-xs sm:text-sm font-medium text-agriculture-700 mb-2">
                เหตุผลในการระงับ
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                rows={3}
                className="w-full px-3 py-2 text-sm border border-agriculture-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none"
                placeholder="กรุณาระบุเหตุผลในการระงับการใช้งาน..."
              />
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 text-sm border border-agriculture-300 text-agriculture-700 rounded-lg hover:bg-agriculture-50 focus:ring-2 focus:ring-agriculture-500 focus:ring-offset-2 order-2 sm:order-1"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                disabled={loading || !reason.trim()}
                className="flex-1 px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center order-1 sm:order-2"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : null}
                <span className="truncate">{loading ? 'กำลังระงับ...' : 'ยืนยันการระงับ'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}