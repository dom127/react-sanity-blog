import client from "@sanity/client"

export default client({
    projectId: "yntearao",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-08-05"
})