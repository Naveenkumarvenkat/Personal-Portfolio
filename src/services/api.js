const BASE_URL = 'http://localhost:8080/api/contact';

export const getContactInfo = async () => {
  const response = await fetch(`${BASE_URL}/info`);
  if (!response.ok) throw new Error('Failed to fetch contact info.');
  return response.json();
};

export const sendContactMessage = async (data) => {
  const response = await fetch(`${BASE_URL}/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to send message.');
  return response.json();
};
