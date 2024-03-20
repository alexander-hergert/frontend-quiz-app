import QuizButtons from "@/components/QuizButtons";

const Home = async () => {
  return (
    <>
      <section className="flex w-[1160px] h-[456]">
        <article className="flex flex-col">
          <h1 className="font-rubik-regular text-[4rem] text-neutral">
            Welcome to the <span>Frontend Quiz!</span>
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
