const GamingPerfChart = ({ game }) => {
  return (
    <div className="h-80 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 mb-2">Performance Chart Placeholder</p>
        <p className="text-xl">{game.name} Benchmark Data</p>
        <p className="text-sm text-gray-500 mt-4">(Real charts will be rendered here once API is connected)</p>
      </div>
    </div>
  );
};

export default GamingPerfChart;

