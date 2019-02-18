// 239. Sliding Window Maximum

class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if(nums.length == 0) return new int[0];
        
        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(new CustomComparator());
        Queue<Integer> q = new LinkedList<Integer>();
        Map<Integer, Integer> map = new HashMap<Integer, Integer>(); // 存储pq里各元素的数量
        List<Integer> array = new ArrayList<Integer>(); 
        
        for(int i = 0; i < k; i++){
            pq.offer(nums[i]);
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
            q.offer(nums[i]);
        }
        
        array.add(pq.peek());
        
        for(int i = k; i < nums.length; i++){
            q.offer(nums[i]);
            pq.offer(nums[i]);
            
            map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);
            
            int cur = q.poll();
            map.put(cur, map.get(cur) - 1);
            
            while(map.get(pq.peek()) == 0){
                pq.poll();
            }
            
            array.add(pq.peek());
        }
        
        int [] res = new int[array.size()];
        //[] length  Collection size()  String length()
        for(int i = 0; i < array.size(); i++){
            res[i] = array.get(i);
        }
        
        return res;
    }
}



class CustomComparator implements Comparator<Integer>{
    @Override
    public int compare(Integer a, Integer b){
        return b - a;
    }
}