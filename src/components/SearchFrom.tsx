import { Controller, FieldValues, useForm } from "react-hook-form";
import Select from "react-select";

const SearchFrom = () => {
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const country = [
    { value: "LHR", label: "Heathrow Airport" },
    { value: "CDG", label: "Paris Charles de Gaulle Airport" },
    // Add more options as needed
  ];

  return (
    <section className="section-wrapper py-10 space-y-5">
      {/* first row */}
      <div className="flex items-center justify-center font-medium text-base">
        <button className="border-2 border-black px-3.5 py-1">
          Round Trip
        </button>
        <button className="border-y-2 border-black px-3.5 py-1 bg-violet-950/95 text-white text-opacity-90">
          One Way
        </button>
        <button className="border-2 border-black px-3.5 py-1">
          Multi City
        </button>
      </div>

      {/* second row */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-[80%] mx-auto flex flex-col items-center justify-center gap-y-3.5"
      >
        <div className="w-full flex max-md:flex-wrap items-center justify-between gap-2 lg:gap-5">
          <div className="flex flex-col items-start space-y-2 w-full">
            <label className="font-semibold">
              From {""}
              <span className="text-red-500">*</span>
            </label>

            <Controller
              name="from"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <Select
                  options={country}
                  onChange={(val) => onChange(val?.value)}
                  className="border border-black rounded w-full"
                  placeholder="Select from..."
                />
              )}
            />
          </div>

          <div className="flex flex-col items-start space-y-2 w-full">
            <label className="font-semibold">
              To {""}
              <span className="text-red-500">*</span>
            </label>

            <Controller
              name="to"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <Select
                  options={country}
                  onChange={(val) => onChange(val?.value)}
                  className="border border-black rounded w-full"
                  placeholder="Select to..."
                />
              )}
            />
          </div>

          <div className="flex flex-col items-start space-y-2 w-full">
            <label className="font-semibold">
              Departure Date {""}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="date"
              className="border border-black rounded px-2.5 py-1.5 outline-none w-full"
              {...register("departureDate", { required: true })}
            />
          </div>

          <div className="flex flex-col items-start space-y-2 w-full">
            <label className="font-semibold">
              Return Date {""}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="date"
              className="border border-black rounded px-2.5 py-1.5 outline-none w-full"
              {...register("returnDate", { required: true })}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-violet-950/95 text-white px-3.5 py-1 rounded-md shadow-md uppercase font-bold text-opacity-90"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchFrom;
