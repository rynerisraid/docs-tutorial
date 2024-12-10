import Link from "next/link";
import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fiexed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-1">
        Click{" "}
        <Link href="/documents/123">
          <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
        </Link>{" "}
        to go to the document id
      </div>
    </div>
  );
};

export default Home;
