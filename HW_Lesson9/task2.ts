// Task 2

enum PackageStatus {
  Pending = "Pending",
  InTransit = "In Transit",
  Delivered = "Delivered",
  Lost = "Lost",
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
}

interface Parcel {
  readonly id: number;
  weight: number;
  dimensions: Dimensions; // enum
  description?: string;
  sender: number | string;
  status: PackageStatus; // enum
  deliver: (isSuccess: boolean) => void; // Function to handle delivery logic
  readonly statusName: string; // Getter
}

function deliver(isSuccess: boolean): void {}

const item: Parcel = {
  id: 224,
  weight: 22.5,
  dimensions: {
    length: 105,
    width: 44,
    height: 50.5,
  },

  sender: "Nick Scot",
  description: "Super power inside.",
  status: PackageStatus.Pending,

  deliver(isSuccess) {
    this.status = isSuccess ? PackageStatus.Delivered : PackageStatus.Lost;
  },

  get statusName() {
    return this.status;
  },
};

item.deliver(true);
console.log(item.statusName); // Delivered

item.deliver(false);
console.log(item.statusName); // Lost
