import Quiz from "@/components/Quiz";
import data from "@/api/data.json";

const CssPage = () => {
  return (
    <>
      <Quiz data={data} />
    </>
  );
};

export default CssPage;
