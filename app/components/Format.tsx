
export default function Format({ heading, icon, content , classname }: { heading: string, icon: React.ReactNode, content: string, classname?: string }) {
  return (
    <div className="container mx-auto">
      <section className="">
        <h1 className={`font-semibold mb-4 flex gap-2 items-center ${classname ? classname : "text-5xl"}`}>{heading}{icon}</h1>
        <p className="text-sm mb-8 text-zinc-100">
            {content}
        </p>
      </section>
    </div>
  );
}
