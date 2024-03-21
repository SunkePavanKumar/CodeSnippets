import { Link } from "react-router-dom";

function App() {
  const username = localStorage.getItem("user");
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">
              Code Snippets
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              Share your code with the world
            </h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              A platform for sharing and discovering code snippets. Whether you
              are looking to showcase your skills, help others learn, or find
              inspiration, we have got you covered.
            </p>
          </div>
          {username ? (
            <>
              <div>Welcome, {username}</div>
              <div className=" flex items-center justify-center mt-8 ">
                <div className=" w-32 p-3 hover:bg-blue-400 text-white rounded-full bg-blue-700">
                  <Link to={"/home"}>Get Started</Link>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center gap-2 min-[400px]:gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 "
                to={"/signup"}
              >
                Sign Up
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900"
                to={"/login"}
              >
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
