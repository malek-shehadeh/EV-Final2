import React from "react";
import Title from "../../ui/Title";
import Container from "../../ui/Container";
import { carsInfo } from "../../constants";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div>
      <section className="p-5 md:p-16 dark:bg-slate-700 ">
        <Container>
          <Title
            title="Our Services"
            subtitle="We offer a wide range of services to help you find the perfect services for your needs."
          />
          <div className="flex flex-col md:flex-row gap-5 ">
            {carsInfo.map((data, index) => (
              <ServiceCard key={index} data={data} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;
