import QuizButtons from "@/components/QuizButtons";

const Home = async () => {
  return (
    <>
      <section className="flex w-[1160px] h-[456px] gap-[140px]">
        <article className="flex flex-col w-[465px]">
          <h1 className="font-rubik-regular text-[4rem] text-neutral">
            <span className="text-shadow">Welcome to the </span>
            <span>Frontend Quiz!</span>
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
