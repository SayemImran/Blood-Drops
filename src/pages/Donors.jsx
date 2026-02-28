import { useEffect, useState } from "react";
import apiClient from "../components/services/api-Client";
import DonorCard from "../profile/Donorcard";

const Donors = () => {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    const fetchDonor = async () => {
      try {
        const response = await apiClient.get("/donors/");
        console.log(response.data);
        setDonors(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDonor();
  }, []);
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {donors.map(donor =>(
        <DonorCard key={donor.id} name={donor.name} age={donor.age} address={donor.address} gender={donor.gender} blood_group={donor.blood_group} last_donation_date={donor.last_donation_date} is_available={donor.is_available} image={donor.image}/>
      ))}
    </div>
  );
};

export default Donors;
