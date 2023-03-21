import axios from 'axios';

const itineraryApi = axios.create({
  baseURL: 'http://localhost:8080',
});

const itineraryService = {
  async getAllItineraries() {
    const response = await itineraryApi.get('/itineraries');
    return response.data;
  },
  async getUserItinerary(userId) {
    const response = await itineraryApi.get(`/itineraries/users/${userId}`);
    return response.data;
  },
  async addItineraryItem(itineraryId, itineraryItem) {
    const response = await itineraryApi.post(`/itineraries/${itineraryId}`, itineraryItem);
    return response.data;
  },
  async setDestination(itineraryItemId, destinationId) {
    const response = await itineraryApi.put(`/itineraries/items/${itineraryItemId}/destination?destinationId=${destinationId}`);
    return response.data;
  },
  async addAccommodation(itineraryItemId) {
    const response = await itineraryApi.put(`/itineraries/items/${itineraryItemId}/accommodation`);
    return response.data;
  },
  async createTransport(transport) {
    try {
      const response = await itineraryApi.post('/itineraries/transport', transport);
      const created = await itineraryApi.get(`/itineraries/transport/${response.data.id}`);
      return created.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async addTransport(transport, itineraryId, transportId) {
    try {
      const response = await itineraryApi.put(`/itineraries/items/${itineraryId}/${transportId}`, transport);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};

export default itineraryService;
