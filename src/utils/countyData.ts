export interface CountyData {
  name: string;
  population: number;
}

export const floridaCountiesData: CountyData[] = [
  { name: "Alachua", population: 296313 },
  { name: "Baker", population: 28899 },
  { name: "Bay", population: 196112 },
  { name: "Bradford", population: 27335 },
  { name: "Brevard", population: 653703 },
  { name: "Broward", population: 1981888 },
  { name: "Calhoun", population: 13700 },
  { name: "Charlotte", population: 210645 },
  { name: "Citrus", population: 166151 },
  { name: "Clay", population: 236365 },
  { name: "Collier", population: 408381 },
  { name: "Columbia", population: 72155 },
  { name: "DeSoto", population: 39096 },
  { name: "Dixie", population: 16826 },
  { name: "Duval", population: 1033403 },
  { name: "Escambia", population: 329272 },
  { name: "Flagler", population: 128555 },
  { name: "Franklin", population: 12451 },
  { name: "Gadsden", population: 45660 },
  { name: "Gilchrist", population: 18935 },
  { name: "Glades", population: 13438 },
  { name: "Gulf", population: 14192 },
  { name: "Hamilton", population: 14733 },
  { name: "Hardee", population: 26952 },
  { name: "Hendry", population: 41707 },
  { name: "Hernando", population: 202113 },
  { name: "Highlands", population: 109699 },
  { name: "Hillsborough", population: 1533666 },
  { name: "Holmes", population: 19689 },
  { name: "Indian River", population: 175043 },
  { name: "Jackson", population: 46278 },
  { name: "Jefferson", population: 14152 },
  { name: "Lafayette", population: 8405 },
  { name: "Lake", population: 405211 },
  { name: "Lee", population: 827794 },
  { name: "Leon", population: 307891 },
  { name: "Levy", population: 44024 },
  { name: "Liberty", population: 7955 },
  { name: "Madison", population: 18413 },
  { name: "Manatee", population: 431637 },
  { name: "Marion", population: 394171 },
  { name: "Martin", population: 167982 },
  { name: "Miami-Dade", population: 2686867 },
  { name: "Monroe", population: 82228 },
  { name: "Nassau", population: 98843 },
  { name: "Okaloosa", population: 215107 },
  { name: "Okeechobee", population: 43315 },
  { name: "Orange", population: 1455383 },
  { name: "Osceola", population: 431943 },
  { name: "Palm Beach", population: 1541511 },
  { name: "Pasco", population: 597502 },
  { name: "Pinellas", population: 985047 },
  { name: "Polk", population: 796013 },
  { name: "Putnam", population: 72926 },
  { name: "St. Johns", population: 291960 },
  { name: "St. Lucie", population: 352854 },
  { name: "Santa Rosa", population: 198783 },
  { name: "Sarasota", population: 456901 },
  { name: "Seminole", population: 495308 },
  { name: "Sumter", population: 151352 },
  { name: "Suwannee", population: 44956 },
  { name: "Taylor", population: 21878 },
  { name: "Union", population: 15568 },
  { name: "Volusia", population: 576599 },
  { name: "Wakulla", population: 34753 },
  { name: "Walton", population: 80356 },
  { name: "Washington", population: 25451 }
];

export const calculatePrice = (population: number): number => {
  if (population < 100000) return 20;
  if (population < 300000) return 30;
  if (population < 600000) return 35;
  if (population < 1000000) return 40;
  return 50;
};

export const formatPopulation = (population: number): string => {
  return population.toLocaleString();
};
