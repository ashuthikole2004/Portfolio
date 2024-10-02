import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

function Technologies() {
  return (
    <>
      <div id="Technologies" className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandJavascript className="text-7xl text-yellow-300" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-blue-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPhp className="text-7xl" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoCss3 className="text-7xl text-blue-600" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Technologies;
