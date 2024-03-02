export const getJobList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}job-list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    // crossdomain: true
  });

  const response = await res.json();
  return response;
};

// singlejob

export const getJob = async (slug) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}job-detail`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body:JSON.stringify({ slug }),
      // crossdomain: true
    }
  );

  const response = await res.json();
  console.log(response, "responsed");
  return response;
};
