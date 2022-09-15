export default function Header() {
  return (
    <header className="bg-violet-300  xl: h-[20%] sm:h-[7%] md:h-[8%]">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className=" md:flex-none w-96 order-2  sm:order-2 flex justify-center  py-10 sm:py-2">
          <input
            type="text"
            className="rounded-full text-sm h-6 w-40 "
            placeholder="Search..."
          />
        </div>
        <div className="   shrink w-80 sm:order-2">
          <a className="font-bold uppercasetext-8xl">www.Blogs.com</a>
        </div>
        <div className="w-96 order-3 flex justify-center ">
          <div className="flex gap-6 ">
            <a>Login</a>
            <a>Settings</a>
            <a>Other</a>
          </div>
        </div>
      </div>
    </header>
  );
}
