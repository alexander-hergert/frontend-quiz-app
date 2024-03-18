import HtmlQuiz from "@/components/HtmlQuiz";

const htmlPage = async () => {
  let data;
  try {
    const response = await fetch("http://localhost:3000/api/data.json");
    data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <HtmlQuiz questions={data?.quizzes?.[0].questions} />
    </>
  );
};

export default htmlPage;
