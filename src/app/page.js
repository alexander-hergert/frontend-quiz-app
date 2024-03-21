import QuizButtons from "@/components/QuizButtons";

const Home = async () => {
  return (
    <>
      <section
        className="flex max-md:my-4 max-md:w-[327px] md:w-[640px] max-xl:flex-wrap xl:w-[1160px] max-md:h-[457px] 
        md:h-[638px] xl:h-[456px] md:gap-[64px] xl:gap-[140px]"
      >
        <article className="flex flex-col max-md:h-[125px] max-md:w-[327px] w-[465px]">
          <h1 className="font-rubik-medium font-thin text-[4rem] text-neutral max-md:text-[2rem] md:text-[3rem]">
            <span className="text-shadow">Welcome to the </span>
            <span className="font-bold">Frontend Quiz!</span>
          </h1>
          <p className="font-bold font-rubik-italic text-accent">
            Pick a subject to get started.
          </p>
        </article>
        <QuizButtons />
      </section>
    </>
  );
};

export default Home;
