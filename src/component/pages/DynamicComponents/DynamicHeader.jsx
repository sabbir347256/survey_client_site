const DynamicHeader = ({ mainHeader, subHeaderName }) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                {mainHeader}
            </h1>
            {subHeaderName && (
                <p className="text-sm text-slate-500 font-medium">
                    {subHeaderName}
                </p>
            )}
        </div>
    );
};

export default DynamicHeader;