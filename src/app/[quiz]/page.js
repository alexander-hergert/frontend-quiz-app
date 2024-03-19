import Quiz from "@/components/Quiz";
import data from "@/api/data.json";

const htmlPage = async () => {
  return (
    <>
      <Quiz data={data} />
    </>
  );
};

export default htmlPage;
