import React from "react";
import Pagination from "../../Components/Pagination";
import usePagination from "../../Components/Paginator";
import Testimonial from "../../Components/Testimonial";

export default function index() {
  const testimonialsData = [
    {
      userImage:
        "https://bc3-production-assets-cdn.basecamp-static.com/3974505/people/BAhpBLHxOQI=--67523325bed7732d9eb55e07eca29d87c3009b6b/avatar?v=1",
      userName: "Company 1",
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      date: "January 2020 - December 2022",
      role: "Front End Developer",
    },
    {
      userImage:
        "https://bc3-production-assets-cdn.basecamp-static.com/3974505/people/BAhpBBXpQAI=--8bf290b3b64bc749cc0dde62a3a4a55ab0e6e7af/avatar?v=1",
      userName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
    },
    {
      userImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmq1",
      userName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on users that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
      role: "Front End Developer",
    },
    {
      userImage:
        "https://s3-alpha-sig.figma.com/img/1d62/ed7e/0df463b96e189800544e8f44b32f4f3c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUwjQVaZqApUWWNrIH1PC-033ei92p42Zd8OHAGE8YB9gpE8ydwmqKfnWo1Lx1iFXeekFS67MShz-v9zbuJB2OzXpOM7rqMNzkS9cnH8nr5vPqkA9bYVQiGa1jhoHnz7~3eosu1GukoEp2BUItILIWK6FdhfOLSiQUc4oM33qUKJh6xQsGwdCwjVJEFb-dJQUcpPgSERjvn0OTMs4Eg~D4nDSApw-1zsq5Yz25Rwoed6duuqmLldC0ytNwQXrDalZH6FzWkcr~nn9wWw9muq-SSXqTwMR5UvAWmJOLDCZcFcD3~wMqb3WHEmZnNvHgPyfq~YjxcZRA4-iasI3Dlucg__",
      userName: "Company 2",
      description:
        "Led development initiatives and collaborated with cross-functional teams.",
      date: "March 2018 - November 2019",
      role: "Front End Developer",
    },
    {
      userImage:
        "https://bc3-production-assets-cdn.basecamp-static.com/3974505/people/BAhpBABqFgI=--0b066dc1ac77479d537719d8ddd68bbdd2608f47/avatar?v=1",
      userName: "Company 2",
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on users that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "March 2018 - November 2019",
      role: "Front End Developer",
    },
  ];
  let [page, setPage] = React.useState(1);
  const PER_PAGE = 3;
  const count = Math.ceil(testimonialsData?.length / PER_PAGE);
  const currentData = usePagination(testimonialsData, PER_PAGE);
  const handleChange = (p) => {
    setPage(p);
    currentData.jump(p);
  };
  return (
    <div
      id="users"
      className="bg-white min-h-screen px-4 md:px-8 lg:px-16 xl:px-32"
    >
      <div className="container mx-auto items-center justify-between py-8">
        <div className="text-black grid gap-5">
          <h1 className="text-4xl mb-4 text-center">
            <div className="py-4">
              <span className="font-light mr-4 w">My</span>
              <span className="font-semibold mr-1">Testimonials</span>
            </div>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentData?.currentData()?.map((testimonial, index) => (
            <Testimonial
              key={index}
              index={index}
              userImage={testimonial.userImage}
              userName={testimonial.userName}
              description={testimonial.description}
              date={testimonial.date}
              role={testimonial.role}
            />
          ))}
        </div>

        {count > 1 && (
          <div className="flex justify-end mt-3 text-black">
            <Pagination count={count} page={page} onChange={handleChange} />
          </div>
        )}
      </div>
    </div>
  );
}
