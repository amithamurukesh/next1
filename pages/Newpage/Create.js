import Link from "next/link";
export default function Create() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
        {/* <FaRegEnvelope className="text-gray-500 m-2" /> */}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-gray-100 outline-none text-sm flex-1"
        />
      </div>
      <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
        <MdLockOutline className="text-gray-500 m-2" />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="bg-gray-100 outline-none text-sm flex-1"
        />
        <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </div>
    </div>
  );
}
