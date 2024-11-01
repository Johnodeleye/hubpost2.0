import Link from 'next/link';
import '../globals.css';
function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-green-600 text-9xl font-bold">404</h1>
      <p className="text-gray-500 text-2xl">Page Not Found</p>
      <p className="text-gray-300 text-lg">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <a className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Go back to homepage
        </a>
      </Link>
    </div>
  );
}

export default Custom404;
