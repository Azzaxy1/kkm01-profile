import { ProgramKerjaLainnya, ProgramKerjaUnggulan } from "@/libs/utils";
import ProgramKerjaItem from "./ProgramKerjaItem";

const ProgramKerja = () => {
  return (
    <section className="pages flex flex-col items-center">
      <article>
        <header className="text-center mb-7">
          <h1 className="text-2xl sm:text-3xl mt-6 font-medium text-secondary">
            Program Kerja Unggulan
          </h1>
        </header>
        {ProgramKerjaUnggulan.map((item, index) => (
          <div key={index} className="mb-8 ">
            <ProgramKerjaItem item={item} index={index} />
          </div>
        ))}
      </article>
      <article>
        <header className="text-center mb-7">
          <h2 className="text-2xl sm:text-3xl mt-6 font-medium text-secondary">
            Program Kerja Lainnya
          </h2>
        </header>
        {ProgramKerjaLainnya.map((item, index) => (
          <div key={index} className="mb-8">
            <ProgramKerjaItem item={item} index={index} />
          </div>
        ))}
      </article>
    </section>
  );
};

export default ProgramKerja;
