import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    return null; // Возвращаем null, если категория не найдена
  }

  const category: Category = await res.json();
  return category; // Возвращаем одиночный объект Category
};

export default getCategory;
