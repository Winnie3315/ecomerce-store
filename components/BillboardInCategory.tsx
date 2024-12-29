import { Billboard as BillboardType } from "@/types"

interface BillboardProps {
  data: BillboardType
}

export function Billboard({ data }: BillboardProps) {
  console.log("data",data);
  
  return (
    <div className="overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        className="relative aspect-[2.5/1] overflow-hidden rounded-xl"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs rounded-lg bg-white/60 p-4 backdrop-blur-sm sm:max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl">
              {data.label}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

