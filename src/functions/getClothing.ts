export async function getClothing(
  style: string,
  color: string,
  article: string,
) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/${style}/${color}/${article}`,
    );
    const jsonData = await response.json();
    return jsonData[0];
  } catch (error) {
    console.log(error);
  }
}
