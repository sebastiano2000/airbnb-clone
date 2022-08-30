import Header from './../components/Header';
import Footer from './../components/Footer';
import InfoCard from './../components/InfoCard';
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import { exploreData, searchResults } from "./data";

function Search() {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;

    const formatStartDate = format(new Date(startDate), "dd MM yyyy");
    const formatEndDate = format(new Date(endDate), "dd MM yyyy");
    
    const range = formatStartDate + " - " + formatEndDate; 
    return (
        <div>
            <Header placeHolder={location | range | noOfGuests + "guests"}/>

            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays - {range} - for {noOfGuests} guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3
                    text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Room and Beds</p>
                        <p className="button">More filters</p>
                    </div>

                    <div>
                        {searchResults?.map(({ img, location, title, description, star, price, total }) => (
                            <InfoCard
                                key={img} 
                                img={img}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                                location={location} 
                            />
                        ))}
                    </div>
                    
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Search;