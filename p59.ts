// enum이 타입으로 사용
enum WeekDays {
  MON = "Mon",
  TUES = "Tues",
  WEDNES = "Wednes",
  THURS = "Thurs",
  FRI = "Fri",
}

// "MON" | "TUES" | "WEDNES" | "THURS" | "FRI"
type WeekDaysKey = keyof typeof WeekDays;

function printDay(key: WeekDaysKey, message: string) {
  const day = WeekDays[key];
  if (day <= WeekDays.WEDNES) {
    console.log(`It's still ${day}day, ${message}`);
  }
}

printDay("TUES", "wanna go home");