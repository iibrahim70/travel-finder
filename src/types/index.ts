export interface IFlightSegment {
  departure: { iataCode: string; at: string };
  arrival: { iataCode: string; at: string };
  marketingCarrier: string;
  carrierCode: string;
  flightNumber: string;
  aircraft: string;
}

export interface IItinerary {
  segments: IFlightSegment[];
  duration: string;
}

export interface IFlightOffer {
  itineraries: IItinerary[];
  price: string;
  fareBasis: string[][];
  class: string[][];
  seat: string[][];
}

export interface IApiResponse {
  flightOffer: IFlightOffer[];
  message: string;
  code: string;
}
