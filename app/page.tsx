import Image from "next/image";
import Finger from "./components/Finger";
import Abs from "./components/Abs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-3">
      <div className="max-sm:grid-cols-1 max-sm:gap-3 grid grid-cols-2 gap-2 w-full">
        <Finger />
        <Abs />
      </div>
    </main>
  );
}
