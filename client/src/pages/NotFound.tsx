import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center font-mono">
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-dark sm:text-9xl dark:text-white">
          404
        </h1>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">
          A keresett oldal nem található.
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Link
            className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-accent focus:outline-none transition ease-in-out duration-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
            to="/"
          >
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Főoldal
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
