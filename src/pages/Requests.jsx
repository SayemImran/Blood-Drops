import { useEffect, useState } from "react";
import apiClient from "../components/services/api-Client";
import RequestCard from "../components/request/RequestCard";
import ProtectedPage from "../components/Protectedpage";
import useAuthContext from "../hook/useAuthContext";

const Requests = () => {
  const { user } = useAuthContext();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (!user) return;
    const getRequests = async () => {
      try {
        const response = await apiClient.get("/requests/");
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequests();
  }, [user]);

  if (!user) return <ProtectedPage title="Requests" />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {requests.map((request) => (
        <RequestCard
          key={request.id}
          blood_group={request.blood_group}
          location={request.location}
          description={request.description}
          is_active={request.is_active}
        />
      ))}
    </div>
  );
};

export default Requests;