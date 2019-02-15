/** 思路
    先把所有的Interval按开始时间排序
    新建一个优先级队列,把开始时间最早的放进去
    第二个过来了, 把第一个从队列弹出(按结束时间早弹出)
    情况1, 冲突, 把1, 2重新塞进队列
    情况2, 不冲突, 把[1.start, 2.end]加入队列
**/

/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
class Solution {
    public int minMeetingRooms(Interval[] intervals) {
        PriorityQueue<Interval> PQ = new PriorityQueue<>(new earlyTimeComparator());
        Arrays.sort(intervals, new earlyStartTimeComparator());
        
        for(int i = 0; i < intervals.length; i++){
            if(i == 0){
                PQ.add(intervals[i]);
                continue;
            }
            Interval cur = PQ.poll();
            if(cur.end > intervals[i].start){
                PQ.add(cur);
                PQ.add(intervals[i]);
            }else{
                PQ.add(new Interval(cur.start, intervals[i].end));   
            }
            
        }
        
        return PQ.size();
    }
}

class earlyTimeComparator implements Comparator<Interval>{
    @Override
    public int compare(Interval o1, Interval o2){
        return o1.end - o2.end;
    }
}

class earlyStartTimeComparator implements Comparator<Interval>{
    @Override
    public int compare(Interval o1, Interval o2){
        return o1.start - o2.start;
    }
}

