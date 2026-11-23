const SectionHeading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-6">
      <div className="mb-2 h-[2px] w-9 rounded-full bg-blue-500" />

      <h2 className="text-2xl font-bold tracking-tight text-[#102345] sm:text-3xl">
        {title}
      </h2>

      <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
