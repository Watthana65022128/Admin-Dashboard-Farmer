export default function LoadingSpinner({ size = 'default' }) {
  const sizeClasses = {
    small: 'w-4 h-4',
    default: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className={`border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin ${sizeClasses[size]}`}></div>
    </div>
  );
}