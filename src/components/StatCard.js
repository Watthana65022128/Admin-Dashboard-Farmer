export default function StatCard({ icon: Icon, title, value, color }) {
  const colorClasses = {
    blue: 'text-agriculture-600 bg-agriculture-100',
    green: 'text-agriculture-700 bg-agriculture-200',
    red: 'text-red-600 bg-red-100',
    yellow: 'text-earth-600 bg-earth-100',
    agriculture: 'text-agriculture-600 bg-agriculture-100',
    earth: 'text-earth-600 bg-earth-100'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-agriculture-200">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-agriculture-600">{title}</p>
          <p className={`text-2xl font-bold ${colorClasses[color].split(' ')[0]}`}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}