import { getJob } from "@/app/api/joblisting/route";
import React from "react";

export async function generateStaticParams() {
  const resss = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}job-list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    // crossdomain: true
  }).then((rr) => rr.json());

  return resss?.data?.jobs?.map((job) => ({
    slug: job.slug,
  }));
}

const JobDetail = async ({ params }) => {
  const response = await getJob(params?.slug);

  return <div>
<p dangerouslySetInnerHTML={{__html: response?.data?.description}}/> 

  </div>;
};

export default JobDetail;
