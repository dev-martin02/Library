export const HandleSubmitForms = async (event, url) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const data = await response.json();
  return data;
};
