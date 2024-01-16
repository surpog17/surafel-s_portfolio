import React from "react";
import Experience from "../../Components/Experience";
import Pagination from "../../Components/Pagination";
import usePagination from "../../Components/Paginator";

export default function ExperiencePage() {
  const experiencesData = [
    {
      companyImage: "https://ienetworks.co/pms/images/logos.png",
      companyName: "Company 1",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      date: "January 2020 - December 2022",
    },
    {
      companyImage: "https://ienetworks.co/pms/images/logos.png",
      companyName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
    },
    {
      companyImage: "https://ienetworks.co/pms/images/logos.png",
      companyName: "Company 2",
      description:
        "Led development initiatives and collaborated with cross-functional teams.",
      date: "March 2018 - November 2019",
    },
    {
      companyImage: "https://ienetworks.co/pms/images/logos.png",
      companyName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
    },
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
    <div
      id="Experience"
      className="bg-black min-h-screen px-5 sm:px-10 md:px-20 lg:px-32 xl:px-48"
    >
      <div className="flex flex-col items-center justify-between p-4 gap-10">
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
