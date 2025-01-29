type WorkCardProps = {
  designation: string;
  company: string;
  duration: string;
  responsibilities: string[];
};

export const WorkCard = (props: WorkCardProps) => {
  const { designation, company, duration, responsibilities } = props;
  return (
    <div>
      <div className="absolute left-[-11px] size-5 rounded-full border-2 border-[#08A97C] bg-[#151515]"></div>
      <div className="flex w-full flex-col justify-between sm:flex-row">
        <div className="text-xl font-bold md:text-2xl">{company}</div>
        <div className="text-base text-[#959595]">{duration}</div>
      </div>
      <div className="text-lg font-semibold text-[#84F6C3]">{designation}</div>
      <ul className="mt-2 list-inside list-disc marker:text-[#08a97c]">
        {responsibilities?.map((data) => {
          return <li key={data}>{data}</li>;
        })}
      </ul>
    </div>
  );
};
