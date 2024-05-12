import data from "../../public/data.json";
import { IApiResponse, IFlightOffer, IItinerary } from "../types";

const FlightDetailsTable = () => {
  // Destructure the flightOffer array from data
  const { flightOffer } = data as IApiResponse;

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Aircraft</th>
            <th>Class</th>
            <th>Fare</th>
            <th>Route</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {flightOffer?.map((item: IFlightOffer, index: number) => (
            <tr key={index}>
              {/* flight column */}
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {/* flight details */}
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex} className="whitespace-nowrap">
                            {segment?.marketingCarrier} {segment?.aircraft}
                          </p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              {/* aircraft column */}
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {/* aircraft details */}
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex}>{segment?.flightNumber}</p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              {/* class column */}
              <td>
                {item?.class?.map((classArray: string[], index: number) => (
                  <div key={index}>
                    {/* class details */}
                    {classArray?.map((cls, innerIndex) => (
                      <p key={innerIndex}>{cls}</p>
                    ))}
                  </div>
                ))}
              </td>

              {/* fare column */}
              <td>
                {item?.fareBasis?.map(
                  (fareBasisArray: string[], index: number) => (
                    <div key={index}>
                      {/* fare details */}
                      {fareBasisArray?.map((fare, innerIndex) => (
                        <p key={innerIndex}>{fare}</p>
                      ))}
                    </div>
                  )
                )}
              </td>

              {/* route column */}
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {/* route details */}
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex} className="whitespace-nowrap">
                            {segment?.departure?.iataCode} - {""}
                            {segment?.arrival?.iataCode}
                          </p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              {/* departure column */}
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {/* departure details */}
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex} className="whitespace-nowrap">
                            {new Date(segment?.departure.at).toLocaleString(
                              "en-Us"
                            )}
                          </p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              {/* arrival column */}
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {/* arrival details */}
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex} className="whitespace-nowrap">
                            {new Date(segment?.arrival.at).toLocaleString(
                              "en-Us"
                            )}
                          </p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              {/* duration column */}
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <p key={index}>{itinerariesObject?.duration}</p>
                  )
                )}
              </td>

              {/* Price column */}
              <td className="flex flex-col items-center gap-y-2">
                <p>${item?.price}</p>
                <button className="bg-violet-950/95 text-white px-3.5 py-1 rounded-md shadow-md uppercase font-medium text-sm text-opacity-90">
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FlightDetailsTable;
