import Link from "next/link";

const Home = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/data.json");
    const data = await response.json();
  } catch (error) {
    console.error(error);
  }

  return (
    <>
      <div className="flex gap-8 justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl">
            Welcome to the <span>Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </div>

        <div>
          <div>
            <Link href="/html">To Html quiz!</Link>
          </div>
          <div>
            <Link href="/css">To Css quiz!</Link>
          </div>
          <div>
            <Link href="/javascript">To javascript quiz!</Link>
          </div>
          <div>
            <Link href="/accessibility">To accessibility quiz!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
