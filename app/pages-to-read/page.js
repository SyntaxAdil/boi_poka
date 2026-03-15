import CustomShapeBarChart from "@/components/charts/Chart";

const PagesToRead = () => {
  return (
    <section className="w-full bg-base-100 border border-base-200 rounded-2xl overflow-hidden">

      <div className="bg-base-200 border-b border-base-200 px-8 py-10 text-center space-y-3">
        <span className="text-xs font-medium text-success bg-success/10 px-3 py-1 rounded-full">
          Reading stats
        </span>
        <h1 className="text-4xl font-semibold tracking-tight mt-3">
          Pages to <span className="text-success">Read</span>
        </h1>
        <p className="text-base-content/50 text-sm max-w-md mx-auto">
          A visual breakdown of how many pages are left in each of your books.
        </p>
      </div>

      <div className="p-6 md:p-10 min-h-[60dvh] flex items-center justify-center">
        <CustomShapeBarChart />
      </div>

    </section>
  );
};

export default PagesToRead;