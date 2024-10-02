import { EDUCATION } from "../constants";

function Education() {
  return (
    <>
      <div id="Education" className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Education</h1>
        <div>
          {EDUCATION.map((item) => (
            <div key={item}>
              <div className="flex justify-around flex-wrap lg:justify-center mb-8">
                <div className="w-full lg:w-1/4">
                  <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h6 className="mb-2 font-semibold">
                    {item.role} -{" "}
                    <span className="text-sm text-purple-100">{item.side}</span>{" "}
                  </h6>
                  <p className="mb-4 text-neutral-400">
                    Institute: {item.institute}
                  </p>
                  <p className="mb-4 text-neutral-400">Board: {item.board}</p>

                  <p className="mb-4 text-neutral-400">
                    <span className="w mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
                      {item.p}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Education;
