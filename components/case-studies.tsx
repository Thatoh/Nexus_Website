export function CaseStudies() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-black text-2xl font-semibold mb-8">Case Studies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Optimized Infrastructure Card */}
          <div className="relative overflow-hidden rounded-lg bg-gray-800 h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: `url('/images/resources/cs-1.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end">
              <h3 className="text-white text-lg font-medium mb-2">
                Optimized
                <br />
                Infrastructure
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-cyan-400 text-3xl font-bold">+35%</span>
              </div>
              <p className="text-gray-300 text-sm">Efficiency</p>
            </div>
          </div>

          {/* Streamlined Operations Card */}
          <div className="relative overflow-hidden rounded-lg bg-gray-800 h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage: `url('/images/resources/cs-2.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end">
              <h3 className="text-white text-lg font-medium mb-2">
                Streamlined
                <br />
                Operations
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-yellow-400 text-3xl font-bold">1.5M</span>
              </div>
              <p className="text-gray-300 text-sm">Users</p>
            </div>
          </div>

          {/* Enhanced Security Posture Card */}
          <div className="relative overflow-hidden rounded-lg bg-gray-800 h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url('/images/resources/cs-3.jpg')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            <div className="relative h-full p-6 flex flex-col justify-end">
              <h3 className="text-white text-lg font-medium mb-2">
                Enhanced
                <br />
                Security Posture
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-red-400 text-3xl font-bold">-50%</span>
              </div>
              <p className="text-gray-300 text-sm">Incidents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
