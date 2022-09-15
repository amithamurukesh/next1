export default function Footer() {
  return (
    <div className="w-full text-center bg-violet-300 dark:bg-primary-gray h-[10%] sm:h-[10%] md:[6]bottom-0 fixed">
      <section
        id="contact"
        className="flex flex-col gap-2 justify-center items-center py-2"
      >
        <h2 className="text-1xl md:text-2xl font-bold text-primary">
          Contact{" "}
        </h2>
      </section>
      <div className="text-1xl" >
        <h2 className="">&copy; Copyright 2021 - www.blogs.com</h2>
      </div>
    </div>
  );
}
