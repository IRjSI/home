import { Info } from "lucide-react";
import Format from "./components/Format";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Format
        heading="about"
        icon={<Info size={24} className="text-[#55acee]" />}
        content="i don't know what to write, yet"
        classname=""
      />
      <div className="container mx-auto">
        <section className="">
          <h1 className="font-semibold mb-4 text-2xl">things i like</h1>
          <p className="text-sm mb-8 text-zinc-100">
            <ul className="flex flex-col space-y-2">
              <li>
                philosophy
              </li>
              <li>
                programming
              </li>
              <li>
                music
              </li>
            </ul>
          </p>
        </section>

        <section className="">
          <h1 className="font-semibold mb-4 text-2xl">things i am planning to do</h1>
          <p className="text-sm mb-8 text-zinc-100">
            <ul className="flex flex-col space-y-2">
              <li>
                freelancing
              </li>
              <li>
                internship
              </li>
              <li>
                complete this
              </li>
            </ul>
          </p>
        </section>
    </div>
    </div>
  );
}
