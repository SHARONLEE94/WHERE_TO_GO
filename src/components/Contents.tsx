import { MapPin } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const Contents = () => {
  return (
    <div>
      {/* Popular Destinations */}
      <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">여행 지역</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* {destinations.map((destination) => ( */}
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        // src={destination.imageUrl || "/placeholder.svg"}
                        // alt={destination.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">광주광역시</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">주요 관광지 +</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        // src={destination.imageUrl || "/placeholder.svg"}
                        // alt={destination.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">남양주시</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">주요 관광지 +</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <img
                        // src={destination.imageUrl || "/placeholder.svg"}
                        // alt={destination.city}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">성남시</h3>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">주요 관광지 +</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              {/* ))} */}
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contents