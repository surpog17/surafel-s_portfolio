import React from "react";
import Experience from "../../Components/Experience";
import Pagination from "../../Components/Pagination";
import usePagination from "../../Components/Paginator";
import Projects from "../../Components/Projects";

export default function index() {
  const experiencesData = [
    {
      projectImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmqKfnWo1Lx1iFXeekFS67MShz-v9zbuJB2OzXpOM7rqMNzkS9cnH8nr5vPqkA9bYVQiGa1jhoHnz7~3eosu1GukoEp2BUItILIWK6FdhfOLSiQUc4oM33qUKJh6xQsGwdCwjVJEFb-dJQUcpPgSERjvn0OTMs4Eg~D4nDSApw-1zsq5Yz25Rwoed6duuqmLldC0ytNwQXrDalZH6FzWkcr~nn9wWw9muq-SSXqTwMR5UvAWmJOLDCZcFcD3~wMqb3WHEmZnNvHgPyfq~YjxcZRA4-iasI3Dlucg__",
      projectName: "Company 1",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      date: "January 2020 - December 2022",
    },
    {
      projectImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmqKfnWo1Lx1iFXeekFS67MShz-v9zbuJB2OzXpOM7rqMNzkS9cnH8nr5vPqkA9bYVQiGa1jhoHnz7~3eosu1GukoEp2BUItILIWK6FdhfOLSiQUc4oM33qUKJh6xQsGwdCwjVJEFb-dJQUcpPgSERjvn0OTMs4Eg~D4nDSApw-1zsq5Yz25Rwoed6duuqmLldC0ytNwQXrDalZH6FzWkcr~nn9wWw9muq-SSXqTwMR5UvAWmJOLDCZcFcD3~wMqb3WHEmZnNvHgPyfq~YjxcZRA4-iasI3Dlucg__",
      projectName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
    },
    {
      projectImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmqKfnWo1Lx1iFXeekFS67MShz-v9zbuJB2OzXpOM7rqMNzkS9cnH8nr5vPqkA9bYVQiGa1jhoHnz7~3eosu1GukoEp2BUItILIWK6FdhfOLSiQUc4oM33qUKJh6xQsGwdCwjVJEFb-dJQUcpPgSERjvn0OTMs4Eg~D4nDSApw-1zsq5Yz25Rwoed6duuqmLldC0ytNwQXrDalZH6FzWkcr~nn9wWw9muq-SSXqTwMR5UvAWmJOLDCZcFcD3~wMqb3WHEmZnNvHgPyfq~YjxcZRA4-iasI3Dlucg__",
      projectName: "Company 2",
      description:
        "Led development initiatives and collaborated with cross-functional teams.",
      date: "March 2018 - November 2019",
    },
    {
      projectImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmqKfnWo1Lx1iFXeekFS67MShz-v9zbuJB2OzXpOM7rqMNzkS9cnH8nr5vPqkA9bYVQiGa1jhoHnz7~3eosu1GukoEp2BUItILIWK6FdhfOLSiQUc4oM33qUKJh6xQsGwdCwjVJEFb-dJQUcpPgSERjvn0OTMs4Eg~D4nDSApw-1zsq5Yz25Rwoed6duuqmLldC0ytNwQXrDalZH6FzWkcr~nn9wWw9muq-SSXqTwMR5UvAWmJOLDCZcFcD3~wMqb3WHEmZnNvHgPyfq~YjxcZRA4-iasI3Dlucg__",
      projectName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
    },
  ];

  let [page, setPage] = React.useState(1);
  const PER_PAGE = 3; // Adjusted to 1 for better visibility in the example
  const count = Math.ceil(experiencesData?.length / PER_PAGE);
  const currentData = usePagination(experiencesData, PER_PAGE);
  const handleChange = (p) => {
    setPage(p);
    currentData.jump(p);
  };

  return (
    <div
      id="projects"
      className="bg-black min-h-screen px-4 md:px-8 lg:px-16 xl:px-32"
    >
      <div className="container mx-auto items-center justify-between py-8">
        <div className="text-white grid gap-5">
          <h1 className="text-4xl mb-4 text-center">
            <div className="py-4">
              <span className="font-light mr-4 w">My</span>
              <span className="font-semibold mr-1">Projects</span>
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentData?.currentData()?.map((experience, index) => (
            <Projects
              key={index}
              index={index}
              projectImage={experience.projectImage}
              projectName={experience.projectName}
              description={experience.description}
              date={experience.date}
            />
          ))}
        </div>

        {count > 1 && (
          <div className="flex justify-end mt-3 text-white">
            <Pagination count={count} page={page} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
