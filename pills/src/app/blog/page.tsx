
export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="hero bg-base-200 rounded-lg shadow-xl mb-8">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Test DaisyUI</h1>
              <p className="py-6">Halaman ini menampilkan berbagai komponen DaisyUI</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/* Grid of Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Component */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Card Component
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>Ini adalah contoh card component dari DaisyUI.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>

          {/* Alert Component */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Alert Components</h2>
              <div className="alert alert-info mb-2">
                <span>Info alert message</span>
              </div>
              <div className="alert alert-success mb-2">
                <span>Success alert message</span>
              </div>
              <div className="alert alert-warning">
                <span>Warning alert message</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="card bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h2 className="card-title">Button Variations</h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
