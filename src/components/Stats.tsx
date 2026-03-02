const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Availability' },
];

export function Stats() {
  return (
    <section className="py-20 px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl mb-2 text-blue-600 dark:text-blue-500">
                {stat.value}
              </div>
              <div className="text-gray-800 dark:text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
