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
              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex}>
                            {segment?.marketingCarrier} {segment?.aircraft}
                          </p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex}>{segment?.flightNumber}</p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              <td>
                {item?.class?.map((classArray: string[], index: number) => (
                  <div key={index}>
                    {classArray?.map((cls, innerIndex) => (
                      <p key={innerIndex}>{cls}</p>
                    ))}
                  </div>
                ))}
              </td>

              <td>
                {item?.fareBasis?.map(
                  (fareBasisArray: string[], index: number) => (
                    <div key={index}>
                      {fareBasisArray?.map((fare, innerIndex) => (
                        <p key={innerIndex}>{fare}</p>
                      ))}
                    </div>
                  )
                )}
              </td>

              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex}>
                            {segment?.departure?.iataCode} - {""}
                            {segment?.arrival?.iataCode}
                          </p>
                        )
                      )}
                    </div>
                  )
                )}
              </td>

              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex}>
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

              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <div key={index}>
                      {itinerariesObject?.segments?.map(
                        (segment, innerIndex) => (
                          <p key={innerIndex}>
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

              <td>
                {item?.itineraries?.map(
                  (itinerariesObject: IItinerary, index: number) => (
                    <p key={index}>{itinerariesObject?.duration}</p>
                  )
                )}
              </td>

              <td>${item?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FlightDetailsTable;
