import Header from "./Header";
import Entry from "./Entry";
import Contact from "./Contact";
const TravelJournalApp = () => {
  return (
    <section className="bg-white ">
      <div className="m-4 grid grid-cols-1 gap-4 gap-x-6 items-center justify-items-center p-6 ">
        <Contact
          img="/src/assests/images/dog1.jpg"
          title="Mr. Docker"
          telePhone="(212) 555-1234"
          email="mr.docker@catnap.meow"
        />
        <Contact
          img="/src/assests/images/dog1.jpg"
          title="Mr. Docker"
          telePhone="(212) 555-1234"
          email="mr.docker@catnap.meow"
        />
        <Contact
          img="/src/assests/images/dog1.jpg"
          title="Mr. Docker"
          telePhone="(212) 555-1234"
          email="mr.docker@catnap.meow"
        />
        <Contact
          img="/src/assests/images/dog1.jpg"
          title="Mr. Docker"
          telePhone="(212) 555-1234"
          email="mr.docker@catnap.meow"
        />
      </div>
      {/* <Header />
      <main className="mt-14 mx-16 grid grid-cols-1 gap-8">
        <Entry />
        <Entry />
        <Entry />
      </main> */}
    </section>
  );
};

export default TravelJournalApp;
