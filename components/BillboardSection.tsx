// import React from 'react';
// import CategoryNav from "@/components/CategoryNav";
// import getCategories from '@/actions/get-categories';
// import Billboard from './billboard';
// import getBillboard from '@/actions/get-billboards';
// import { Separator } from './ui/separator';

// interface BillboardSectionProps {

// }

// export const revalidate = 0

// const BillboardSection: React.FC<BillboardSectionProps> = async () => {
//     const categories = await getCategories()
//     const billboards = await getBillboard(`a352adbf-8224-4a59-91f5-26bf1310f4a1`)
//     return (
//         <div className="flex w-full max-w-7xl mx-auto mt-4 px-[32px] mb-[140px]">
//             <CategoryNav data={categories} />
//             <Separator orientation="vertical" className="mx-4 h-auto bg-gray-200" />
//             <Billboard data={billboards} />
//         </div>
//     );
// };

// export default BillboardSection;