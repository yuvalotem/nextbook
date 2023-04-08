const minuteInMilliSeconds = 3600000
const hourInMilliSeconds = 3600000
const DayInMilliSeconds = 86400000
const weekInMilliSeconds = 604800017
const monthInMilliSeconds = 2629800000

const milliSecondsToMintues = (milliseconds: number) => Math.floor(milliseconds / minuteInMilliSeconds)
const milliSecondsToHours = (milliseconds: number) => Math.floor(milliseconds / hourInMilliSeconds)
const milliSecondsToDays = (milliseconds: number) => Math.floor(milliseconds / DayInMilliSeconds)
const milliSecondsToWeeks = (milliseconds: number) => Math.floor(milliseconds / weekInMilliSeconds)

export const getTimeStringSince = (date: Date): string => {
    const now = new Date();
    const potDate = new Date(date);
    const timeSinceInMilliseconds = Math.abs(now.getTime() - potDate.getTime());

    if (timeSinceInMilliseconds < hourInMilliSeconds) {
        return `${milliSecondsToMintues(timeSinceInMilliseconds)}m`
    }
    if (timeSinceInMilliseconds < DayInMilliSeconds) {
        return `${milliSecondsToHours(timeSinceInMilliseconds)}h`
    }
    if (timeSinceInMilliseconds < weekInMilliSeconds) {
        return `${milliSecondsToDays(timeSinceInMilliseconds)}d`
    }
    if (timeSinceInMilliseconds < monthInMilliSeconds) {
        return `${milliSecondsToWeeks(timeSinceInMilliseconds)}w`
    }
    return ''
}