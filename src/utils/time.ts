
export const _weekDays = {
  sunday: 'sunday',
  monday: 'monday',
  tuesday: 'tuesday',
  wentsday: 'wentsday',
  thursday: 'thursday',
  friday: 'friday',
  saturday: 'saturday',
} as const

export const rusWeekDays = {
  [_weekDays.monday]: 'Понедельник',
  [_weekDays.tuesday]: 'Вторник',
  [_weekDays.wentsday]: 'Среда',
  [_weekDays.thursday]: 'Четверг',
  [_weekDays.friday]: 'Пятница',
  [_weekDays.saturday]: 'Суббота',
  [_weekDays.sunday]: 'Воскресенье',
}

export type WeekDay = typeof _weekDays[keyof typeof _weekDays]

export const weekDays = Object.keys(_weekDays) as WeekDay[]


export const inMilliseconds = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
}

export const maxTime = (date: Date) => 
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999) 
