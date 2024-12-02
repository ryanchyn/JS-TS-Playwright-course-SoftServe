// Task1

const employee: {
  name: string;
  profession: string;
  worworkingHoursPerDay: number;
} = {
  name: "Alex Brown",
  profession: "doctor",
  worworkingHoursPerDay: 10,
};

const premiumData: { isPremium: boolean; premium: number } = {
  isPremium: true,
  premium: 1000,
};

const payPerHour: number = 32;

const worworkingDays: number = 14;

const experienceCoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

const getSalaryInfo = (
  employeeData: {
    name: string;
    profession: string;
    worworkingHoursPerDay: number;
  },
  premiumData: {
    isPremium: boolean;
    premium: number;
  },
  payPerHour: number,
  worworkingDays: number,
  experienceCoefficients: number
) => {
  let salary: number;

  if (premiumData.isPremium) {
    salary =
      employeeData.worworkingHoursPerDay *
        payPerHour *
        worworkingDays *
        experienceCoefficients +
      premiumData.premium;
  } else {
    salary =
      employeeData.worworkingHoursPerDay *
      payPerHour *
      worworkingDays *
      experienceCoefficients;
  }

  return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
};

const salaryInfo: string = getSalaryInfo(
  employee,
  premiumData,
  payPerHour,
  worworkingDays,
  experienceCoefficients[2]
);

console.log(salaryInfo); // "doctor Alex Brown has a salary of 6376$ this month"
