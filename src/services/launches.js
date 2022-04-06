const BASE_URL = "https://api.spacexdata.com/v4";

export async function getAllLaunches() {
  try {
    const response = await fetch(BASE_URL + "/launches");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getLaunchByFlightNumber(flightNumber) {
  try {
    const response = await fetch(BASE_URL + `/launches/${flightNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
