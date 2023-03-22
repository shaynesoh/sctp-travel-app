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
  async getItineraryItemsFromItinerary(itineraryId, data) {
    const response = await itineraryApi.get(`/itineraries/${itineraryId}/items`, data);
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

};

export default itineraryService;
