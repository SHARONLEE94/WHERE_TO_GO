import { Button } from "./ui/button";

const Error = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-red-600 text-xl font-semibold mb-2">
            오류가 발생했습니다
          </h2>
          <p className="text-red-500">errorData</p>
          <Button
            className="mt-4 bg-red-600 hover:bg-red-700"
            onClick={() => window.location.reload()}
          >
            다시 시도
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
