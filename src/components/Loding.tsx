import { Loader2 } from "lucide-react";

const Loding = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#FFB7C5] mx-auto mb-4" />
        <p className="text-gray-500">LOADING...</p>
      </div>
    </div>
  );
};

export default Loding;
