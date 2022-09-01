export default function Header() {
  return (
    <header className="bg-violet-300">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <a className="font-bold uppercasetext-5xl">www.Blogs.com</a>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a>Login</a>
            <a>Settings</a>
            <a>Other</a>
          </div>
        </div>
      </div>
    </header>
  );
}
