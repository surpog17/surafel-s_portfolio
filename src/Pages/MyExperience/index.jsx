import React from "react";
import { motion } from "framer-motion";
import Experience from "../../Components/Experience";
import Pagination from "../../Components/Pagination";
import usePagination from "../../Components/Paginator";

const ExperiencePage = () => {
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

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const experienceVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      id="Experience"
      className="bg-black min-h-screen px-[5rem]"
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      <div className="items-center justify-between p-4 gap-10">
        <motion.div
          className="text-white grid gap-5"
          variants={experienceVariants}
        >
          <h1 className="text-4xl mb-4 text-center">
            <div className="py-4">
              <span className="font-light mr-4">My</span>
              <span className="font-semibold mr-1">Experience</span>
            </div>
          </h1>
        </motion.div>

        {currentData?.currentData()?.map((experience, index) => (
          <motion.div key={index} variants={experienceVariants}>
            <Experience
              index={index}
              companyImage={experience.companyImage}
              companyName={experience.companyName}
              description={experience.description}
              date={experience.date}
            />
          </motion.div>
        ))}

        {count > 1 && (
          <motion.div
            className="flex justify-end mt-3"
            variants={experienceVariants}
          >
            <Pagination count={count} page={page} onChange={handleChange} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
