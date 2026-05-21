const Claims = () => {
  return (
    <div className="bg-background text-on-surface p-margin-mobile md:p-margin-desktop">
      <h1 className="font-headline-xl text-headline-xl text-on-surface mb-gutter">My Claims</h1>
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <h2 className="font-headline-md text-headline-md text-on-surface">All Claims</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-sm">filter_list</span>
            </button>
            <button className="p-2 border border-outline-variant rounded hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto table-container">
          <table className="w-full text-left border-collapse">
            <thead className="bg-on-background text-surface-bright">
              <tr>
                <th className="px-6 py-4 font-label-md text-label-md">CLAIM ID</th>
                <th className="px-6 py-4 font-label-md text-label-md">INCIDENT DATE</th>
                <th className="px-6 py-4 font-label-md text-label-md">CATEGORY</th>
                <th className="px-6 py-4 font-label-md text-label-md">AMOUNT</th>
                <th className="px-6 py-4 font-label-md text-label-md">STATUS</th>
                <th className="px-6 py-4 font-label-md text-label-md text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {/* Add your claims data here */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Claims;
