import React from "react";
import Experience from "../../Components/Experience";
import Pagination from "../../Components/Pagination";
import usePagination from "../../Components/Paginator";

export default function ExperiencePage() {
  const experiencesData = [
    // Your experience data here
  ];

  let [page, setPage] = React.useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(experiencesData?.length / PER_PAGE);
  const currentData = usePagination(experiencesData, PER_PAGE);

  const handleChange = (p) => {
    setPage(p);
    currentData.jump(p);
  };

  return (
    <div id="Experience" className="bg-black min-h-screen px-[5rem]">
      <div className="items-center justify-between p-4 gap-10">
        <div className="text-white grid gap-5">
          <h1 className="text-4xl mb-4 text-center">
            <div className="py-4">
              <span className="font-light mr-4">My</span>
              <span className="font-semibold mr-1">Experience</span>
            </div>
          </h1>
        </div>

        {currentData?.currentData()?.map((experience, index) => (
          <Experience
            key={index}
            index={index}
            companyImage={experience.companyImage}
            companyName={experience.companyName}
            description={experience.description}
            date={experience.date}
          />
        ))}

        {count > 1 && (
          <div className="flex justify-end mt-3">
            <Pagination count={count} page={page} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
