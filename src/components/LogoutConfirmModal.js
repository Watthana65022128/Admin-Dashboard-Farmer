import { X } from 'lucide-react';

export default function LogoutConfirmModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-agriculture-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-agriculture-800">ยืนยันการออกจากระบบ</h2>
          <button
            onClick={onClose}
            className="text-agriculture-400 hover:text-agriculture-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-agriculture-600 mb-6">
          คุณต้องการออกจากระบบหรือไม่? คุณจะต้องเข้าสู่ระบบใหม่เพื่อใช้งานต่อ
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-agriculture-600 bg-agriculture-50 rounded-lg hover:bg-agriculture-100 transition-colors border border-agriculture-200 font-medium"
          >
            ยกเลิก
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-agriculture-500 text-white rounded-lg hover:bg-agriculture-600 transition-colors font-medium"
          >
            ออกจากระบบ
          </button>
        </div>
      </div>
    </div>
  );
}