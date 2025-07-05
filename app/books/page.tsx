import { Book } from "lucide-react";
import Format from "../components/Format";

function Tag({ tag }: { tag: string }) {
    return (
        <span className="px-1 rounded-xl bg-[#ededed] text-black text-xs">{tag}</span>
    )
}

export default function Books() {
  return (
    <div className="container mx-auto">
      <Format
        heading="books"
        icon={<Book size={24} className="text-[#00a63a]" />}
        content="books i have read and planning to read"
        classname=""
      />
      <div className="container mx-auto">
        <section className="">
          <h1 className="font-semibold mb-4 text-2xl">books read</h1>
          <p className="text-sm mb-8 text-zinc-100">
            <ul className="flex flex-col space-y-2">
              <li>
                the strangers - albert camus <Tag tag="philosophy" />
              </li>
              <li>
                ashtavakra geeta - ashtavakra <Tag tag="philosophy" />
              </li>
              <li>
                the metamorphosis - franz kafka <Tag tag="philosophy" />
              </li>
              <li>
                the elephant in the brain - kevin simler <Tag tag="pschology" />
              </li>
              <li>
                thinking, fast and slow - daniel kahneman <Tag tag="pschology" />
              </li>
            </ul>
          </p>
        </section>

        <section className="">
          <h1 className="font-semibold mb-4 text-2xl">books to read</h1>
          <p className="text-sm mb-8 text-zinc-100">
            <ul className="flex flex-col space-y-2">
              <li>
                the myth of sisyphus - albert camus <Tag tag="philosophy" />
              </li>
              <li>
                crime and punishment - fyodor dostoevsky <Tag tag="philosophy" />
              </li>
              <li>
                white nights - fyodor dostoevsky <Tag tag="philosophy" />
              </li>
              <li>
                the brothers karamazov - fyodor dostoevsky <Tag tag="philosophy" />
              </li>
              <li>
                thus spoke zarathustra - friedrich nietzsche <Tag tag="philosophy" />
              </li>
              <li>
                freedom from the known - j.krishnamurthy <Tag tag="philosophy" />
              </li>
              <li>
                meditation - marcus aurelius <Tag tag="philosophy" />
              </li>
              <li>
                courage: the joy of living dangerously - osho <Tag tag="philosophy" />
              </li>
              <li>
                1984 - george orwell <Tag tag="philosophy" />
              </li>
              <li>
                bhagavad gita - vyasa <Tag tag="philosophy" />
              </li>
            </ul>
          </p>
        </section>
    </div>
    </div>
  );
}
