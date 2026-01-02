import Header from "./components/Header";
import Banner from "./components/Banner";
import Mastery from "./components/homeComponents/Mastery";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050506] text-white">
      <div className="relative isolate flex min-h-screen items-start justify-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-x-0 top-[-20%] mx-auto h-[420px] w-[420px] rounded-full bg-gradient-to-b from-[#1d2230] via-[#141826] to-transparent opacity-70 blur-3xl"
        />
        <div className="relative z-10 w-full max-w-[81%] space-y-16 pb-24">
          <Header />
          <Banner />
          <Mastery  />
        </div>
      </div>
    </div>
  );
}
