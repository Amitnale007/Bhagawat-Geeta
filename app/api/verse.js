import API from "./client";

const getAll = async (id) => {
  const result = await API.get(`/chapters/${id}/verses/`);
  return result;
};

export default { getAll };
