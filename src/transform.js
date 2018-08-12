import { DataSet } from "vis";

const transform = (data) => {
  const result = {};
  const services = data.services.map(service => ({
    id: service.id, label: service.label
  }));
  const integrationPoints = data.contracts.map(contract => ({
    from: contract.consumer, to: contract.provider
  }));
  result.nodes = new DataSet(services);
  result.edges = new DataSet(integrationPoints);
  return result;
};

export default transform;