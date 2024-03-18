import QuizButtons from "@/components/QuizButtons";

const Home = async () => {
  return (
    <>
      <div className="flex gap-8 justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl">
            Welcome to the <span>Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </div>
        <QuizButtons />
      </div>
    </>
  );
};

export default Home;
