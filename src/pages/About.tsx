export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a passionate team dedicated to creating amazing web experiences. Our mission is to
            deliver high-quality solutions that make a difference.
          </p>
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Team collaboration"
              className="rounded-xl shadow-xl ring-1 ring-gray-400/10"
            />
          </div>
          <div className="mt-10 max-w-xl">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Values</h3>
            <dl className="mt-6 max-w-xl space-y-8 text-base leading-7 text-gray-600">
              <div>
                <dt className="font-semibold text-gray-900">Innovation</dt>
                <dd className="mt-1">We constantly push boundaries and explore new technologies.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Quality</dt>
                <dd className="mt-1">We maintain high standards in everything we create.</dd>
              </div>
              <div>
                <dt className="font-semibold text-gray-900">Collaboration</dt>
                <dd className="mt-1">We believe in the power of working together.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}