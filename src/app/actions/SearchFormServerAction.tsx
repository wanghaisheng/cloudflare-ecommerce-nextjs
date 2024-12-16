"use server";

const handleSearchFormServerAction = async (
  prevState: any,
  formData: FormData
) => {
  const searchQuery = formData.get("searchQuery");
  console.log(searchQuery);

  return {};
};

export { handleSearchFormServerAction };
