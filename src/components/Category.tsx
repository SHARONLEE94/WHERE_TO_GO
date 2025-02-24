import { Calendar, Camera, Hotel, Plane } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const Category = () => {
  return (
    <section className="py-16" style={{ backgroundColor: "#FFF0F3" }}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">여행 카테고리</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* {features.map((feature) => ( */}
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4 text-[#FFB7C5]"><Plane className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-800">항공권</h3>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4 text-[#FFB7C5]"><Hotel className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-800">숙소</h3>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4 text-[#FFB7C5]"><Camera className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-800">관광지</h3>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4 text-[#FFB7C5]"><Calendar className="w-6 h-6" /></div>
                    <h3 className="font-semibold text-gray-800">일정짜기</h3>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>
  )
}

export default Category