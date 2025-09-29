const WEEKDAYS = {
  MON: "Mon",
  TUES: "Tues",
  WEDNES: "Wednes",
  THURS: "Thurs",
  FRI: "Fri",
} as const;

type Weekdays = typeof WEEKDAYS[keyof typeof WEEKDAYS];

function printDay(day: Weekdays) {
  console.log(`It's ${day}`);
}

printDay('Mon');