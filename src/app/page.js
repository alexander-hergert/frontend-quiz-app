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
      <h1>Homepage</h1>
      <Link href="/html">To Html quiz!</Link>
      <Link href="/css">To Css quiz!</Link>
      <Link href="/javascript">To javascript quiz!</Link>
      <Link href="/accessibility">To accessibility quiz!</Link>
    </>
  );
};

export default Home;
