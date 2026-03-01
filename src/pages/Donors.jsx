import { useEffect, useState } from "react";
import apiClient from "../components/services/api-Client";
import DonorCard from "../profile/Donorcard";
import ProtectedPage from "../components/ProtectedPage";
import useAuthContext from "../hook/useAuthContext";

const Donors = () => {
  const { user } = useAuthContext();
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchDonor = async () => {
      try {
        const response = await apiClient.get("/donors/");
        setDonors(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDonor();
  }, [user]);

  if (!user) return <ProtectedPage title="Donors" />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {donors.map((donor) => (
        <DonorCard
          key={donor.id}
          name={donor.name}
          age={donor.age}
          address={donor.address}
          gender={donor.gender}
          blood_group={donor.blood_group}
          last_donation_date={donor.last_donation_date}
          is_available={donor.is_available}
          image={donor.image}
        />
      ))}
    </div>
  );
};

export default Donors;