export async function getClothing(
  style: string,
  color: string,
  article: string,
) {
  try {
    const response = await fetch(
      `https://techwear-generator-backend.vercel.app/${style}/${color}/${article}`,
    );
    const jsonData = await response.json();
    return jsonData[0];
  } catch (error) {
    console.log(' L BOZO');
    console.log(error);
  }
}
