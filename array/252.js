/**
 * 252. Meeting Rooms
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
    if (intervals.length === 0) return false;
    intervals.sort(function (a, b) {
        return a[0] - b[0];
    });

    console.log(intervals);

    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) return false;
    }
    return true;

};

console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]]));