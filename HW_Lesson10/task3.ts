function withEmploymentDate(target: any, context: any): any {
  if (context.kind === "class") {
  }
  return class extends target {
    employmentDate = new Date("2024-04-12T00:00:00.000Z");
  };
}

@withEmploymentDate
class Manager {
  task: string = "Simple task";
  project: string = "Simple project";

  constructor() {
    console.log("Initializing the Manager class");
  }
}

const manager = new Manager();
console.log(manager);
