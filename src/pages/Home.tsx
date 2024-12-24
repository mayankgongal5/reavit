import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to MyWebsite
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A modern React website built with Vite and TailwindCSS. Explore our pages and discover
            what we have to offer.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/about"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Learn more
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
            >
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}