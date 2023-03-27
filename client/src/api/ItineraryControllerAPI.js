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
  async getItinerary(itineraryId) {
    const response = await itineraryApi.get(`/itineraries/${itineraryId}`);
    return response.data;
  },
  async getItineraryItems(itineraryId) {
    const response = await itineraryApi.get(`/itineraries/${itineraryId}/items`);
    return response.data;
  },
  async addItinerary(itinerary) {
    const response = await itineraryApi.post('/itineraries', itinerary);
    return response.data;
  },
  async addItineraryItem(itineraryId, itineraryItem) {
    const response = await itineraryApi.post(`/itineraries/${itineraryId}`, itineraryItem);
    return response.data;
  },
  async deleteItineraryItem(itineraryItemId) {
    const response = await itineraryApi.delete(`/itineraries/items/${itineraryItemId}`);
    return response.data;
  },
  async deleteItinerary(itineraryId) {
    const response = await itineraryApi.delete(`/itineraries/${itineraryId}`);
    return response.data;
  }


};

export default itineraryService;
