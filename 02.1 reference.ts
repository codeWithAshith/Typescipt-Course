// void -> doesn't return anything

const logToConsole = (): void => {
  console.log("Hello world");
};

// Array

let fruits: string[];
fruits = ["Apple", "Orange"];

let foods: Array<string>;
foods = ["pizza", "Burger"];

// Tuple
let genTuple: [number, string, boolean];
genTuple = [22, "string", true];

// Enum
enum DaysOfTheWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
}

let dayToday: DaysOfTheWeek = DaysOfTheWeek.TUESDAY;
