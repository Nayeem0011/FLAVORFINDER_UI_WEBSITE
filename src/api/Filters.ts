export const getCategories = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
  const data = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.meals.map((m: any) => m.strCategory);
};

export const getAreas = async () => {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
  const data = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.meals.map((m: any) => m.strArea);
};

export const getRecipesByCategory = async (category: string) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals ? data.meals : [];
};

export const getRecipesByAreas = async (area: string) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
  const data = await res.json();
  return data.meals ? data.meals : [];
};

export const getRecipe = async (search: string) => {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }
  const data = await res.json();
  return data.meals ? data.meals : [];
};

