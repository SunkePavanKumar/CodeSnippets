import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="w-full py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-4 min-[400px]:gap-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Have questions or suggestions? Feel free to reach out to us! We're
              here to help you.
            </p>
          </div>
          <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Email</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Send us an email at{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-500 hover:underline"
                >
                  pavan.1413489@gmail.com
                </a>{" "}
                and we'll get back to you promptly.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Phone</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You can also call us at{" "}
                <a
                  href="tel:+123456789"
                  className="text-blue-500 hover:underline"
                >
                  +91 9347******
                </a>{" "}
                during our business hours.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold">Social Media</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Follow us on social media for updates and announcements. Find us
                on{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Twitter
                </a>
                ,{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Facebook
                </a>
                , and{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Instagram
                </a>
                .
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
