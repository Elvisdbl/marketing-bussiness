export const getServices = async () => {
  try {
    const res = await fetch("/service", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getService = async (id: number) => {
  try {
    const res = await fetch(`/service/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data[0];
  } catch (e) {
    console.log(e);
  }
};

export const getPlans = async () => {
  try {
    const res = await fetch("/plan", {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPlansByService = async (id: number) => {
  try {
    const res = await fetch(`/service/${id}/plans`, { method: "GET" });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPlan = async (id: number) => {
  try {
    const res = await fetch(`/plan/${id}`, {
      method: "GET",
    });
    const data = await res.json();
    return data[0];
  } catch (e) {
    console.log(e);
  }
};
