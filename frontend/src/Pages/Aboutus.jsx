import { Link } from "react-router-dom";

export default function Aboutus() {
  return (
    <div className="w-full py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 min-[400px]:gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              Code Snippets
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Empower your team's coding workflow with our Code Snippets
              platform, designed to streamline code sharing and collaboration.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Easy Submission Process</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Submitting code snippets is effortless with our intuitive form,
                allowing your team members to share their code in seconds.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Seamless Collaboration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Collaborate efficiently by viewing and discussing code snippets
                in one centralized location, facilitating better communication
                and code review.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Organized Code Repository</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Maintain an organized repository of code snippets, categorized
                by language and user, for easy access and reference.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center mt-8 ">
        <div className=" w-32 p-3 hover:bg-blue-400 text-white rounded-full bg-blue-700">
          <Link to={"/home"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
