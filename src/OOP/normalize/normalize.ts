export default function (raw: Array<{ country: string; name: string }>) {
  let res = raw.reduce(
    (acc: Record<string, Array<string>>, { country, name }) => {
      country = country.trim().toLowerCase();
      name = name.trim().toLowerCase();
      acc[country] = acc[country] || [];
      if (!acc[country].includes(name)) {
        acc[country].push(name);
      }
      return acc;
    },
    {}
  );
  for (const [country, cities] of Object.entries(res)) {
    res[country] = cities.sort();
  }
  return res;
}
