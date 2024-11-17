import axios from "axios";

export const fetchClassDistribution = async (account, startDate, endDate) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://fams-app.ap-southeast-2.elasticbeanstalk.com/api/v1/statistics/class-distribution?account=${account}&startDate=${startDate}&endDate=${endDate}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw new Error("Failed to fetch Class Distribution Data");
  }
};

export const fetchClassStatus = async (account, startDate, endDate) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://fams-app.ap-southeast-2.elasticbeanstalk.com/api/v1/statistics/class-status-ratio?startDate=${startDate}&endDate=${endDate}&account=${account}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw new Error("Failed to fetch Class Status Data");
  }
};

export const fetchTraineeStatistics = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://fams-app.ap-southeast-2.elasticbeanstalk.com/api/v1/statistics/trainees`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw new Error("Failed to fetch Trainee Data");
  }
};

export const fetchTechnicalManager = async (allTime, yearToDate, oneYear) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://fams-app.ap-southeast-2.elasticbeanstalk.com/api/v1/statistics/technical-manager?allTime=${allTime}&yearToDate=${yearToDate}&oneYear=${oneYear}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching :", error);
    throw new Error("Failed to fetch Technical Manager Data");
  }
};
