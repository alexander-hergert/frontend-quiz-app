import Quiz from "@/components/Quiz";
import data from "@/api/data.json";

const JavascriptPage = () => {
  return (
    <>
      <Quiz data={data} />
    </>
  );
};

export default JavascriptPage;
