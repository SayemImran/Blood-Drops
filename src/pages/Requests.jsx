import { useEffect, useState } from "react";
import apiClient from "../components/services/api-Client";
import RequestCard from "../components/request/RequestCard";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    const getRequests = async () => {
      try {
        const response = await apiClient.get("/requests/");
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRequests();
  }, []);
  return (
    <div className="max-w-6xl mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {requests.map((request) => (
        <RequestCard
        key={request.id}
          blood_group={request.blood_group}
          location={request.location}
          description={request.description}
          is_active={request.is_active}k
        />
      ))}
    </div>
  );
};

export default Requests;
