import Container from "../../ui/Container";
import Title from "../../ui/Title";
import ReviewList from "./ReviewList";
const Reviews = () => {
  return (
    <section className="bg-slate-300 p-5 dark:bg-slate-700 md:p-16 ">
      <Container>
        <Title
          title="What Our Customers Say"
          subtitle="We're proud of our customer's statisfication."
        />
        <ReviewList />
      </Container>
    </section>
  );
};

export default Reviews;
